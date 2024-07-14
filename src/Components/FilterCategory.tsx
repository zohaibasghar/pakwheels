import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import Swiper from "react-native-swiper";
import { Fontisto } from "@expo/vector-icons";

type CategoryType = "Category" | "Budget" | "Brands" | "Model" | "Cities" | "Body Types";

const list: CategoryType[] = ["Category", "Budget", "Brands", "Model", "Cities", "Body Types"];
const listDropDown: Record<CategoryType, any[]> = {
  Category: [
    {
      image: "",
      title: "Automatic cars",
    },
    {
      image: "",
      title: "Family cars",
    },
    {
      image: "",
      title: "5 Seater",
    },
    {
      image: "",
      title: "Small cars",
    },
    {
      image: "",
      title: "Big cars",
    },
    {
      image: "",
      title: "4 Door",
    },
    {
      image: "",
      title: "Imported cars",
    },
    {
      image: "",
      title: "Old Cars",
    },
    {
      image: "",
      title: "5 Door",
    },
    {
      image: "",
      title: "1000cc cars",
    },
    {
      image: "",
      title: "1300cc cars",
    },
    {
      image: "",
      title: "Japanese cars",
    },
    {
      image: "",
      title: "Low Priced cars",
    },
    {
      image: "",
      title: "660cc cars",
    },
    {
      image: "",
      title: "Low Mileage Cars",
    },
    {
      image: "",
      title: "Cheap cars",
    },
    {
      image: "",
      title: "Jeep",
    },
    {
      image: "",
      title: "Hybrid cars",
    },
    {
      image: "",
      title: "4 Seater",
    },
  ],
  Budget: [
    "under 5 lakh",
    "5-10 lakh",
    "10-20 lakh",
    "20-30 lakh",
    "30-40 lakh",
    "40-50 lakh",
    "50-60 lakh",
    "60-70 lakh",
    "70-80 lakh",
    "80-1 crore",
    "1-1.5 crore",
    "1.5-2 crore",
    "above 2 crore",
  ],
  Brands: [
    { image: require("../../assets/suzuki.png"), title: "Suzuki" },
    { image: require("../../assets/toyota.png"), title: "Toyota" },
    { image: require("../../assets/honda.png"), title: "Honda" },
    { image: require("../../assets/nissan.png"), title: "Nissan" },
    { image: require("../../assets/hyundai.png"), title: "Hyundai" },
    { image: require("../../assets/kia.png"), title: "KIA" },
    { image: require("../../assets/mitsubishi.png"), title: "Mitsubishi" },
    { image: require("../../assets/mercedes.png"), title: "Mercedes Benz" },
  ],
  Model: [
    "Corolla",
    "Civic",
    "Mehran",
    "City",
    "Cultus",
    "Alto",
    "Wagon R",
    "Vitz",
    "Bolan",
    "Swift",
  ],
  Cities: [
    "Lahore",
    "Karachi",
    "Islamabad",
    "Rawalpindi",
    "Peshawar",
    "Faisalabad",
    "Multan",
    "Gujranwala",
    "Sialkot",
    "Sargodha",
  ],
  "Body Types": [
    { image: "", title: "Hatchback" },
    { image: "", title: "Sedan" },
    { image: "", title: "SUV" },
    { image: "", title: "Crossover" },
    { image: "", title: "Mini Van" },
    { image: "", title: "Van" },
    { image: "", title: "MPV" },
    { image: "", title: "Micro Van" },
    { image: "", title: "Compact sedan" },
    { image: "", title: "Double Cabin" },
    { image: "", title: "Compact SUV" },
    { image: "", title: "Pick Up" },
    { image: "", title: "Station Wagon" },
    { image: "", title: "Coupe" },
    { image: "", title: "Mini Vehicles" },
    { image: "", title: "Truck" },
    { image: "", title: "Convertible" },
    { image: "", title: "High Roof" },
    { image: "", title: "Single Cabin" },
    { image: "", title: "Off Road Vehicles" },
    { image: "", title: "Compact Hatchback" },
    { image: "", title: "Sub compact hatchback" },
  ],
};

const FilterCategory = () => {
  const [selectedCat, setSelectedCat] = useState<CategoryType>("Category");
  const chunkArray = (arr: any, size: number) => {
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size));
    }
    return result;
  };

  const pages = chunkArray(listDropDown[selectedCat], 8);

  return (
    <View>
      <ScrollView
        horizontal
        style={{ paddingHorizontal: 12 }}
        showsHorizontalScrollIndicator={false}
      >
        {list.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.listItem}
            onPress={() => setSelectedCat(item)}
          >
            <View
              style={{
                paddingBottom: 8,
                borderBottomWidth: selectedCat === item ? 3 : 0,
                borderBottomColor: "#1D3A5F",
              }}
            >
              <Text>{item}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <Swiper style={{ height: 260 }} loop={false} key={selectedCat}>
        {pages.map((page, pageIndex) => (
          <View key={pageIndex} style={styles.swiperContent}>
            {page.map((type: any, index: number) =>
              selectedCat === "Category" ||
              selectedCat === "Brands" ||
              selectedCat === "Body Types" ? (
                <TouchableOpacity key={index} style={styles.card}>
                  <Fontisto name="car" size={42} color="#666" />
                  <Text style={styles.text}>{type.title}</Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity style={styles.tab} key={index}>
                  <Text style={{ textAlign: "center" }}>{type}</Text>
                </TouchableOpacity>
              ),
            )}
          </View>
        ))}
      </Swiper>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 12,
  },
  swiperContainer: {
    height: 260,
  },
  swiperContent: {
    height: 300,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 6,
    marginHorizontal: 12,
    width: "100%",
  },
  card: {
    height: 100,
    width: "22%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 4,
    backgroundColor: "white",
    borderRadius: 12,
  },
  text: {
    textAlign: "center",
    marginTop: 6,
  },
  tab: {
    display: "flex",
    width: "48%",
    marginTop: 12,
  },
});

export default FilterCategory;
