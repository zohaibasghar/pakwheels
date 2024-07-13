import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import Swiper from "react-native-swiper";

const list = ["Category", "Budget", "Brands", "Model", "Cities", "Body Types"];
const listDropDown = {
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

const { width: viewportWidth } = Dimensions.get("window");

const FilterCategory = () => {
  const [selectedCat, setSelectedCat] = useState<string>("Category");

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
      <View style={styles.container}>
        {/* <Swiper
          style={styles.wrapper}
          showsButtons={false}
          dot={<View style={styles.dot} />}
          activeDot={<View style={styles.activeDot} />}
        >
          {listDropDown.Brands.map((item, index) => (
            <View style={styles.card} key={index}>
              {item.image ? (
                <Image source={item.image} style={styles.logo} />
              ) : (
                <View style={styles.logoPlaceholder} />
              )}
              <Text style={styles.name}>{item.title}</Text>
            </View>
          ))}
        </Swiper> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 12,
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  wrapper: {
    height: viewportWidth / 2,
  },
  card: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 10,
    marginHorizontal: 5,
    elevation: 3,
    height: viewportWidth / 2,
  },
  logo: {
    width: 50,
    height: 50,
    resizeMode: "contain",
  },
  logoPlaceholder: {
    width: 50,
    height: 50,
    backgroundColor: "#f0f0f0",
    borderRadius: 25,
  },
  name: {
    marginTop: 10,
    fontSize: 16,
  },
  dot: {
    backgroundColor: "rgba(0,0,0,.2)",
    width: 8,
    height: 8,
    borderRadius: 4,
    margin: 3,
  },
  activeDot: {
    backgroundColor: "#007aff",
    width: 8,
    height: 8,
    borderRadius: 4,
    margin: 3,
  },
});

export default FilterCategory;