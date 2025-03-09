import { View, Text, Button } from "react-native";
import { useRouter } from "expo-router";

export default function ShoppingScreen() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>🛒 Lista de Compras</Text>
      
      <Button title="Ver Lista / añadir producto" onPress={() => router.push("/shopping-list")} />
    </View>
  );
}
