import { View, Text, HStack, Stack, VStack, Button } from "native-base";
import React from "react";
import CustomHeaderHelp from "../../Components/CustomHeaderHelp";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign, Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const GetStarted = () => {
  const nav = useNavigation();
  return (
    <SafeAreaView style={{ backgroundColor: "#fff", flex: 1 }}>
      <CustomHeaderHelp title="Help" />
      <VStack justifyContent={"space-between"} flex={1}>
        <View>
          <Stack mx={6}>
            <Text fontSize={"3xl"} fontFamily={"Manrope_700Bold"}>
              Let's get started
            </Text>
            <Text fontSize={"md"} color={"#616161"}>
              To bank with us, you must
            </Text>
          </Stack>
          <VStack space={2} m={8} w={"100%"}>
            <HStack alignItems={"center"} space={3}>
              <AntDesign name="checkcircle" size={24} color="#5E41E6" />
              <Text fontSize={"md"}>be 18+</Text>
            </HStack>
            <HStack alignItems={"center"} space={3}>
              <AntDesign name="checkcircle" size={24} color="#5E41E6" />
              <Text fontSize={"md"}>have a EC mobile number</Text>
            </HStack>
            <HStack alignItems={"center"} space={3}>
              <AntDesign name="checkcircle" size={24} color="#5E41E6" />
              <Text fontSize={"md"}>be a resident of the Eastern Caribbean</Text>
            </HStack>
            <HStack alignItems={"center"} space={3}>
              <AntDesign name="checkcircle" size={24} color="#5E41E6" />
              <Text fontSize={"md"}>be a tax resident of residing country</Text>
            </HStack>
          </VStack>
        </View>
        <VStack mx={6} space={4}>
          <Stack bg={"#E8F8F5"} rounded={16} p={4} space={1}>
            <HStack space={2} alignItems={"center"}>
              <Feather name="info" size={20} color="black" />
              <Text bold>You'll need photo ID</Text>
            </HStack>
            <Text fontSize={12}>
              Please give your passport, driving license, or any other Eastern Caribean identity
              card ready.
            </Text>
          </Stack>
          <Button
            _pressed={{ bg: "#f1f1f1" }}
            _text={{ fontFamily: "Manrope_600SemiBold", fontSize: 16 }}
            onPress={() => nav.navigate("CreateAccount" as never)}
          >
            I'm ready
          </Button>
        </VStack>
      </VStack>
    </SafeAreaView>
  );
};

export default GetStarted;
