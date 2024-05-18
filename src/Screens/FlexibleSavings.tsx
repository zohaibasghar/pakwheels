import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, Image, Stack, Text, View } from "native-base";
import { FloatingLabelInput } from "react-native-floating-label-input";
import { StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const FlexibleSavings = () => {
  const [name, setName] = useState("");
  const nav = useNavigation();
  return (
    <SafeAreaView style={{ backgroundColor: "#fff", flex: 1 }}>
      <Stack alignSelf={"flex-start"} ml={6} mt={4}>
        <TouchableOpacity style={styles.backButtonContainer} onPress={() => nav.goBack()}>
          <AntDesign name="close" size={24} color="black" />
        </TouchableOpacity>
      </Stack>
      <Stack w={"92%"} mx={"auto"} mt={8} justifyContent={"space-between"} flex={1}>
        <Stack>
          <Text fontFamily={"Manrope_700Bold"} fontSize={28}>
            Flexible Savings
          </Text>
          <Text color={"#616161"} fontSize={"16px"}>
            Create a bucket with no minimum balance, unlimited access and free transfers
          </Text>
          <Image
            source={require("../../assets/saving_account.png")}
            mx={"auto"}
            my={4}
            alt="Flexible Saving account"
          />
          <FloatingLabelInput
            label="Account nickname"
            value={name}
            containerStyles={{
              borderColor: "#E0E0E0",
              borderWidth: 1,
              padding: 12,
              borderRadius: 12,
            }}
            inputStyles={{ padding: 2 }}
            onChangeText={(e) => setName(e)}
          />
        </Stack>
        <Button
          _text={{ fontFamily: "Manrope_600SemiBold", fontSize: 16 }}
          _pressed={{ bg: "#f1f1f1" }}
          onPress={() => nav.navigate("SelectBudget" as never)}
        >
          Continue
        </Button>
      </Stack>
    </SafeAreaView>
  );
};

export default FlexibleSavings;

const styles = StyleSheet.create({
  backButtonContainer: {
    backgroundColor: "#f8f8f8",
    borderRadius: 100,
    padding: 16,
  },
});
