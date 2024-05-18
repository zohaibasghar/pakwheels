import { useNavigation } from "@react-navigation/native";
import { Avatar, Button, Flex, HStack, Stack, Text, VStack, View } from "native-base";
import React from "react";
import { TouchableOpacity } from "react-native";

export default function Header() {
  const navigate = useNavigation();
  return (
    <View mb={1}>
      <HStack alignItems={"center"} justifyContent={"space-between"} mx={5} mt={10}>
        <Stack space={2} direction={"row"} alignItems={"center"}>
          <Avatar bg={"#5E41E6"}>R</Avatar>
          <Text fontFamily={"Manrope_700Bold"} fontSize={18}>
            Hello, Richard
          </Text>
        </Stack>
        <Button
          bg={"#fff"}
          px={4}
          py={2}
          mt={3}
          onPress={() => navigate.navigate("Accounts", { screen: "InviteFriends" })}
          _pressed={{ background: "#f8f8f8", _text: { color: "#aaa" } }}
          _text={{ fontFamily: "Manrope_500Medium", color: "black" }}
        >
          Get $1,000
        </Button>
      </HStack>
    </View>
  );
}
