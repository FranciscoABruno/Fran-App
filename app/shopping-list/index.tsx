import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Modal,
  StyleSheet,
} from "react-native";
import AddProductModal from "../../components/AddProductModal";
import ProductItem from "../../components/ProductItem";

// Definimos el tipo de un producto
interface Product {
  id: string;
  name: string;
  category: string;
  quantity: number;
  unitPrice: number;
  inCart: boolean;
}

export default function ShoppingList() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isModalVisible, setModalVisible] = useState<boolean>(false);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  // Función para calcular el precio total
  const calculateTotalPrice = (updatedProducts: Product[]): number =>
    updatedProducts.reduce(
      (sum, product) =>
        product.inCart ? sum + product.quantity * product.unitPrice : sum,
      0
    );

  // Añadir producto a la lista
  const addProduct = (newProduct: Omit<Product, "id">) => {
    const productWithId: Product = { ...newProduct, id: Date.now().toString() };
    const updatedProducts = [...products, productWithId];
    setProducts(updatedProducts);
    setTotalPrice(calculateTotalPrice(updatedProducts));
  };

  // Eliminar producto
  const deleteProduct = (id: string) => {
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts(updatedProducts);
    setTotalPrice(calculateTotalPrice(updatedProducts));
  };

  // Marcar como obtenido o no
  const toggleInCart = (id: string) => {
    const updatedProducts = products.map((product) =>
      product.id === id ? { ...product, inCart: !product.inCart } : product
    );
    setProducts(updatedProducts);
    setTotalPrice(calculateTotalPrice(updatedProducts));
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Lista de la Compra</Text>
        <Text style={styles.total}>Total: {totalPrice.toFixed(2)}€</Text>
      </View>
      {products.length === 0 ? (
        <Text style={styles.emptyMessage}>La lista está vacía</Text>
      ) : (
        <FlatList
          data={products}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <ProductItem
              product={item}
              onDelete={deleteProduct}
              onToggleInCart={toggleInCart}
            />
          )}
        />
      )}
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.addButtonText}>Añadir Producto</Text>
      </TouchableOpacity>
      <Modal visible={isModalVisible} animationType="slide">
        <AddProductModal
          onClose={() => setModalVisible(false)}
          onAddProduct={addProduct}
        />
      </Modal>
    </View>
  );
}

// Estilos
const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#fff" },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  title: { fontSize: 20, fontWeight: "bold" },
  total: { fontSize: 16, color: "#333" },
  emptyMessage: {
    textAlign: "center",
    marginVertical: 20,
    fontSize: 16,
    color: "#888",
  },
  addButton: {
    backgroundColor: "#007bff",
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
    marginVertical: 10,
  },
  addButtonText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
});
