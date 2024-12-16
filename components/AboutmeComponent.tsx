import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";

export type AboutMeProps = {
  aboutme: string[];
};

const AboutMe = ({ aboutme }: AboutMeProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>↓↓ Cosas que me gustan mucho ↓↓</Text>
      <FlatList
        data={aboutme}
        renderItem={({ item }) => <Text style={styles.listItem}>{item}</Text>}
        keyExtractor={(item, index) => index.toString()}
        style={styles.scrollContainer}
        showsVerticalScrollIndicator={true}
      />
    </View>
  );
};

export default AboutMe;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 550,
    padding: 40,
    justifyContent: "center",
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "900",
    textAlign: "center",
    textTransform: "capitalize",
    marginVertical: 10,
    backgroundColor: "#21a875",
    color: "#fff",
    borderRadius: 100,
  },
  scrollContainer: {
    width: "100%",
  },
  listItem: {
    width: 330,
    borderColor: "#14875e",
    borderWidth: 1.5,
    borderStyle: "solid",
    padding: 20,
    color: "#14875e",
    textAlign: "center",
    fontWeight: "bold",
    fontStyle: "italic",
    fontSize: 16,
    backgroundColor: "#fff",
  },
});