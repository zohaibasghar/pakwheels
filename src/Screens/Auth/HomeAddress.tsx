import { View, Text, VStack, Button, ScrollView } from "native-base";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomHeaderHelp from "../../Components/CustomHeaderHelp";
import { FloatingLabelInput } from "react-native-floating-label-input";
import { useNavigation } from "@react-navigation/native";

const HomeAddress = () => {
  const nav = useNavigation();
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [parish, setParish] = useState("");
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <CustomHeaderHelp title="Help" />
      <VStack justifyContent={"space-between"} flex={1} mx={6}>
        <ScrollView flex={1}>
          <VStack space={4}>
            <VStack my={4}>
              <Text fontFamily={"Manrope_700Bold"} fontSize={28}>
                Home Address
              </Text>
              <Text color={"#616161"}>
                Enter your home address exactly as it appears on your utility bill.
              </Text>
            </VStack>
            <VStack space={2}>
              <FloatingLabelInput
                label="Street name, building"
                containerStyles={{
                  borderColor: "#e0e0e0",
                  borderWidth: 1,
                  borderRadius: 12,
                  paddingVertical: 16,
                  paddingHorizontal: 12,
                }}
                value={street}
                onChangeText={(e) => setStreet(e)}
              />
              <FloatingLabelInput
                label="Village, city or town"
                containerStyles={{
                  borderColor: "#e0e0e0",
                  borderWidth: 1,
                  borderRadius: 12,
                  paddingVertical: 16,
                  paddingHorizontal: 12,
                }}
                value={city}
                onChangeText={(e) => setCity(e)}
              />
              <FloatingLabelInput
                label="Parish"
                containerStyles={{
                  borderColor: "#e0e0e0",
                  borderWidth: 1,
                  borderRadius: 12,
                  paddingVertical: 16,
                  paddingHorizontal: 12,
                  marginBottom: 12,
                }}
                value={parish}
                onChangeText={(e) => setParish(e)}
              />
            </VStack>
          </VStack>
        </ScrollView>
        <Button
          onPress={() => nav.navigate("EmailContact" as never)}
          _pressed={{ bg: "#f1f1f1" }}
          _text={{ fontFamily: "Manrope_600SemiBold", fontSize: 16 }}
        >
          Continue
        </Button>
      </VStack>
    </SafeAreaView>
  );
};

export default HomeAddress;
