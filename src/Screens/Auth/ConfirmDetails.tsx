import { useNavigation } from "@react-navigation/native";
import { View, Text, VStack, Button, Box } from "native-base";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomHeaderHelp from "../../Components/CustomHeaderHelp";

const ConfirmDetails = () => {
  const nav = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <CustomHeaderHelp title="Manual Input" />
      <VStack justifyContent={"space-between"} flex={1} mx={6}>
        <VStack space={4}>
          <VStack my={4}>
            <Text bold fontSize={"3xl"}>
              Is this correct?
            </Text>
            <Text color={"#616161"}>Ensure that the information we've captured is correct.</Text>
          </VStack>
          <VStack space={6} bg={"#FAFAFA"} p={6}>
            <VStack>
              <Text bold fontSize={"xl"} mb={2}>
                Name & date of birth
              </Text>
              <Text fontSize={"md"}>Richard Reyes</Text>
              <Text fontSize={"md"}>02/15/1986</Text>
            </VStack>
            <VStack>
              <Text bold fontSize={"xl"} mb={2}>
                Home Address
              </Text>
              <Text fontSize={"md"}>27 Beach Front St.,</Text>
              <Text fontSize={"md"}>Calliaqua, St. George</Text>
              <Text fontSize={"md"}>St. Vincent & the Grenadines</Text>
            </VStack>
          </VStack>
        </VStack>
        <Button
          onPress={() => nav.navigate("ConfirmName" as never)}
          _pressed={{ bg: "#f1f1f1" }}
        >
          Yes, continue
        </Button>
      </VStack>
    </SafeAreaView>
  );
};

export default ConfirmDetails;
