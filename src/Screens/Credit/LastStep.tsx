import React from "react";
import CustomHeaderHelp from "../../Components/CustomHeaderHelp";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { Button, Center, HStack, ScrollView, Stack, Text, VStack } from "native-base";

const LastStep = () => {
  const nav = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <CustomHeaderHelp
        title="Cancel"
        handleFunc={() => nav.navigate("HomeTabs", { screen: "Credit" })}
      />
      <Stack w={"92%"} mx={"auto"} mt={8} justifyContent={"space-between"} flex={1}>
        <ScrollView>
          <Stack mb={6}>
            <Text fontSize={"3xl"} bold>
              Last step - almost there!
            </Text>
            <Text color={"#616161"} fontSize={"16px"}>
              Please confirm that following details are correct.
            </Text>
          </Stack>

          <VStack bg={"#F7F6FE"} p={6} rounded={16} mt={6}>
            <Text fontSize={"16px"}>Richard Reyes</Text>
            <Text fontSize={"16px"}>02/15/1986</Text>
            <Text fontSize={"16px"}>Richard.Reyes@joinislandbank.com</Text>
            <Text fontSize={"16px"}>+1 (784) 714-1277</Text>
          </VStack>
          <VStack my={6} space={6}>
            <HStack justifyContent={"space-between"}>
              <Text color={"#3E3E3E"}>Loan Amount</Text>
              <Text fontWeight={700}>$1,500</Text>
            </HStack>
            <HStack justifyContent={"space-between"}>
              <Text color={"#3E3E3E"}>Loan term</Text>
              <Text fontWeight={700}>12 months</Text>
            </HStack>
            <HStack justifyContent={"space-between"}>
              <Text color={"#3E3E3E"}>Payment frequency</Text>
              <Text fontWeight={700}>monthly</Text>
            </HStack>
            <HStack justifyContent={"space-between"}>
              <Text color={"#3E3E3E"}>Loan payment</Text>
              <Text fontWeight={700}>$0</Text>
            </HStack>
            <HStack justifyContent={"space-between"}>
              <Text color={"#3E3E3E"}>Monthly rent</Text>
              <Text fontWeight={700}>$1,000</Text>
            </HStack>
            <HStack justifyContent={"space-between"}>
              <Text color={"#3E3E3E"}>Other expenses</Text>
              <Text fontWeight={700}>$1,392</Text>
            </HStack>
          </VStack>
        </ScrollView>
        <Button
        mt={2}
          _pressed={{ bg: "#f1f1f1" }}
          onPress={() => nav.navigate("LoanDone" as never)}
        >
          Confirm
        </Button>
      </Stack>
    </SafeAreaView>
  );
};

export default LastStep;
