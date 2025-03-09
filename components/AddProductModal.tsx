import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

interface AddProductModalProps {
  onClose: () => void;
  onAddProduct: (product: {
    name: string;
    category: string;
    quantity: number;
    unitPrice: number;
    inCart: boolean;
  }) => void;
}

export default function AddProductModal({
  onClose,
  onAddProduct,
}: AddProductModalProps) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState("");
  const [unitPrice, setUnitPrice] = useState("");

  const handleAdd = () => {
    if (!name || !category || !quantity || !unitPrice) {
      alert("Todos los campos son obligatorios");
      return;
    }

    onAddProduct({
      name,
      category,
      quantity: parseInt(quantity),
      unitPrice: parseFloat(unitPrice),
      inCart: false,
    });

    onClose(); // Cierra el modal después de añadir el producto
  };

  return (
    <View style={styles.modalContainer}>
      <Text style={styles.title}>Añadir Producto</Text>
      <TextInput
        style={styles.input}
        placeholder="Nombre del producto"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Categoría"
        value={category}
        onChangeText={setCategory}
      />
      <TextInput
        style={styles.input}
        placeholder="Cantidad"
        keyboardType="numeric"
        value={quantity}
        onChangeText={setQuantity}
      />
      <TextInput
        style={styles.input}
        placeholder="Precio por unidad (€)"
        keyboardType="numeric"
        value={unitPrice}
        onChangeText={setUnitPrice}
      />
      <TouchableOpacity style={styles.addButton} onPress={handleAdd}>
        <Text style={styles.addButtonText}>Agregar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.closeButton} onPress={onClose}>
        <Text style={styles.closeButtonText}>Cancelar</Text>
      </TouchableOpacity>
    </View>
  );
}

// Estilos
const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
  },
  input: {
    borderBottomWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 12,
    fontSize: 16,
  },
  addButton: {
    backgroundColor: "#21a875",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    marginVertical: 10,
  },
  addButtonText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
  closeButton: {
    backgroundColor: "#e63946",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  closeButtonText: { color: "#fff", fontSize: 16 },
});
