import { ImageBackground, StyleSheet, View } from "react-native";
import React from "react";
import QRCode from "react-native-qrcode-svg";

const image = require("../../../assets/IMG-20241021-WA0038.jpg");

const repository = () => {
  return (
    <ImageBackground source={image} style={styles.backgroundImage}>
      <View style={styles.centerQRCode}>
        <QRCode value="https://github.com/FranciscoABruno" />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  centerQRCode: {
    flex: 1,
    margin: 73,
    alignItems: "flex-start",
    width: "100%",
    height: "100%",
    paddingLeft: 85,
    marginTop: 190,
  },
    backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});

export default repository;
