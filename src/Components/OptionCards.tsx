import { Text, Stack, Menu, HStack, Flex } from "native-base";
import React from "react";
import { Feather, FontAwesome5, FontAwesome, AntDesign, SimpleLineIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

export default function OptionCards({ setDetails, details }: any) {
  return (
    <Stack m={4} direction="row" space={6} mx={"auto"}>
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
              <Text fontFamily={"Manrope_500Medium"} fontSize={12}>
                Hide
              </Text>
              <Text fontFamily={"Manrope_500Medium"} fontSize={12}>
                details
              </Text>
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
              <Text fontFamily={"Manrope_500Medium"} fontSize={12}>
                See
              </Text>
              <Text fontFamily={"Manrope_500Medium"} fontSize={12}>
                details
              </Text>
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
            <Text fontFamily={"Manrope_500Medium"} fontSize={12}>
              Change
            </Text>
            <Text fontFamily={"Manrope_500Medium"} fontSize={12}>
              PIN
            </Text>
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
            <Text fontFamily={"Manrope_500Medium"} fontSize={12}>
              Freeze
            </Text>
            <Text fontFamily={"Manrope_500Medium"} fontSize={12}>
              card
            </Text>
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
                  <Text fontFamily={"Manrope_500Medium"} fontSize={12}>
                    Manage
                  </Text>
                  <Text fontFamily={"Manrope_500Medium"} fontSize={12}>
                    card
                  </Text>
                </Stack>
              </Stack>
            </TouchableOpacity>
          );
        }}
      >
        <Menu.Group title="Manage Card" _title={{ fontFamily: "Manrope_700Bold", color: "black" }}>
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
              <Text fontFamily={"Manrope_500Medium"} fontSize={12}>
                Trun on Overdraft
              </Text>
            </HStack>
          </Menu.Item>
          <Menu.Item px={0}>
            <HStack space={2}>
              <SimpleLineIcons name="shield" size={20} color="#D4D2D2" />
              <Text fontFamily={"Manrope_500Medium"} fontSize={12}>
                Report Stolen
              </Text>
            </HStack>
          </Menu.Item>
          <Menu.Item px={0}>
            <HStack space={2}>
              <AntDesign name="creditcard" size={20} color="#D4D2D2" />
              <Text fontFamily={"Manrope_500Medium"} fontSize={12}>
                Replace Card
              </Text>
            </HStack>
          </Menu.Item>
        </Menu.Group>
      </Menu>
    </Stack>
  );
}
