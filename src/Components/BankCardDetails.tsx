import React from "react";
import { Text, Flex, Stack, View, Image, HStack, VStack, Toast } from "native-base";
import { ImageBackground, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import * as Clipboard from "expo-clipboard";

export default function BankCardDetails() {
  return (
    <View h={"1/3"} w={"95%"} mx={"auto"} my={5}>
      <ImageBackground
        source={require("../../assets/Card_Shape.png")}
        style={styles.imageBackground}
        imageStyle={styles.imageStyle}
      >
        <Stack
          style={styles.card}
          justifyContent="space-between"
          w="100%"
          rounded="2xl"
          h={"100%"}
          py={6}
          px={3}
        >
          <Flex justifyContent={"flex-end"} direction="row" style={styles.row}>
            <Image source={require("../../assets/visa-logo.png")} alt="VISA logo" />
          </Flex>

          <VStack style={styles.row} space={4}>
            <HStack alignItems={"center"} space={2}>
              <Text
                color="#f5f5f5"
                fontSize={20}
                fontFamily={"Manrope_500Medium"}
                letterSpacing={1}
              >
                4111 6526 0398 7429
              </Text>
              <TouchableOpacity
                onPress={async () => {
                  await Clipboard.setStringAsync("4111 6545 0239 4839");
                  Toast.show({
                    title: "Card number copied successfully.",
                  });
                }}
              >
                <FontAwesome5 name="copy" size={16} color="white" />
              </TouchableOpacity>
            </HStack>
            <HStack space={4} alignItems={"center"}>
              <HStack space={2} alignItems={"center"}>
                <Text color={"#fff6"} fontFamily={"Manrope_500Medium"} fontSize={16}>
                  EXP
                </Text>
                <Text color={"white"} fontFamily={"Manrope_500Medium"} fontSize={16}>
                  12/27{" "}
                </Text>
                <TouchableOpacity
                  onPress={async () => {
                    await Clipboard.setStringAsync("12/27");
                    Toast.show({
                      title: "Expiry date Copied successfully.",
                    });
                  }}
                >
                  <FontAwesome5 name="copy" size={16} color="white" />
                </TouchableOpacity>
              </HStack>
              <HStack space={2} alignItems={"center"}>
                <Text color={"#fff6"} fontFamily={"Manrope_500Medium"} fontSize={16}>
                  CVV
                </Text>
                <Text color={"white"} fontFamily={"Manrope_500Medium"} fontSize={16}>
                  738
                </Text>
                <TouchableOpacity
                  onPress={async () => {
                    await Clipboard.setStringAsync("738");
                    Toast.show({
                      title: "CVV Copied successfully.",
                    });
                  }}
                >
                  <FontAwesome5 name="copy" size={16} color="white" />
                </TouchableOpacity>
              </HStack>
            </HStack>
          </VStack>
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
