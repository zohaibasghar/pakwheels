import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { AntDesign, FontAwesome6 } from "@expo/vector-icons";

const Search = () => {
  return (
    <View style={styles.searchBar}>
      <AntDesign name="search1" size={20} color="black" style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder="Search used cars"
        placeholderTextColor={"#555"}
      />
      <View style={styles.locationContainer}>
        <FontAwesome6 name="location-dot" size={12} color="black" />
        <Text style={{ fontSize: 12 }}>All Cities</Text>
      </View>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  searchBar: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    paddingHorizontal: 10,
    borderRadius: 5,
    marginHorizontal: 10,
    marginTop: 10,
  },
  icon: {
    marginRight: 6,
  },
  input: {
    flex: 1,
    height: 40,
    paddingLeft: 10,
  },
  locationContainer: {
    gap: 8,
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 10,
  },
});
