import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const HeadingSpaceBetween = ({ heading, label }: { heading: string; label?: string }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.heading}>{heading}</Text>
      <TouchableOpacity>
        <Text style={styles.anchor}>{label ?? "See all"}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HeadingSpaceBetween;

const styles = StyleSheet.create({
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "baseline",
    flexDirection: "row",
    marginHorizontal: 12,
    marginVertical: 24,
  },
  heading: {
    fontWeight: "600",
    fontSize: 18,
  },
  anchor: {
    color: "blue",
  },
});
