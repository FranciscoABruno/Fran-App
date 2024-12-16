import { Tabs } from "expo-router";
import { Text, View } from "react-native";
import Fontisto from "@expo/vector-icons/Fontisto";

import Card from "../../../components/CardComponent";
import { infocard } from "../../../data/CardData";

export default () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#21a875",
        header: () => (
          <Card
            id={22}
            title={infocard.name}
            description={infocard.myInfo}
            imgSource={require("../../../assets/Photo.jpg")}
          />
        ),
      }}
    >
      <Tabs.Screen
        name="aboutme"
        options={{
          title: "aboutme",
          tabBarIcon: () => <Fontisto name="person" size={24} color="#21a875" />,
        }}
      />
      <Tabs.Screen
        name="repository"
        options={{
          title: "repository",
          tabBarIcon: () => <Fontisto name="qrcode" size={24} color="#21a875" />,
        }}
      />
    </Tabs>
  );
};
