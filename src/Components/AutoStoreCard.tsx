import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";

type IAdProps = {
  image: string;
  model: string;
  price: string;
  discount?: number;
  cart?: boolean;
};

const AutoStoreCard = ({ image, model, price, discount, cart }: IAdProps) => {
  return (
    <TouchableOpacity style={styles.card}>
      <View style={styles.box}>
        {!!discount && (
          <View style={styles.leftLabel}>
            <Text style={{ color: "white", paddingVertical: 2 }}>{discount}% off</Text>
          </View>
        )}
        {cart && (
          <View style={styles.rightLabel}>
            <FontAwesome name="shopping-cart" size={16} color="white" />
          </View>
        )}
        <Image style={styles.headImage} source={{ uri: image }} />
      </View>
      <View style={styles.detail}>
        <Text numberOfLines={1} ellipsizeMode="tail" style={{ fontSize: 16, fontWeight: "300" }}>
          {model}
        </Text>
        <View style={{ display: "flex", alignItems: "baseline", flexDirection: "row", gap: 12 }}>
          <Text style={{ fontSize: 18, fontWeight: "600" }}>PKR {price}</Text>
          <Text
            style={{
              fontWeight: "400",
              fontSize: 12,
              textDecorationLine: "line-through",
              color: "#666",
            }}
          >
            PKR 5,598
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default AutoStoreCard;

const styles = StyleSheet.create({
  card: {
    height: 220,
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
