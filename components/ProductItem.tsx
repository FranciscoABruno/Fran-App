import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

interface ProductItemProps {
  product: {
    id: string;
    name: string;
    category: string;
    quantity: number;
    unitPrice: number;
    inCart: boolean;
  };
  onDelete: (id: string) => void;
  onToggleInCart: (id: string) => void;
}

export default function ProductItem({
  product,
  onDelete,
  onToggleInCart,
}: ProductItemProps) {
  return (
    <View style={styles.productItem}>
      <Text style={product.inCart ? styles.obtainedText : styles.normalText}>
        {product.name} ({product.quantity} x {product.unitPrice.toFixed(2)}€)
      </Text>
      <TouchableOpacity
        style={[
          styles.toggleButton,
          product.inCart ? styles.obtained : styles.pending,
        ]}
        onPress={() => onToggleInCart(product.id)}
      >
        <Text style={styles.buttonText}>
          {product.inCart ? "Obtenido" : "Pendiente"}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => onDelete(product.id)}
      >
        <Text style={styles.buttonText}>Eliminar</Text>
      </TouchableOpacity>
    </View>
  );
}

// Estilos
const styles = StyleSheet.create({
  productItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
  },
  normalText: { fontSize: 16 },
  obtainedText: {
    fontSize: 16,
    textDecorationLine: "line-through",
    color: "gray",
  },
  toggleButton: { padding: 10, borderRadius: 5, alignItems: "center" },
  obtained: { backgroundColor: "#28a745" },
  pending: { backgroundColor: "#ffc107" },
  deleteButton: { backgroundColor: "#dc3545", padding: 10, borderRadius: 5 },
  buttonText: { color: "#fff", fontSize: 14 },
});
