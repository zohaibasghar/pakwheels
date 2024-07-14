import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
interface VideoDTO {
  thumbnail: string;
  title: string;
}
const videos: VideoDTO[] = [
  {
    thumbnail: "https://i.ytimg.com/vi/GDDCRZe72jY/maxresdefault.jpg",
    title: "Khaqan Shahnawaz Haval H6 1.5 Owner Review | PakWheels",
  },
  {
    thumbnail: "https://i.ytimg.com/vi/GDDCRZe72jY/maxresdefault.jpg",
    title: "Adnan Dhool Mercedes E200 | Owner Review | PakWheels",
  },
  {
    thumbnail: "https://i.ytimg.com/vi/GDDCRZe72jY/maxresdefault.jpg",
    title: "2004-6 Mercedes E63 AMG | Owner Review | PakWheels",
  },
  {
    thumbnail: "https://i.ytimg.com/vi/GDDCRZe72jY/maxresdefault.jpg",
    title: "9th Gen Japanese Suzuki Alto First Look Review | PakWheels",
  },
  {
    thumbnail: "https://i.ytimg.com/vi/GDDCRZe72jY/maxresdefault.jpg",
    title: "Introduction Extreme Camber Kit wali Honda Civic X | Owner Review | PakWheels",
  },
  {
    thumbnail: "https://i.ytimg.com/vi/GDDCRZe72jY/maxresdefault.jpg",
    title: "Khaqan Shahnawaz Haval H6 1.5 Owner Review | PakWheels",
  },
];
const LatestVideos = () => {
  const listItem = ({ item }: { item: VideoDTO }) => {
    return (
      <View style={styles.listItem}>
        <View
          style={{ width: "40%", display: "flex", justifyContent: "center", alignItems: "center" }}
        >
          <Image
            source={{ uri: item.thumbnail }}
            style={{ width: "100%", height: 80, borderRadius: 4 }}
          />
          <AntDesign name="play" size={32} color="black" style={styles.play} />
        </View>
        <Text style={{ width: "55%" }} numberOfLines={2}>
          {item.title}
        </Text>
      </View>
    );
  };
  return (
    <View style={{ marginHorizontal: 12 }}>
      <View style={styles.imageThumb}>
        <Image source={{ uri: videos[0].thumbnail }} style={styles.thumbnail} />
        <AntDesign name="play" size={44} color="black" style={styles.play} />
      </View>
      <Text>{videos[0].title}</Text>
      <FlatList
        keyExtractor={(_, index) => index.toString()}
        data={videos.slice(1)}
        renderItem={listItem}
        showsVerticalScrollIndicator={false}
        style={{ marginVertical: 12 }}
        ItemSeparatorComponent={() => <View style={styles.sep} />}
      />
    </View>
  );
};

export default LatestVideos;

const styles = StyleSheet.create({
  imageThumb: {
    position: "relative",
    justifyContent: "center",
    marginBottom: 12,
    alignItems: "center",
  },
  thumbnail: {
    width: "100%",
    height: 200,
    objectFit: "cover",
    borderRadius: 12,
  },
  play: {
    position: "absolute",
  },
  listItem: { display: "flex", flexDirection: "row", gap: 6 },
  sep: {
    paddingVertical: 6,
  },
});
