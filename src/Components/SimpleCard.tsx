import React from "react";
import { Image, Stack, Text } from "native-base";
import { Feather } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

export default function SimpleCard({ title, desc, link, handleFunc }: any) {
  return (
    <Stack
      direction={"row"}
      w={"95%"}
      bg={"#F7F6FE"}
      rounded={"2xl"}
      mx={"auto"}
      p={5}
      justifyContent={"space-between"}
      space={2}
    >
      <Stack space={2}>
        <Stack>
          <Text bold fontSize={17}>
            {title}
          </Text>
          <Text fontSize={12} color={"#3E3E3E"}>{desc}</Text>
        </Stack>
        <TouchableOpacity onPress={handleFunc}>
          <Stack direction={"row"} alignItems={"center"}>
            <Text color={"#5E41E6"} fontWeight={700}>
              {link}
            </Text>
            <Feather name="arrow-up-right" size={18} color="#5E41E6" />
          </Stack>
        </TouchableOpacity>
      </Stack>
    </Stack>
  );
}
