import { View, Text, VStack, Button, HStack } from "native-base";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomHeaderHelp from "../../Components/CustomHeaderHelp";
import { useNavigation } from "@react-navigation/native";
import { FloatingLabelInput } from "react-native-floating-label-input";

const DOB = () => {
  const nav = useNavigation();
  const [month, setMonth] = useState("02");
  const [day, setDay] = useState("15");
  const [year, setYear] = useState("1986");
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <CustomHeaderHelp title="Help" />
      <VStack justifyContent={"space-between"} flex={1} mx={6}>
        <VStack space={4}>
          <VStack my={4}>
            <Text fontFamily={"Manrope_700Bold"} fontSize={28}>
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
                paddingVertical: 12,
                paddingHorizontal: 12,
              }}
              keyboardType="number-pad"
              value={month}
              onChangeText={(e) => setMonth(e)}
            />
            <FloatingLabelInput
              label="Day"
              containerStyles={{
                borderColor: "#e0e0e0",
                borderWidth: 1,
                borderRadius: 12,
                paddingVertical: 12,
                paddingHorizontal: 12,
              }}
              keyboardType="number-pad"
              value={day}
              onChangeText={(e) => setDay(e)}
            />
            <FloatingLabelInput
              label="Year"
              containerStyles={{
                borderColor: "#e0e0e0",
                borderWidth: 1,
                borderRadius: 12,
                paddingVertical: 12,
                paddingHorizontal: 12,
              }}
              keyboardType="number-pad"
              value={year}
              onChangeText={(e) => setYear(e)}
            />
          </HStack>
        </VStack>
        <Button
          onPress={() => nav.navigate("HomeAddress" as never)}
          _pressed={{ bg: "#f1f1f1" }}
          _text={{ fontFamily: "Manrope_600SemiBold", fontSize: 16 }}
        >
          Continue
        </Button>
      </VStack>
    </SafeAreaView>
  );
};

export default DOB;
