import React from "react";
import { Text, Flex, Stack, View, Image } from "native-base";
import { ImageBackground, StyleSheet, TouchableOpacity } from "react-native";

export default function BankCard() {
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
          <Flex justify="space-between" direction="row" alignItems="center" style={styles.row}>
            <Stack space={2} direction="row" alignItems="center">
              <Image source={require("../../assets/island_logo.png")} alt="PITG island bank" />
              <Text color="white" bold fontSize="md">
                Island Bank
              </Text>
            </Stack>

            <TouchableOpacity onPress={() => console.log("Navigate to MyCard")}>
              <Stack direction="row" space={1} alignItems="center">
                <Text color="white">Debit</Text>
                <Image source={require("../../assets/connection.png")} alt="Connection NFC" />
              </Stack>
            </TouchableOpacity>
          </Flex>

          <Flex justify="space-between" direction="row" align="center" style={styles.row}>
            <Text color="#f5f5f5" fontFamily={"Manrope_500Medium"}>
              Richard Reyes
            </Text>
            <Image source={require("../../assets/visa-logo.png")} alt="VISA logo" />
          </Flex>
        </Stack>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  imageBackground: {
    width: "100%",
    height: "100%",
    marginHorizontal: "auto",
    marginVertical: 10,
    borderRadius: 20,
  },
  imageStyle: {
    borderRadius: 20,
    objectFit: "cover",
  },
  card: {
    padding: 20,
    shadowColor: "#000030",
    shadowOpacity: 1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 5,
  },
  row: {
    paddingHorizontal: 15,
  },
});
