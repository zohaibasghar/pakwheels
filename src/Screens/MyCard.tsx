import { View, Text, Stack, Flex, ScrollView, Image } from "native-base";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import BankCard from "../Components/BankCard";
import { TouchableOpacity } from "react-native";
import OptionCards from "../Components/OptionCards";

export default function MyCard() {
  return (
    <View bg={"#f8f8f8"} flex={1}>
      <BankCard />
      <ScrollView>
        <Flex
          align="center"
          w={"85%"}
          mx={"auto"}
          direction="row"
          justify="space-between"
          my={4}
        >
          <Stack direction={"row"} alignItems={"center"} space={2}>
            <Stack
              w={9}
              alignItems={"center"}
              justifyContent={"center"}
              h={9}
              rounded={"lg"}
              borderWidth={1}
              borderColor={"#d9d9d9"}
            >
              <Image
                source={require("../../assets/dollar_wings.png")}
                alt="Money"
              />
            </Stack>
            <Stack>
              <Text fontSize={"xs"}>Debit Spending from</Text>
              <Text bold fontSize={"md"}>
                Checking **2830
              </Text>
            </Stack>
          </Stack>
          <TouchableOpacity>
            <Text bg={"#e1e1e1"} px={2} py={1} rounded={"2xl"}>
              Change
            </Text>
          </TouchableOpacity>
        </Flex>
        <OptionCards />
        <Stack
          bg={"blue.100"}
          w={"94%"}
          mx={"auto"}
          p={4}
          rounded={"2xl"}
          space={1}
        >
          <Stack space={2} direction={"row"} alignItems={"center"}>
            <AntDesign name="infocirlceo" size={16} color="black" />
            <Text bold fontSize={16}>
              Your card is on its way!
            </Text>
          </Stack>
          <Stack>
            <Text>
              Ready to shop? Your virtual card details are ready to use now
              in-store and online. Already got your card?{" "}
              <Text bold underline>
                Activate it now
              </Text>
            </Text>
          </Stack>
        </Stack>
      </ScrollView>
    </View>
  );
}
