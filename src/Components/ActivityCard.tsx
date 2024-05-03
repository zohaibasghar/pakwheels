import { Text, Stack, Flex, Image } from "native-base";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function ActivityCard({ details }: any) {
  const nav = useNavigation();
  return (
    <Stack bg={"#fff"} w={"95%"} mx={"auto"} p={5} rounded={"2xl"}>
      <Flex direction="row" justify="space-between">
        <Text bold fontSize={"lg"}>
          Activity
        </Text>
        <TouchableOpacity onPress={() => nav.navigate("Accounts", { screen: "Transactions" })}>
          <Stack
            direction={"row"}
            alignItems={"center"}
            bg={"#f1f1f1"}
            rounded={"2xl"}
            py={1}
            px={2}
          >
            <Text>View all</Text>
            <Feather name="arrow-up-right" size={20} color="gray" />
          </Stack>
        </TouchableOpacity>
      </Flex>
      <Flex align="center" direction="row" justify="space-between" mt={4}>
        <Stack direction={"row"} alignItems={"center"} space={2}>
          <Image source={require("../../assets/other_bank.png")} alt="Other Bank" />
          <Stack>
            <Text fontSize={"md"} bold>
              {details.bankName} {details.recipient}
            </Text>
            <Text fontSize={"xs"}>
              {details.type} • {details.time}
            </Text>
          </Stack>
        </Stack>
        <Stack alignItems={"flex-end"}>
          <Text color={details.type === "Deposit" ? "green.500" : "red.500"}>
            {details.type === "Deposit" ? "+" : "-"} ${details.amount}
          </Text>
          <Text fontSize={"xs"}>${details.amount}</Text>
        </Stack>
      </Flex>
    </Stack>
  );
}
