import { FlatList, StyleSheet, View } from "react-native";
import React from "react";
import AutoStoreCard from "./AutoStoreCard";

interface AutostoreDTO {
  image: string;
  model: string;
  price: string;
  discount: number;
}

const autoStoreAds: AutostoreDTO[] = [
  {
    image:
      "https://cache2.pakwheels.com/ad_pictures/6507/pakwheels-all-purpose-cleaner-car-interior-and-exterior-cleaner-65077533.jpg",
    model: "PakWheels All Purpose Cleaner",
    price: "1,079",
    discount: 0,
  },
  {
    image:
      "https://cache2.pakwheels.com/ad_pictures/9138/pakwheels-all-in-one-car-care-kit-pack-of-5-with-free-microfiber-towel-91388979.webp",
    model: "PakWheels All In One Car Care",
    price: "4,599",
    discount: 8,
  },
  {
    image:
      "https://cache2.pakwheels.com/ad_pictures/6507/pakwheels-all-purpose-cleaner-car-interior-and-exterior-cleaner-65077533.jpg",
    model: "PakWheels All In One Cat Care",
    price: "4,299",
    discount: 23,
  },
  {
    image:
      "https://cache2.pakwheels.com/ad_pictures/6507/pakwheels-all-purpose-cleaner-car-interior-and-exterior-cleaner-65077533.jpg",
    model: "PakWheels All Purpose Cleaner",
    price: "1,718",
    discount: 3,
  },
];

const AutoStoreAds = () => {
  const renderItem = ({ item }: { item: AutostoreDTO }) => (
    <AutoStoreCard
      discount={item.discount}
      cart
      image={item.image}
      model={item.model}
      price={item.price}
    />
  );

  const ItemSeparator = () => <View style={styles.separator} />;

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={autoStoreAds}
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

export default AutoStoreAds;

const styles = StyleSheet.create({
  separator: {
    width: 10,
  },
  container: {
    paddingHorizontal: 12,
  },
});
