import { Link, Stack } from "expo-router";
import { Text, StyleSheet, View } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";

const _layout = () => {
  return (
    <Stack
      screenOptions={{
        header: () => (
          <View style={styles.headerContainer}>
            <Link href="/">
              <Text style={styles.headerText}>Fran App / My Portfolio </Text>
              <Entypo name="briefcase" size={26} color="#fff" />
            </Link>
          </View>
        ),
      }}
    >
      <Stack.Screen name="./(tabs)" />
    </Stack>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: "#21a875",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
    paddingTop: 28,
  },
  headerText: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
  },
});

export default _layout;
