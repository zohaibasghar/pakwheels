import React from "react";
import { Text, Flex, Stack, View, Image } from "native-base";
import { ImageBackground, StyleSheet, TouchableOpacity } from "react-native";

export default function BankCard() {
  return (
    <View h={"1/3"} w={"95%"} mx={"auto"} my={5}>
      <ImageBackground
        source={require("../../assets/Card_Shape.png")}
        style={styles.imageBackground} // Apply the style to control width, height, and alignment
        imageStyle={styles.imageStyle} // Control the rounding of the corners
      >
        <Stack
          style={styles.card}
          justifyContent="space-between" // Distribute space evenly
          w="100%" // Ensure it takes the full width of the ImageBackground
          rounded="2xl" // Apply border-radius to the whole stack
          h={"100%"}
          py={6}
          px={3}
        >
          <Flex
            justify="space-between" // Align content within the row
            direction="row" // Horizontal layout
            alignItems="center" // Align vertically
            style={styles.row} // Apply custom styles
          >
            <Stack space={2} direction="row" alignItems="center">
              <Image
                source={require("../../assets/island_logo.png")}
                alt="PITG island bank"
              />
              <Text color="white" bold fontSize="md">
                Island Bank
              </Text>
            </Stack>

            <TouchableOpacity onPress={() => console.log("Navigate to MyCard")}>
              <Stack direction="row" space={1} alignItems="center">
                <Text color="white">Debit</Text>
                <Image
                  source={require("../../assets/connection.png")}
                  alt="Connection NFC"
                />
              </Stack>
            </TouchableOpacity>
          </Flex>

          <Flex
            justify="space-between"
            direction="row"
            align="center"
            style={styles.row}
          >
            <Text color="#f5f5f5">Richard Reyes</Text>
            <Image
              source={require("../../assets/visa-logo.png")}
              alt="VISA logo"
            />
          </Flex>
        </Stack>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  imageBackground: {
    width: "100%", // Custom width for the ImageBackground
    height: "100%",
    marginHorizontal: "auto", // Center the card horizontally
    marginVertical: 10, // Vertical margin
    borderRadius: 20, // Rounded corners for the card
  },
  imageStyle: {
    borderRadius: 20, // Ensures the image has rounded corners
    objectFit: "cover",
  },
  card: {
    padding: 20, // Add padding around the content
    shadowColor: "#000030", // Shadow for a subtle effect
    shadowOpacity: 1,
    shadowOffset: { width: 0, height: 4 }, // Shadow offset
    shadowRadius: 5, // Shadow blur
  },
  row: {
    paddingHorizontal: 15, // Horizontal padding to separate content
  },
});
