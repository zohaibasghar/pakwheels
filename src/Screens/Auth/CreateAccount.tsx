import { View, Text, Stack, Image, Input, Flex, Box, Button, HStack } from "native-base";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomHeaderHelp from "../../Components/CustomHeaderHelp";
import { TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const CreateAccount = () => {
  const [phone, setPhone] = useState("");
  const [code, setCode] = useState("1784");
  const nav = useNavigation();
  return (
    <SafeAreaView style={{ backgroundColor: "#fff", flex: 1 }}>
      <CustomHeaderHelp title="Help" />
      <Stack flex={1} mx={6} justifyContent={"space-between"} mt={4}>
        <Stack>
          <Text fontSize={28} fontFamily={"Manrope_700Bold"}>
            Create account
          </Text>
          <Text>Enter your phone number. We'll send you a confirmation code.</Text>
          <Flex direction="row" justify="space-between" mx={"auto"} w={"100%"} mt={12}>
            <HStack
              w={"33%"}
              bg={"#fff"}
              rounded={12}
              p={2}
              borderColor={"#E0E0E0"}
              borderWidth={1}
              alignItems={"center"}
            >
              <Image
                source={require("../../../assets/country_flag.png")}
                mr={2}
                alt="eatern careabian"
              />
              <Text fontSize={16}>+</Text>
              <Input
                bg={"transparent"}
                variant={"unstyled"}
                py={2}
                fontSize={"15"}
                value={code}
                onChangeText={(e) => setCode(e)}
                keyboardType="number-pad"
                type="text"
              />
            </HStack>
            <Input
              value={phone}
              bgColor={"#fff"}
              rounded={12}
              borderColor={"#E0E0E0"}
              borderWidth={1}
              onChangeText={(e) => setPhone(e as string)}
              keyboardType="number-pad"
              placeholder="Enter Phone number"
              type="text"
              _focus={{ bgColor: "#f8f8f8" }}
              variant={"filled"}
              w={"65%"}
              fontSize={15}
              rightElement={
                <TouchableOpacity onPress={() => setPhone("")}>
                  <AntDesign
                    name="close"
                    size={16}
                    style={{
                      marginRight: 16,
                      backgroundColor: "#d9d9d9",
                      borderRadius: 50,
                      padding: 2,
                    }}
                    color="white"
                  />
                </TouchableOpacity>
              }
            />
          </Flex>
          <Text my={4}>
            Already have an account?{" "}
            <Text
              color={"#5E41E6"}
              fontFamily={"Manrope_700Bold"}
              onPress={() => nav.navigate("Login" as never)}
            >
              Log in
            </Text>
          </Text>
        </Stack>
        <Button
          _pressed={{ bg: "#f1f1f1" }}
          _text={{ fontFamily: "Manrope_600SemiBold", fontSize: 16 }}
          onPress={() => nav.navigate("OtpVerification2", { phone })}
        >
          Sign up
        </Button>
      </Stack>
    </SafeAreaView>
  );
};

export default CreateAccount;
