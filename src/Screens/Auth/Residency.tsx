import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomHeaderHelp from "../../Components/CustomHeaderHelp";
import { Button, Image, Input, Text, VStack } from "native-base";
import { FloatingLabelInput } from "react-native-floating-label-input";
import { useNavigation } from "@react-navigation/native";
import CountrySelect from "../../Components/CountrySelect";

const Residency = () => {
  const nav = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <CustomHeaderHelp title="Help" />
      <VStack justifyContent={"space-between"} flex={1} mx={6}>
        <VStack space={4}>
          <VStack my={4}>
            <Text bold fontSize={"3xl"}>
              Confirm residency
            </Text>
            <Text color={"#616161"}>
              Let us know where you currently live within the Eastern Caribbean.
            </Text>
          </VStack>
          {/* // TODO: Still not confirm input or select */}
          <CountrySelect label="Country of residence" />
        </VStack>
        <Button
          _pressed={{ bg: "#f1f1f1" }}
          onPress={() => nav.navigate("PersonalDetails" as never)}
        >
          Continue
        </Button>
      </VStack>
    </SafeAreaView>
  );
};

export default Residency;
