import { Text, Stack } from "native-base";
import React from "react";
import { Feather, FontAwesome5, FontAwesome } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

export default function OptionCards() {
  return (
    <Stack m={4} direction="row" space={5} mx={"auto"}>
      <TouchableOpacity>
        <Stack alignItems={"center"} space={1}>
          <Stack
            w={16}
            alignItems={"center"}
            justifyContent={"center"}
            h={16}
            rounded={"xl"}
            borderWidth={1}
            borderColor={"#d9d9d9"}
          >
            <Feather name="credit-card" size={24} color="#555" />
          </Stack>
          <Stack alignItems={"center"}>
            <Text>See</Text>
            <Text>details</Text>
          </Stack>
        </Stack>
      </TouchableOpacity>
      <TouchableOpacity>
        <Stack alignItems={"center"} space={1}>
          <Stack
            w={16}
            alignItems={"center"}
            justifyContent={"center"}
            h={16}
            rounded={"xl"}
            borderWidth={1}
            borderColor={"#d9d9d9"}
            space={1}
            direction={"row"}
          >
            <FontAwesome5 name="asterisk" size={15} color="#555" />
            <FontAwesome5 name="asterisk" size={15} color="#555" />
          </Stack>
          <Stack alignItems={"center"}>
            <Text>Change</Text>
            <Text>PIN</Text>
          </Stack>
        </Stack>
      </TouchableOpacity>
      <TouchableOpacity>
        <Stack alignItems={"center"} space={1}>
          <Stack
            w={16}
            alignItems={"center"}
            justifyContent={"center"}
            h={16}
            rounded={"xl"}
            borderWidth={1}
            borderColor={"#d9d9d9"}
          >
            <FontAwesome name="snowflake-o" size={24} color="black" />
          </Stack>
          <Stack alignItems={"center"}>
            <Text>Freeze</Text>
            <Text>card</Text>
          </Stack>
        </Stack>
      </TouchableOpacity>
      <TouchableOpacity>
        <Stack alignItems={"center"} space={1}>
          <Stack
            w={16}
            alignItems={"center"}
            justifyContent={"center"}
            h={16}
            rounded={"xl"}
            borderWidth={1}
            borderColor={"#d9d9d9"}
          >
            <FontAwesome name="sliders" size={24} color="black" />
          </Stack>
          <Stack alignItems={"center"}>
            <Text>Manage</Text>
            <Text>card</Text>
          </Stack>
        </Stack>
      </TouchableOpacity>
    </Stack>
  );
}
