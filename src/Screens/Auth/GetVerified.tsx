import {
  View,
  Text,
  Stack,
  Box,
  Flex,
  VStack,
  ScrollView,
  Button,
  HStack,
  Image,
} from "native-base";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomHeaderHelp from "../../Components/CustomHeaderHelp";
import CountrySelect from "../../Components/CountrySelect";
import { useNavigation } from "@react-navigation/native";

const GetVerified = () => {
  const nav = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <CustomHeaderHelp title="" />
      <VStack justifyContent={"space-between"} flex={1} mx={6}>
        <ScrollView>
          <VStack space={4}>
            <VStack my={4}>
              <Text bold fontSize={"3xl"}>
                Get verified
              </Text>
              <Text color={"#616161"}>
                We need a valid document to verify who you are, your data is processed securely.
              </Text>
            </VStack>
            <VStack>
              <CountrySelect label="Issuing country" />
              <VStack px={6} my={4} space={4}>
                <HStack alignItems={"center"} space={4}>
                  <Image source={require("../../../assets/globe.png")} alt="Globe" />
                  <Text fontSize={"md"}>Passport</Text>
                </HStack>
                <HStack alignItems={"center"} space={4}>
                  <Image source={require("../../../assets/car.png")} alt="Car" />
                  <Text fontSize={"md"}>Drivers Lisence</Text>
                </HStack>
                <HStack alignItems={"center"} space={4}>
                  <Image source={require("../../../assets/card.png")} alt="Card" />
                  <Text fontSize={"md"}>Identity card</Text>
                </HStack>
              </VStack>
            </VStack>
          </VStack>
        </ScrollView>
        <VStack alignItems={"center"}>
          <Button
            _pressed={{ bg: "#f1f1f1" }}
            onPress={() => nav.navigate("AllowCamera" as never)}
            w={"100%"}
            mb={0}
          >
            Continue
          </Button>
          <HStack alignItems={"center"} mb={3}>
            <Text fontSize={"2xs"}>Powered by </Text>
            <Image source={require("../../../assets/metamap.png")} alt="Metamap" />
          </HStack>
        </VStack>
      </VStack>
    </SafeAreaView>
  );
};

export default GetVerified;
