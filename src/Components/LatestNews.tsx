import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const newsData = [
  {
    thumbnail: "https://static.pakwheels.com/2024/07/unnamed-35.jpg",
    title: "Images - BYD SEALION 6 Spotted in Pakistan",
    date: "July 11, 2024 4:18 PM",
  },
  {
    thumbnail: "https://static.pakwheels.com/2024/07/unnamed-35.jpg",
    title: "PAMA - Car sales Reach 18-Months high",
    date: "July 11, 2024 1:18 PM",
  },
  {
    thumbnail: "https://static.pakwheels.com/2024/07/unnamed-35.jpg",
    title: "Cars That Failed Miserably in Pakistan - Part 2",
    date: "July 11, 2024 6:31 PM",
  },
];
const LatestNews = () => {
  return (
    <View style={{ backgroundColor: "#000", marginVertical: 24 }}>
      <View style={styles.header}>
        <Text style={styles.heading}>Latest News</Text>
        <TouchableOpacity>
          <Text style={styles.anchor}>View All</Text>
        </TouchableOpacity>
      </View>
      {newsData.map((news, index) => (
        <View style={styles.listItem} key={index}>
          <View
            style={{
              width: "40%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={{ uri: news.thumbnail }}
              style={{ width: "100%", height: 80, borderRadius: 4 }}
            />
          </View>
          <View>
            <Text style={{ width: "60%", color: "white" }} numberOfLines={2}>
              {news.title}
            </Text>
            <Text style={{ color: "#a1a1a1", marginTop: 4 }}>{news.date}</Text>
          </View>
        </View>
      ))}
    </View>
  );
};

export default LatestNews;

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
    color: "white",
    fontSize: 18,
  },
  anchor: {
    color: "white",
  },
  listItem: {
    display: "flex",
    flexDirection: "row",
    gap: 6,
    marginBottom: 24,
    marginHorizontal: 12,
  },
});
