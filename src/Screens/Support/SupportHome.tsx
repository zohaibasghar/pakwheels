import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomHeaderClose from "../../Components/CustomHeaderClose";
import { Box, HStack, Image, Input, ScrollView, Text, VStack } from "native-base";
import { TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function SupportHome() {
  const [chat, setChat] = useState<any>([]);
  const [message, setMessage] = useState<string>("");
  console.log(message, chat);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F2F5F7" }}>
      <CustomHeaderClose title="Aunt Mable" subtitle="Helping you 24/7" />
      <VStack justifyContent={"space-between"} flex={1}>
        <ScrollView
          contentContainerStyle={{ flexGrow: 1, justifyContent: "flex-end" }}
          mx={6}
          mb={4}
        >
          <Text color={"#616161"} textAlign={"center"}>
            Today
          </Text>
          <HStack alignItems={"center"} space={2} w={"93%"}>
            <Image
              source={require("../../../assets/island_rounded.png")}
              rounded={"full"}
              mt={6}
              alt="Island Bank"
            />
            <VStack>
              <VStack bg={"#fff"} p={2} space={1} roundedRight={15} roundedTopLeft={15}>
                <Text color={"#5E41E6"} fontWeight={600}>
                  Aunt Mable
                </Text>
                <Text fontWeight={500}>
                  I am island Bank's Chat Assistant, Aunt Mable. How can i help you?
                </Text>
              </VStack>
              <Text fontSize={12} color={"#616161"} ml={2}>
                2:55 PM
              </Text>
            </VStack>
          </HStack>
          <VStack alignItems={"flex-end"} my={3}>
            <VStack w={"87%"}>
              <Box p={4} roundedTop={15} roundedBottomLeft={15} bg={"#2C64E3"}>
                <Text color={"white"}>Which banks in St. Lucia can i transfer funds to?</Text>
              </Box>
              <HStack space={2} ml={3}>
                <Text fontSize={12} color={"#616161"}>
                  3:19 PM
                </Text>
                <Image source={require("../../../assets/check-check.png")} alt="Double check" />
              </HStack>
            </VStack>
          </VStack>
          <HStack alignItems={"center"} space={2} w={"86%"}>
            <Image
              source={require("../../../assets/island_rounded.png")}
              rounded={"full"}
              mt={6}
              alt="Island Bank"
            />
            <VStack>
              <VStack bg={"#fff"} p={2} space={1} roundedRight={15} roundedTopLeft={15}>
                <Text color={"#5E41E6"} fontWeight={600}>
                  Aunt Mable
                </Text>
                <Text fontWeight={500}>
                  You can transfer funds to the following banks: CIBC FirstCaribbean, Bank of St.
                  Lucia, 1st National Bank, and Republic Bank.
                </Text>
              </VStack>
              <Text fontSize={12} color={"#616161"} ml={2}>
                2:55 PM
              </Text>
            </VStack>
          </HStack>
          {chat?.length &&
            chat?.map((mes: any, index: number) => (
              <VStack alignItems={"flex-end"} my={3} key={index}>
                <VStack w={"87%"}>
                  <Box p={4} roundedTop={15} roundedBottomLeft={15} bg={"#2C64E3"}>
                    <Text color={"white"}>{mes.message}</Text>
                  </Box>
                  <HStack space={2} ml={3}>
                    <Text fontSize={12} color={"#616161"}>
                      {mes.time}
                    </Text>
                    <Image source={require("../../../assets/check-check.png")} alt="Double check" />
                  </HStack>
                </VStack>
              </VStack>
            ))}
        </ScrollView>
        <VStack space={4} mb={4}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <HStack space={2}>
              <TouchableOpacity>
                <VStack rounded={"full"} borderColor={"#5E41E6"} borderWidth={"1.5px"} ml={6}>
                  <Text px={4} py={1} color={"#5E41E6"} fontSize={16} fontWeight={600}>
                    Got it, thanks
                  </Text>
                </VStack>
              </TouchableOpacity>
              <TouchableOpacity>
                <VStack rounded={"full"} borderColor={"#5E41E6"} borderWidth={"1.5px"}>
                  <Text px={4} py={1} color={"#5E41E6"} fontSize={16} fontWeight={600}>
                    Start a transfer
                  </Text>
                </VStack>
              </TouchableOpacity>
              <TouchableOpacity>
                <VStack rounded={"full"} borderColor={"#5E41E6"} borderWidth={"1.5px"} mr={2}>
                  <Text px={4} py={1} color={"#5E41E6"} fontSize={16} fontWeight={600}>
                    I need more help
                  </Text>
                </VStack>
              </TouchableOpacity>
            </HStack>
          </ScrollView>
          <HStack w={"100%"} justifyContent={"center"} alignItems={"center"} space={2}>
            <Input
              placeholder="Ask me anything..."
              w={"80%"}
              rounded={12}
              borderWidth={1}
              borderColor={"#E0E0E0"}
              bg={"#fff"}
              value={message}
              onChangeText={(e) => setMessage(e)}
              onSubmitEditing={() => {
                setChat([...chat, { message, time: "3:20" }]);
                setMessage("");
              }}
            />
            <TouchableOpacity>
              <Box p={2} rounded={"xl"} borderWidth={1} borderColor={"#E0E0E0"} bg={"#fff"}>
                <MaterialIcons name="mic" size={28} color="#5E41E6" />
              </Box>
            </TouchableOpacity>
          </HStack>
        </VStack>
      </VStack>
    </SafeAreaView>
  );
}
