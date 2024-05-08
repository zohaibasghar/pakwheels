import { useRoute } from "@react-navigation/native";
import { View, Text, ScrollView, Center, Image, Box, Stack, VStack, HStack } from "native-base";
import React from "react";
import { TouchableOpacity } from "react-native";
import { MaterialCommunityIcons, Feather } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomHeader from "../Components/CustomHeader";
const TransactionDetail = () => {
  const route = useRoute();
  const { transaction }: any = route?.params;
  return (
    <SafeAreaView style={{ backgroundColor: "#fff", flex: 1 }}>
      <CustomHeader title={transaction.type} subtitle={`${transaction.time} • 1 April 2024`} />
      <ScrollView>
        <Center>
          <View position={"relative"}>
            <Image source={require("../../assets/maps.png")} alt="Maps" h={"190px"}/>
          </View>
          <Box
            borderColor={"#F2F5F7"}
            borderWidth={1}
            p={6}
            rounded={"full"}
            bg={"#fff"}
            position={"absolute"}
            top={"29%"}
            bgColor={"#fff"}
          >
            <Image source={transaction.image} alt={transaction.bankName} />
          </Box>

          <Text bold fontSize={18} mb={2} mt={16}>
            {transaction.bankName}
          </Text>
          <Text fontSize={"xs"} color={"#7b7b7b"}>
            Stoney Ground Road, Kingstown,
          </Text>
          <Text fontSize={"xs"} color={"#7b7b7b"} mb={2}>
            {" "}
            St. Vincent & Grenadines
          </Text>
          <Text bold fontSize={"2xl"}>
            ${transaction.amount}
          </Text>

          <HStack space={6} my={4}>
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
                  <Image source={require("../../assets/payback.png")} alt="Payback" />
                </Stack>
                <Stack alignItems={"center"}>
                  <Text>Pay back</Text>
                  <Text>from Bucket</Text>
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
                  <Feather name="navigation" size={24} color="black" />
                </Stack>
                <Stack alignItems={"center"}>
                  <Text>Directions</Text>
                  <Text>to store</Text>
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
                  <Feather name="info" size={24} color="black" />
                </Stack>
                <Stack alignItems={"center"}>
                  <Text>Customer</Text>
                  <Text>Support</Text>
                </Stack>
              </Stack>
            </TouchableOpacity>
          </HStack>
        </Center>
        <VStack w={"90%"} mx={"auto"} space={6} my={4}>
          <Text>DETAILS</Text>
          <HStack justifyContent={"space-between"}>
            <Text color={"#3e3e3e"}>Category</Text>
            <HStack>
              <Text bold>Food & Groceries</Text>
              <MaterialCommunityIcons name="dots-vertical" size={22} color="#D8D8D8" />
            </HStack>
          </HStack>
          <HStack justifyContent={"space-between"}>
            <Text color={"#3e3e3e"}>From</Text>
            <Text bold>Monthly Grocery **0291</Text>
          </HStack>
          <HStack justifyContent={"space-between"}>
            <Text color={"#3e3e3e"}>Transaction Type</Text>
            <Text bold>Contactless</Text>
          </HStack>
          <HStack justifyContent={"space-between"}>
            <Text color={"#3e3e3e"}>Status</Text>
            <Text bold>Completed</Text>
          </HStack>
        </VStack>
      </ScrollView>
    </SafeAreaView>
  );
};

export default TransactionDetail;
