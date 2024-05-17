import { View, Text, HStack, Button, VStack, Stack, Image, Flex } from "native-base";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ImageBackground, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const SelectCard = () => {
  const [cardColor, setCardColor] = useState("Sapphire black");
  const nav = useNavigation();

  return (
    <SafeAreaView style={{ backgroundColor: "#fff", flex: 1 }}>
      <VStack flex={1} mt={12} h={"100%"} justifyContent={"space-between"}>
        <VStack>
          <Text fontFamily={"Manrope_700Bold"} fontSize={28} mx={6}>
            Select Card
          </Text>
          <Text mx={6} color={"#616161"}>
            Choose one of our cards that matches your personality.
          </Text>
        </VStack>
        <View
          h={"1/3"}
          w={"95%"}
          mx={"auto"}
          my={5}
          style={{ transform: [{ rotate: "90deg" }] }}
          justifyContent={"center"}
        >
          <ImageBackground
            source={require("../../../assets/Card_Shape.png")}
            style={styles.imageBackground}
            imageStyle={styles.imageStyle}
          >
            <Stack
              style={{
                ...styles.card,
                backgroundColor:
                  cardColor === "Indigo Blue"
                    ? "#3716D4"
                    : cardColor === "Midnight Blue"
                    ? "#013A7D"
                    : "transparent",
              }}
              justifyContent="space-between"
              w="100%"
              rounded="2xl"
              h={"100%"}
              py={6}
              px={3}
            >
              <Flex justify="space-between" direction="row" alignItems="center" style={styles.row}>
                <Stack space={2} direction="row" alignItems="center">
                  <Image
                    source={require("../../../assets/island_logo.png")}
                    alt="PITG island bank"
                  />
                  <Text color="white" bold fontSize="md">
                    Island Bank
                  </Text>
                </Stack>

                <Stack direction="row" space={1} alignItems="center">
                  <Text color="white">Debit</Text>
                  <Image source={require("../../../assets/connection.png")} alt="Connection NFC" />
                </Stack>
              </Flex>

              <Flex justify="space-between" direction="row" align="center" style={styles.row}>
                <Text color="#f5f5f5">Richard Reyes</Text>
                <Image source={require("../../../assets/visa-logo.png")} alt="VISA logo" />
              </Flex>
            </Stack>
          </ImageBackground>
        </View>
        <VStack>
          <Text textAlign={"center"} fontFamily={"Manrope_700Bold"}>
            {cardColor}
          </Text>
          <HStack mx={6} alignItems={"center"} justifyContent={"center"} my={4} space={3}>
            <TouchableOpacity onPress={() => setCardColor("Sapphire Black")}>
              <View
                h={10}
                w={10}
                bg={"#0A061C"}
                rounded={"full"}
                p={1}
                borderColor={"#0A061C"}
                borderWidth={1}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setCardColor("Indigo Blue")}>
              <View
                h={10}
                w={10}
                bg={"#3716D4"}
                rounded={"full"}
                p={1}
                borderColor={"#3716D4"}
                borderWidth={1}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setCardColor("Midnight Blue")}>
              <View
                h={10}
                w={10}
                bg={"#013A7D"}
                rounded={"full"}
                p={1}
                borderColor={"#013A7D"}
                borderWidth={1}
              />
            </TouchableOpacity>
          </HStack>
          <Button
            _pressed={{ bg: "#f1f1f1" }}
            onPress={() => nav.navigate("CreatePIN" as never)}
            mx={6}
            _text={{ fontFamily: "Manrope_600SemiBold", fontSize: 16 }}
          >
            Continue
          </Button>
        </VStack>
      </VStack>
    </SafeAreaView>
  );
};

export default SelectCard;

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
