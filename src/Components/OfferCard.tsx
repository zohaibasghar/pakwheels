import { View, Image, StyleSheet, Text, ImageSourcePropType, TouchableOpacity } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

const OfferCard = ({ image, title }: { image: ImageSourcePropType; title: string }) => {
  return (
    <TouchableOpacity style={styles.view}>
      <View>
        <Image source={image} style={styles.img} />
        <Text style={{ color: "blue", fontSize: 10, marginVertical: 8 }}>PAKWHEELS</Text>
      </View>
      <View style={styles.bottom}>
        <Text style={{ fontSize: 18, width: "90%", fontWeight: "600" }}>{title}</Text>
        <AntDesign name="right" size={20} color="black" />
      </View>
    </TouchableOpacity>
  );
};

export default OfferCard;

const styles = StyleSheet.create({
  view: {
    display: "flex",
    justifyContent: "space-between",
    width: "48%",
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 12,
  },
  img: {
    width: "80%",
    height: 100,
    padding: 4,
    marginHorizontal: "auto",
    objectFit: "contain",
  },
  bottom: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
  },
});
