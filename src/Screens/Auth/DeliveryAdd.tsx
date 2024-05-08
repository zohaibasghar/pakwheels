import { useNavigation } from "@react-navigation/native";
import { View, Text, VStack, Button, Box, Radio } from "native-base";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomHeaderHelp from "../../Components/CustomHeaderHelp";

const DeliveryAdd = () => {
  const nav = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <CustomHeaderHelp title="" />
      <VStack justifyContent={"space-between"} flex={1} mx={6}>
        <VStack space={4}>
          <VStack my={4}>
            <Text bold fontSize={"3xl"}>
              Card Delivery
            </Text>
            <Text color={"#616161"}>
              We'll only deliver to nearest post office of our home address or local client centre.
            </Text>
          </VStack>
          <View mx={6}>
            <Radio.Group name="Delivery address">
              <Radio
                value="Home"
                _icon={{ color: "#401EE1" }}
                _checked={{
                  borderColor: "#401EE1",
                  _icon: {
                    color: "#401EE1",
                  },
                }}
              >
                <VStack alignItems={"center"} mt={2}>
                  <Text bold fontSize={"md"} mb={2}>
                    Home Address
                  </Text>
                </VStack>
              </Radio>
              <Text fontSize={"md"}>27 Beach Front St.,</Text>
              <Text fontSize={"md"}>Calliaqua, St. George</Text>
              <Text fontSize={"md"}>St. Vincent & the Grenadines</Text>
              <Radio
                value="Client"
                _icon={{ color: "#401EE1" }}
                _checked={{
                  borderColor: "#401EE1",
                  _icon: {
                    color: "#401EE1",
                  },
                }}
                _stack={{ marginTop: 8 }}
              >
                <VStack alignItems={"center"} mt={2}>
                  <Text bold fontSize={"md"} mb={2}>
                    Client Centre
                  </Text>
                </VStack>
              </Radio>
              <Text fontSize={"md"}>124 Front Street,</Text>
              <Text fontSize={"md"}>Kingstown, St. George</Text>
              <Text fontSize={"md"}>St. Vincent & the Grenadines</Text>
            </Radio.Group>
          </View>
        </VStack>
        <Button onPress={() => nav.navigate("CardDone" as never)} _pressed={{ bg: "#f1f1f1" }}>
          Continue
        </Button>
      </VStack>
    </SafeAreaView>
  );
};

export default DeliveryAdd;
