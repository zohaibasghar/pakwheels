import { View, StyleSheet } from "react-native";
import React from "react";
import OfferCard from "./OfferCard";

const offers = [
  { image: require("../../assets/sell_it.png"), title: "SELL IT FOR ME" },
  { image: require("../../assets/inspection.png"), title: "CAR INSPECTION" },
  { image: require("../../assets/insurance.png"), title: "CAR INSURANCE" },
  { image: require("../../assets/registeration.png"), title: "CAR REGISTRATION" },
  { image: require("../../assets/workshop.png"), title: "PARTNER WORKSHOP" },
];
const Offerings = () => {
  return (
    <View style={styles.list}>
      {offers.map((offer) => (
        <OfferCard key={offer.title} image={offer.image} title={offer.title} />
      ))}
    </View>
  );
};

export default Offerings;

const styles = StyleSheet.create({
  list: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
    marginHorizontal:12
  },
});
