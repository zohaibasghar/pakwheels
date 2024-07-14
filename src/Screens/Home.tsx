import React from "react";
import { ScrollView, StyleSheet, Text } from "react-native";
import Header from "../Components/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import Search from "../Components/Search";
import FilterCategory from "../Components/FilterCategory";
import Offerings from "../Components/Offerings";
import HeadingSpaceBetween from "../Components/HeadingSpaceBetween";
import CertifiedAds from "../Components/CertifiedAds";
import PakWheelsAds from "../Components/PakWheelsAds";
import FeaturedAds from "../Components/FeaturedAds";
import AutoStoreAds from "../Components/AutoStoreAds";

export default function Home() {
  return (
    <ScrollView style={styles.flex}>
      <SafeAreaView style={{ backgroundColor: "#1D3A5F", paddingHorizontal: 12 }}>
        <Header />
        <Search />
      </SafeAreaView>
      <Text style={styles.title}>Browse Used Cars</Text>
      <FilterCategory />
      <Text style={styles.title}>PakWheels Offerings</Text>
      <Offerings />
      <HeadingSpaceBetween heading="PakWheels Certified" />
      <CertifiedAds />
      <HeadingSpaceBetween heading="Managed by PakWheels" />
      <PakWheelsAds />
      <HeadingSpaceBetween heading="Featured Used Cars" />
      <FeaturedAds />
      <HeadingSpaceBetween heading="PakWheels Autostore" />
      <AutoStoreAds />
    </ScrollView>
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
