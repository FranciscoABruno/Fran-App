import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

export type CardProps = {
  id: number;
  title: string;
  description: string;
  imgSource: any;
};

const Card = ({ title, description, imgSource, }: CardProps) => {
  return (
    <View style={styles.container}>
      <Image style={styles.avatar} source={imgSource} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    width: "90%",
    flexDirection: "row",
    borderWidth: 2,
    backgroundColor: "#21a875",
    padding: 10,
    marginVertical: 10,
    borderRadius: 10,
    marginLeft: 20,
    marginTop: 10,
    borderColor: "#fff",
  },
  avatar: {
    borderWidth: 2,
    borderColor: "#fff",
    height: 90,
    width: 90, 
    borderRadius: 45,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#fff",
  },
  description: {
    fontSize: 16,
    color: "#fff",
  },
});
