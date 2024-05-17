import React from "react";
import { Image, Stack, Text } from "native-base";
import { Feather } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

export default function HomeCards({ title, desc, link, path, handleFunc }: any) {
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
      <Stack w={"70%"} space={2}>
        <Stack>
          <Text fontFamily={"Manrope_700Bold"} fontSize={18}>
            {title}
          </Text>
          <Text fontSize={12}>{desc}</Text>
        </Stack>
        <TouchableOpacity onPress={handleFunc}>
          <Stack direction={"row"} alignItems={"center"}>
            <Text color={"#5E41E6"} underline fontFamily={"Manrope_700Bold"}>
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
