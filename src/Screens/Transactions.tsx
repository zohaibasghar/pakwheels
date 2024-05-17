import React from "react";
import { HStack, ScrollView, Text, VStack, View } from "native-base";
import TransactionList from "../Components/Transaction";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomHeader from "../Components/CustomHeader";
import { Feather } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

export default function Transactions() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <HStack w={"100%"} alignItems={"center"}>
        <CustomHeader title="All Activity" />
        <TouchableOpacity>
          <Feather name="search" size={24} color="black" style={{ top: 6, left: 12 }} />
        </TouchableOpacity>
      </HStack>
      <ScrollView>
        <VStack space={6} w={"90%"} mx={"auto"} mt={6}>
          <View>
            <HStack justifyContent={"space-between"}>
              <Text fontSize={"xs"} fontFamily={"Manrope_500Medium"}>
                TODAY
              </Text>
              <Text fontSize={"xs"} fontFamily={"Manrope_500Medium"}>
                SPENT $0.00
              </Text>
            </HStack>
            <TransactionList
              transaction={{
                bankName: "Wire Transfer-WadeC",
                type: "Deposit",
                amount: "1,350.00",
                total: "1,401.00",
                time: "11:47 AM",
                image: require("../../assets/citi_bank.png"),
              }}
            />
          </View>
          <View>
            <HStack justifyContent={"space-between"}>
              <Text fontSize={"xs"} fontFamily={"Manrope_500Medium"}>
                YESTERDAY
              </Text>
              <Text fontSize={"xs"} fontFamily={"Manrope_500Medium"}>
                SPENT $98.33
              </Text>
            </HStack>
            <TransactionList
              transaction={{
                bankName: "Massy Stores",
                type: "Purchase",
                amount: "25.60",
                total: "51.67",
                time: "11:47 AM",
                image: require("../../assets/massy_store.png"),
              }}
            />
            <TransactionList
              transaction={{
                bankName: "To Princeton Sargent",
                type: "Payment",
                amount: "50.00",
                total: "77.27",
                time: "11:47 AM",
                image: require("../../assets/PS.png"),
              }}
            />
            <TransactionList
              transaction={{
                bankName: "Subway",
                type: "Purchase",
                amount: "22.73",
                total: "127.27",
                time: "11:47 AM",
                image: require("../../assets/subway.png"),
              }}
            />
          </View>
          <View>
            <HStack justifyContent={"space-between"}>
              <Text fontSize={"xs"} fontFamily={"Manrope_500Medium"}>
                31 MARCH 2024
              </Text>
              <Text fontSize={"xs"} fontFamily={"Manrope_500Medium"}>
                SPENT $0.00
              </Text>
            </HStack>
            <TransactionList
              transaction={{
                bankName: "New Account to Rainy Day",
                type: "Transfer",
                amount: "10.00",
                total: "150.00",
                time: "11:47 AM",
                image: require("../../assets/saving.png"),
              }}
            />
            <TransactionList
              transaction={{
                bankName: "CBIC-LC",
                recipient: "Richard Q",
                type: "Deposit",
                amount: "160.00",
                total: "160.00",
                time: "11:47 AM",
                image: require("../../assets/other_bank.png"),
              }}
            />
          </View>
        </VStack>
      </ScrollView>
    </SafeAreaView>
  );
}
