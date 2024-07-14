import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import {
  Entypo,
  MaterialCommunityIcons,
  Foundation,
  MaterialIcons,
  FontAwesome,
  AntDesign,
} from "@expo/vector-icons";

const browseLinks = [
  {
    icon: <Entypo name="chat" size={18} color="black" />,
    heading: "Forums",
    desc: "Discuss about everything on wheel",
  },
  {
    icon: <MaterialCommunityIcons name="file-document" size={18} color="black" />,
    heading: "Blog",
    desc: "PakWheels brings you the latest auto industry updates",
  },
  {
    icon: <Foundation name="price-tag" size={20} color="black" />,
    heading: "New Car Prices",
    desc: "Get the latest price list",
  },
  {
    icon: <MaterialIcons name="stars" size={18} color="black" />,
    heading: "Car Reviews",
    desc: "Help you find the right car",
  },
  {
    icon: <MaterialCommunityIcons name="compare-remove" size={18} color="black" />,
    heading: "Car Comaprisons",
    desc: "Compare car specifications and features",
  },
  {
    icon: <FontAwesome name="car" size={16} color="black" />,
    heading: "Get on road price",
    desc: "Know the final price of your new car",
  },
];
const BrowseMore = () => {
  return (
    <View style={{ marginHorizontal: "auto", width: "92%", marginBottom: 24 }}>
      {browseLinks.map((link, index) => (
        <TouchableOpacity key={index} style={styles.listItem}>
          <View style={styles.flex}>
            <View
              style={{
                width: "10%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {link.icon}
            </View>
            <View style={{ width: "80%" }}>
              <Text style={{ fontSize: 14, fontWeight: "600" }}>{link.heading}</Text>
              <Text style={{ color: "#666", marginTop: 2 }}>{link.desc}</Text>
            </View>
          </View>
          <AntDesign name="right" size={14} color="black" />
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default BrowseMore;

const styles = StyleSheet.create({
  listItem: {
    display: "flex",
    marginBottom: 18,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  flex: {
    display: "flex",
    flexDirection: "row",
    gap: 12,
  },
});
