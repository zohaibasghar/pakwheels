import { FlatList, StyleSheet, View } from "react-native";
import React from "react";
import AdCard from "./AdCard";
import { IAdDTO } from "../interfaces";

const pakWheelsAds = [
  {
    image: "https://mosautoshina.ru/i/auto/nissan_dayz_2021.jpg",
    model: "Nissan Dayz 2021",
    price: "34.5",
    city: "Karachi",
    year: "2021",
    traveled: "8819",
    type: "Petrol",
  },
  {
    image:
     "https://imgd.aeplcdn.com/1280x720/n/cw/ec/128231/hyundai-tucson-left-front-three-quarter0.jpeg",
    model: "Hyundai Tucson 2022",
    price: "80.8",
    city: "Lahore",
    year: "2022",
    traveled: "32831",
    type: "Petrol",
  },
  {
    image: "https://sbimotor.com/uploads/car/images/419354/3771390_big_d9c50227.jpg",
    model: "Toyota Pixis Epoch 2020",
    price: "42.0",
    city: "Islamabad",
    year: "2020",
    traveled: "36122",
    type: "Petrol",
  },
  {
    image: "https://i.gaw.to/content/photos/33/64/336442_2018_Toyota_C-HR.jpg",
    model: "Toyota C-HR 2018",
    price: "95.0",
    city: "Faisalabad",
    year: "2018",
    traveled: "92908",
    type: "Petrol",
  },
  {
    image: "https://www.ccarprice.com/products/Mercedes_Benz_EQC_2022.jpg",
    model: "Mercedes Benz EQC 2022",
    price: "320.0",
    city: "Lahore",
    year: "2022",
    traveled: "18367",
    type: "Electric",
  },
  {
    image: "https://www.gari.pk/images/news/2018-06/551_1_44427.jpg",
    model: "Suzuki Jimny 2019",
    price: "53.9",
    city: "Lahore",
    year: "2019",
    traveled: "57515",
    type: "Petrol",
  },
  {
    image: "https://www.ccarprice.com/products/Toyota_LandCruiser_2022_1.jpg",
    model: "Toyota Land Cruiser",
    price: "719.0",
    city: "Lahore",
    year: "2022",
    traveled: "12380",
    type: "Petrol",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/9/9e/2014_Toyota_Corolla_%28ZRE172R%29_Ascent_sedan_%282014-04-11%29.jpg",
    model: "Toyota Corrola 2023",
    price: "71.5",
    city: "Lahore",
    year: "2023",
    traveled: "77",
    type: "Petrol",
  },
];

const PakWheelsAds = () => {
  const renderItem = ({ item }: { item: IAdDTO }) => (
    <AdCard
      image={item.image}
      model={item.model}
      price={item.price}
      city={item.city}
      year={item.year}
      traveled={item.traveled}
      type={item.type}
    />
  );

  const ItemSeparator = () => <View style={styles.separator} />;

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={pakWheelsAds}
        horizontal
        keyExtractor={(_, index) => index.toString()}
        renderItem={renderItem}
        ItemSeparatorComponent={ItemSeparator}
        contentContainerStyle={styles.container}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default PakWheelsAds;

const styles = StyleSheet.create({
  separator: {
    width: 10,
  },
  container: {
    paddingHorizontal: 12,
  },
});
