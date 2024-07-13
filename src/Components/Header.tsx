import { View, Text, ScrollView, StyleSheet } from "react-native";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

const list = ["Used Cars", "New Cards", "Bikes", "Auto Store"];
const Header = () => {
  const [selectedCat, setSelectedCat] = useState<string>("Used Cars");
  return (
    <ScrollView horizontal>
      {list.map((item, index) => {
        return (
          <TouchableOpacity onPress={() => setSelectedCat(item)} key={index}>
            <View
              style={{
                ...styles.capsule,
                backgroundColor: selectedCat === item ? "#FFF" : "#1D3A5F",
                borderWidth: selectedCat === item ? 0 : 1,
                borderColor: "#fff",
              }}
            >
              <Text
                style={{
                  color: selectedCat === item ? "#1D3A5F" : "#FFF",


                }}
              >
                {item}
              </Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};

export default Header;

const styles = StyleSheet.create({
  capsule: {
    backgroundColor: "#fff",
    paddingHorizontal: 12,
    paddingVertical: 4,
    marginHorizontal: 8,
    marginVertical: 12,
    borderRadius: 12,
  },
});
