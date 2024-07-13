import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "../Components/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import Search from "../Components/Search";
import FilterCategory from "../Components/FilterCategory";

export default function Home() {
  return (
    <View style={styles.flex}>
      <SafeAreaView style={{ backgroundColor: "#1D3A5F", paddingHorizontal: 12 }}>
        <Header />
        <Search />
      </SafeAreaView>
      <Text style={styles.title}>Browse Used Cars</Text>
      <FilterCategory />
    </View>
  );
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  title: {
    fontWeight: "600",
    fontSize: 18,
    paddingHorizontal: 12,
    marginTop: 16,
    marginBottom: 8,
  },
});
