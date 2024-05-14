import { View, Text, Button, VStack } from "native-base";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomHeaderHelp from "../../Components/CustomHeaderHelp";
import { FloatingLabelInput } from "react-native-floating-label-input";
import { useNavigation } from "@react-navigation/native";

const EmailContact = () => {
  const nav = useNavigation();
  const [email, setEmail] = useState("");
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <CustomHeaderHelp title="Help" />
      <VStack justifyContent={"space-between"} flex={1} mx={6}>
        <VStack space={4}>
          <VStack my={4}>
            <Text bold fontSize={"3xl"}>
              Contacting you
            </Text>
            <Text color={"#616161"}>
              Enter your email address, we'll communicate important information about your account.
            </Text>
          </VStack>
          <VStack space={4}>
            <FloatingLabelInput
              label="Email address"
              containerStyles={{
                borderColor: "#e0e0e0",
                borderWidth: 1,
                borderRadius: 12,
                paddingVertical: 16,
                paddingHorizontal: 12,
              }}
              value={email}
              onChangeText={(e) => setEmail(e)}
            />
          </VStack>
        </VStack>
        <Button
          onPress={() => nav.navigate("EmploymentStatus" as never)}
          _pressed={{ bg: "#f1f1f1" }}
        >
          Continue
        </Button>
      </VStack>
    </SafeAreaView>
  );
};

export default EmailContact;
