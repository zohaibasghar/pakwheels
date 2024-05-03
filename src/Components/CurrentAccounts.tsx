import {
  View,
  Text,
  Flex,
  Link,
  Stack,
  Image,
  Pressable,
  Menu,
  Divider,
  Box,
  HStack,
} from "native-base";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import { MaterialCommunityIcons, Feather, AntDesign } from "@expo/vector-icons";
import { ImageBackground } from "react-native";
import { useAppDispatch, useAppSelector } from "../redux/Store";
import { createTransaction } from "../redux/authSlice";
import CustomMenu from "./CustomMenu";

export default function CurrentAccounts() {
  const navigation = useNavigation();
  const { transaction } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  return (
    <View bg={"#000030"} w={"94%"} mx={"auto"} my={5} rounded={"2xl"}>
      <ImageBackground
        source={require("../../assets/Card_Shape.png")}
        imageStyle={{ borderRadius: 16, objectFit: "fill" }}
      >
        <Flex justify="space-between" direction="row" py={"5"} px={4} alignItems={"center"}>
          <Stack space={2} direction={"row"} alignItems={"center"}>
            <Image source={require("../../assets/island_logo.png")} alt="PITG island" />
            <Text color={"white"}>Debit</Text>
          </Stack>
          <Link onPress={() => navigation.navigate("Accounts", { screen: "MyCard" })}>
            <Text color={"white"}>Show card</Text>
            <Feather name="chevron-down" size={24} color="white" />
          </Link>
        </Flex>
        <View bg={"#fff"} p={"5"} rounded={"2xl"}>
          <Flex direction="row" justify="space-between" align="center">
            <Stack>
              <Text bold fontSize={"xl"}>
                Current Accounts
              </Text>
              <Text fontSize={"xs"} color={"gray.600"}>
                Balance: ${transaction.amount}
              </Text>
            </Stack>
            <TouchableOpacity onPress={() => dispatch(createTransaction())}>
              <Stack
                direction={"row"}
                alignItems={"center"}
                bg={"#f1f1f1"}
                rounded={"2xl"}
                py={1}
                px={2}
              >
                <Text>Add</Text>
                <Feather name="plus" size={18} color={"black"} />
              </Stack>
            </TouchableOpacity>
          </Flex>
          <Flex align="center" direction="row" justify="space-between" mb={2} mt={4}>
            <Stack direction={"row"} alignItems={"center"} space={2}>
              <Image source={require("../../assets/dollar_wings.png")} alt="Money" />
              <Stack>
                <Text fontSize={"xs"}>Debit Spending from</Text>
                <Text bold fontSize={"md"}>
                  Checking **2830
                </Text>
              </Stack>
            </Stack>
            <Stack direction={"row"} alignItems={"center"} space={1}>
              <Text>${transaction.amount}</Text>
              <CustomMenu />
            </Stack>
          </Flex>
          <Flex align="center" direction="row" justify="space-between" mt={2}>
            <Stack direction={"row"} alignItems={"center"} space={2}>
              <Image source={require("../../assets/bank.png")} alt="Bank" />
              <Stack>
                <Text fontSize={"xs"}>Checking **2830</Text>
                <Text fontSize={"md"} bold>
                  New Account
                </Text>
              </Stack>
            </Stack>
            <Stack direction={"row"} alignItems={"center"} space={1}>
              <Text>${transaction.amount}</Text>
              <CustomMenu />
            </Stack>
          </Flex>
        </View>
      </ImageBackground>
    </View>
  );
}
