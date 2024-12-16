import { Link } from "expo-router";
import { StyleSheet, Text, View, ImageBackground, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";

export default function Page() {
  const backgroundImage = require("../assets/IMG-20241021-WA0038.jpg");
  const centerImage = require("../assets/fun.webp");

  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
      <View style={styles.container}>
        {/* Texto con fondo gradiente */}
        <LinearGradient
          colors={["#14875e", "#44c38f"]} // Colores del gradiente
          style={styles.gradientBackground}
        >
          <Text style={styles.title}>! Bienvenido a mi app !</Text>
        </LinearGradient>

        {/* Imagen en el centro */}
        <View style={styles.imageContainer}>
          <Image source={centerImage} style={styles.centerImage} />
        </View>

        {/* Boton en la parte de abajo */}
        <View style={styles.buttonContainer}>
          <Link href="./profile" style={styles.button}>
            <Text style={styles.buttonText}>Click aquí!</Text>
          </Link>
        </View>
        <StatusBar style="auto" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },
  gradientBackground: {
    marginTop: 70,
    borderRadius: 5,
    padding: 10,
  },
  imageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  centerImage: {
    width: 500,
    height: 390,
    resizeMode: "contain",
    marginLeft: 140,
  },
  buttonContainer: {
    padding: 20,
    width: "100%",
    alignItems: "center",
    marginBottom: 30,
  },
  button: {
    backgroundColor: "#21a875",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
