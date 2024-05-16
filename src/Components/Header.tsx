import { useNavigation } from "@react-navigation/native";
import { Avatar, Flex, Stack, Text, View } from "native-base";
import React from "react";
import { TouchableOpacity } from "react-native";

export default function Header() {
  const navigate = useNavigation();
  return (
    <View mb={1}>
      <Flex direction="row" align="center" justifyContent={"space-between"} mx={5} mt={10}>
        <Stack space={2} direction={"row"} alignItems={"center"}>
          <Avatar bg={"#5E41E6"}>R</Avatar>
          <Text>Hello, Richard</Text>
        </Stack>
        <TouchableOpacity
          onPress={() => navigate.navigate("Accounts", { screen: "InviteFriends" })}
        >
          <Text bg={"#fff"} rounded={"full"} px={2} py={1}>
            Get $1,000
          </Text>
        </TouchableOpacity>
      </Flex>
    </View>
  );
}
