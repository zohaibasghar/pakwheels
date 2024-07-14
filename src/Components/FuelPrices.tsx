import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { FontAwesome6 } from "@expo/vector-icons";

const fuelPrices = [
  { type: "Petrol (Super)", price: "265.61" },
  { type: "High Speed Diesel", price: "277.45" },
  { type: "Light Speed Diesel", price: "166.86" },
  { type: "Kerosene Oil", price: "186.86" },
  { type: "CNG Region-I*", price: "210" },
  { type: "CNG Region-II**", price: "210" },
];
const FuelPrices = () => {
  return (
    <View
      style={{
        marginHorizontal: "auto",
        backgroundColor: "#fff",
        width: "90%",
        padding: 12,
        marginVertical: 24,
      }}
    >
      <View style={styles.heading}>
        <FontAwesome6 name="gas-pump" size={24} color="#333" />
        <Text style={{ fontWeight: "600", fontSize: 18 }}>Current Fuel Prices</Text>
      </View>
      <View style={styles.banner}>
        <Text style={{ fontSize: 16, color: "white", width: "70%" }}>Type</Text>
        <Text style={{ fontSize: 16, color: "white", fontWeight: 600, width: "30%" }}>
          Price Per Liter
        </Text>
      </View>
      {fuelPrices.map((price, index) => (
        <View key={index} style={styles.item}>
          <Text style={{ width: "70%", fontSize: 16 }}>{price.type}</Text>
          <Text style={{ width: "30%", fontSize: 12 }}>
            PKR <Text style={{ fontSize: 16, fontWeight: "600" }}>{price.price}</Text>
          </Text>
        </View>
      ))}
    </View>
  );
};

export default FuelPrices;

const styles = StyleSheet.create({
  heading: { display: "flex", flexDirection: "row", alignItems: "center", gap: 12 },
  banner: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#333",
    padding: 8,
    marginVertical: 12,
    borderRadius: 4,
    alignItems: "center",
  },
  item: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
    alignItems: "baseline",
  },
});
