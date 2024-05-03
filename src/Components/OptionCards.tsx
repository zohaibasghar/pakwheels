import { Text, Stack, Menu, HStack, Flex } from "native-base";
import React from "react";
import { Feather, FontAwesome5, FontAwesome, AntDesign, SimpleLineIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

export default function OptionCards({ setDetails, details }: any) {
  return (
    <Stack m={4} direction="row" space={5} mx={"auto"}>
      {details ? (
        <TouchableOpacity onPress={() => setDetails(false)}>
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
              <Feather name="eye-off" size={24} color="black" />
            </Stack>
            <Stack alignItems={"center"}>
              <Text>Hide</Text>
              <Text>details</Text>
            </Stack>
          </Stack>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={() => setDetails(true)}>
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
              <AntDesign name="eyeo" size={24} color="black" />
            </Stack>
            <Stack alignItems={"center"}>
              <Text>See</Text>
              <Text>details</Text>
            </Stack>
          </Stack>
        </TouchableOpacity>
      )}
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

      <Menu
        w="190"
        bg={"#fff"}
        rounded={"lg"}
        trigger={(triggerProps) => {
          return (
            <TouchableOpacity {...triggerProps}>
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
          );
        }}
      >
        <Menu.Group title="Manage Card" _title={{ fontWeight: 900, color: "black" }}>
          <Menu.Item px={0}>
            <HStack space={2}>
              <Flex
                borderWidth={1}
                borderColor={"#D4D2D2"}
                h={"20px"}
                w={"20px"}
                alignItems={"center"}
                justifyContent={"center"}
                rounded={"sm"}
              >
                <AntDesign name="poweroff" size={14} color="#D4D2D2" />
              </Flex>
              <Text>Trun on Overdraft</Text>
            </HStack>
          </Menu.Item>
          <Menu.Item px={0}>
            <HStack space={2}>
              <SimpleLineIcons name="shield" size={20} color="#D4D2D2" />
              <Text>Report Stolen</Text>
            </HStack>
          </Menu.Item>
          <Menu.Item px={0}>
            <HStack space={2}>
              <AntDesign name="creditcard" size={20} color="#D4D2D2" />
              <Text>Replace Card</Text>
            </HStack>
          </Menu.Item>
        </Menu.Group>
      </Menu>
    </Stack>
  );
}
