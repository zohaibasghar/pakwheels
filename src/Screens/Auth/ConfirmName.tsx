import { View, Text, VStack, Button } from "native-base";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomHeaderHelp from "../../Components/CustomHeaderHelp";
import { useNavigation } from "@react-navigation/native";
import { FloatingLabelInput } from "react-native-floating-label-input";

const ConfirmName = () => {
  const nav = useNavigation();
  const [fName, setFName] = useState('')
  const [lName, setLName] = useState('')
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <CustomHeaderHelp title="Hep" />
      <VStack justifyContent={"space-between"} flex={1} mx={6}>
        <VStack space={4}>
          <VStack my={4}>
            <Text bold fontSize={"3xl"}>
              Name as on ID
            </Text>
            <Text color={"#616161"}>
              Enter your name as on your official documents you'll be uploading.
            </Text>
          </VStack>
          <VStack space={4}>
            <FloatingLabelInput
              label="First name"
              containerStyles={{
                borderColor: "#e0e0e0",
                borderWidth: 1,
                borderRadius: 12,
                paddingVertical: 16,
                paddingHorizontal: 12,
              }}
              value={fName}
              onChangeText={e=>setFName(e)}
            />
            <FloatingLabelInput
              label="Last name"
              containerStyles={{
                borderColor: "#e0e0e0",
                borderWidth: 1,
                borderRadius: 12,
                paddingVertical: 16,
                paddingHorizontal: 12,
              }}
              value={lName}
              onChangeText={e=>setLName(e)}
            />
          </VStack>
        </VStack>
        <Button onPress={() => nav.navigate("DOB" as never)} _pressed={{ bg: "#f1f1f1" }}>
          Continue
        </Button>
      </VStack>
    </SafeAreaView>
  );
};

export default ConfirmName;
