import { View, Text, VStack, Button, HStack } from "native-base";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomHeaderHelp from "../../Components/CustomHeaderHelp";
import { useNavigation } from "@react-navigation/native";
import { FloatingLabelInput } from "react-native-floating-label-input";

const DOB = () => {
  const nav = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <CustomHeaderHelp title="Help" />
      <VStack justifyContent={"space-between"} flex={1} mx={6}>
        <VStack space={4}>
          <VStack my={4}>
            <Text bold fontSize={"3xl"}>
              Date of birth
            </Text>
            <Text color={"#616161"}>
              Enter your date of birth as on your official documents you'll be uploading
            </Text>
          </VStack>
          <HStack space={2}>
            <FloatingLabelInput
              label="Month"
              containerStyles={{
                borderColor: "#e0e0e0",
                borderWidth: 1,
                borderRadius: 12,
                paddingVertical: 16,
                paddingHorizontal: 12,
              }}
              keyboardType="number-pad"
            />
            <FloatingLabelInput
              label="Day"
              containerStyles={{
                borderColor: "#e0e0e0",
                borderWidth: 1,
                borderRadius: 12,
                paddingVertical: 16,
                paddingHorizontal: 12,
              }}
              keyboardType="number-pad"
            />
            <FloatingLabelInput
              label="Year"
              containerStyles={{
                borderColor: "#e0e0e0",
                borderWidth: 1,
                borderRadius: 12,
                paddingVertical: 16,
                paddingHorizontal: 12,
              }}
              keyboardType="number-pad"
            />
          </HStack>
        </VStack>
        <Button onPress={() => nav.navigate("HomeAddress" as never)} _pressed={{ bg: "#f1f1f1" }}>
          Continue
        </Button>
      </VStack>
    </SafeAreaView>
  );
};

export default DOB;
