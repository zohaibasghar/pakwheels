import { View, Text, Flex, Link, Stack, Image, HStack } from "native-base";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { ImageBackground } from "react-native";
import { useAppSelector } from "../redux/Store";
import CustomMenu from "./CustomMenu";

export default function CurrentAccounts() {
  const navigation = useNavigation();
  const { transaction } = useAppSelector((state) => state.auth);
  return (
    <View bg={"#000030"} w={"94%"} mx={"auto"} my={5} rounded={"2xl"}>
      <ImageBackground
        source={require("../../assets/Card_Shape.png")}
        imageStyle={{ borderRadius: 16, objectFit: "fill" }}
      >
        <Flex justify="space-between" direction="row" py={"5"} px={4} alignItems={"center"}>
          <Stack space={2} direction={"row"} alignItems={"center"}>
            <Image source={require("../../assets/island_logo.png")} alt="PITG island" />
            <Text color={"white"} fontSize={16} fontFamily={"Manrope_600SemiBold"}>
              Debit
            </Text>
          </Stack>
          <TouchableOpacity onPress={() => navigation.navigate("Accounts", { screen: "MyCard" })}>
            <HStack>
              <Text color={"white"} fontFamily={"Manrope_700Bold"}>
                Show card
              </Text>
              <Feather name="chevron-down" size={24} color="white" />
            </HStack>
          </TouchableOpacity>
        </Flex>
        <View bg={"#fff"} p={"5"} rounded={"2xl"}>
          <Flex direction="row" justify="space-between" align="center">
            <Stack>
              <Text fontFamily={"Manrope_700Bold"} fontSize={18}>
                Current Accounts
              </Text>
              <Text fontSize={"xs"} color={"#7b7b7b"}>
                Balance: ${transaction.amount}
              </Text>
            </Stack>
            <TouchableOpacity
              onPress={() => navigation.navigate("Accounts", { screen: "AddAccount" })}
            >
              <Stack
                direction={"row"}
                alignItems={"center"}
                bg={"#f1f1f1"}
                rounded={"full"}
                py={2}
                px={3}
              >
                <Text fontFamily={"Manrope_700Bold"}>Add</Text>
                <Feather name="plus" size={20} color={"black"} />
              </Stack>
            </TouchableOpacity>
          </Flex>
          <Flex align="center" direction="row" justify="space-between" mb={2} mt={4}>
            <Stack direction={"row"} alignItems={"center"} space={2}>
              <Image source={require("../../assets/dollar_wings.png")} alt="Money" />
              <Stack>
                <Text fontSize={"xs"} color={"#7b7b7b"}>
                  Debit Spending from
                </Text>
                <Text fontFamily={"Manrope_700Bold"}>Checking **2830</Text>
              </Stack>
            </Stack>
            <Stack direction={"row"} alignItems={"center"} space={1}>
              <Text fontFamily={"Manrope_700Bold"}>${transaction.amount}</Text>
              <CustomMenu />
            </Stack>
          </Flex>
          <Flex align="center" direction="row" justify="space-between" mt={2}>
            <Stack direction={"row"} alignItems={"center"} space={2}>
              <Image source={require("../../assets/bank.png")} alt="Bank" />
              <Stack>
                <Text fontSize={"xs"} color={"#7b7b7b"}>
                  Checking **2830
                </Text>
                <Text fontFamily={"Manrope_700Bold"}>New Account</Text>
              </Stack>
            </Stack>
            <Stack direction={"row"} alignItems={"center"} space={1}>
              <Text fontFamily={"Manrope_700Bold"}>${transaction.amount}</Text>
              <CustomMenu />
            </Stack>
          </Flex>
        </View>
      </ImageBackground>
    </View>
  );
}
