import { View, Text, ImageBackground } from "react-native";
import React from "react";
import { cards } from "../../../data/AboutmeData";
import AboutMe from "../../../components/AboutmeComponent";
import { StyleSheet } from "react-native";

const image = require("../../../assets/IMG-20241021-WA0038.jpg");

const Cards = () => {
  return (
    <ImageBackground source={image} style={styles.backgroundImage}>
    <View style={styles.flex}>
      <AboutMe aboutme={cards} />
    </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});

export default Cards;
