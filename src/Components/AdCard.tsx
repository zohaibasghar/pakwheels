import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Entypo, Feather } from "@expo/vector-icons";

type IAdProps = {
  image: string;
  model: string;
  price: string;
  city: string;
  year: string;
  traveled: string;
  type: string;
  certified?: boolean;
  featured?: boolean;
  discount?: number;
  cart?: boolean;
};

const AdCard = ({
  image,
  model,
  price,
  city,
  year,
  traveled,
  type,
  certified,
  featured,
  discount,
  cart,
}: IAdProps) => {
  return (
    <TouchableOpacity style={styles.card}>
      <View style={styles.box}>
        {featured && (
          <View style={styles.leftLabel}>
            <Entypo name="star" size={16} color="white" />
          </View>
        )}
        {!!discount && (
          <View style={styles.leftLabel}>
            <Text style={{ color: "white", paddingVertical: 2 }}>{discount}% off</Text>
          </View>
        )}
        {cart && (
          <View style={styles.rightLabel}>
            <Feather name="shopping-cart" size={16} color="white" />
          </View>
        )}
        <Image style={styles.headImage} source={{ uri: image }} />
        {certified && (
          <Image style={styles.certifiedImage} source={require("../../assets/certified.png")} />
        )}
      </View>
      <View style={styles.detail}>
        <Text style={{ fontSize: 16, fontWeight: "300" }}>{model}</Text>
        <Text style={{ fontSize: 18, fontWeight: "600" }}>PKR {price} lacs</Text>
        <Text style={styles.specs}>{city}</Text>
        {!cart && (
          <Text style={styles.specs}>
            {year} | {traveled} km | {type}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default AdCard;

const styles = StyleSheet.create({
  card: {
    height: 270,
    width: 200,
    marginHorizontal: 6,
    backgroundColor: "#fff",
    borderRadius: 12,
    overflow: "hidden",
  },
  headImage: {
    height: 150,
    width: "100%",
    objectFit: "cover",
  },
  certifiedImage: {
    width: 100,
    objectFit: "contain",
    position: "absolute",
    bottom: -40,
    left: 0,
  },
  box: {
    position: "relative",
  },
  detail: {
    display: "flex",
    padding: 10,
    gap: 6,
  },
  specs: {
    fontSize: 14,
    color: "#666",
  },
  leftLabel: {
    backgroundColor: "red",
    position: "absolute",
    left: 0,
    top: 10,
    paddingLeft: 6,
    paddingRight: 4,
    paddingVertical: 2,
    borderEndEndRadius: 12,
    borderStartEndRadius: 12,
    zIndex: 2,
  },
  rightLabel: {
    backgroundColor: "blue",
    position: "absolute",
    right: 0,
    top: 10,
    paddingRight: 6,
    paddingVertical: 2,
    paddingLeft: 4,
    borderStartStartRadius: 12,
    borderEndStartRadius: 12,
    zIndex: 2,
  },
});
