import { Avatar, Flex, Stack, Text, View } from "native-base";
import React from "react";

export default function Header() {
  return (
    <View>
      <Flex
        direction="row"
        align="center"
        justifyContent={"space-between"}
        mx={5}
        mt={10}
      >
        <Stack space={2} direction={"row"} alignItems={"center"}>
          <Avatar bg={"#5E41E6"}>R</Avatar>
          <Text>Hello, Richard</Text>
        </Stack>
        <Text bg={"#fff"} rounded={"full"} px={2} py={1}>
          Get $1,000
        </Text>
      </Flex>
    </View>
  );
}
