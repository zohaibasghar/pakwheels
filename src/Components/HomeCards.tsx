import React from "react";
import { Image, Stack, Text } from "native-base";
import { Feather } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

export default function HomeCards({ title, desc, link, path }: any) {
  return (
    <Stack
      direction={"row"}
      w={"95%"}
      bg={"#fff"}
      rounded={"2xl"}
      mx={"auto"}
      p={5}
      justifyContent={"space-between"}
      space={2}
    >
      <Stack w={"65%"} space={2}>
        <Stack>
          <Text bold fontSize={17}>
            {title}
          </Text>
          <Text fontSize={11}>{desc}</Text>
        </Stack>
        <TouchableOpacity>
          <Stack direction={"row"} alignItems={"center"}>
            <Text color={"#5E41E6"} underline>
              {link}
            </Text>
            <Feather name="arrow-up-right" size={18} color="#5E41E6" />
          </Stack>
        </TouchableOpacity>
      </Stack>
      <Image source={path} alt="Island bank" />
    </Stack>
  );
}
