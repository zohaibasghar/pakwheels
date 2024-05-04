import { View, Text, Stack, Image, Input, Flex, Box, Button } from "native-base";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomHeaderHelp from "../../Components/CustomHeaderHelp";
import { TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const CreateAccount = () => {
  const [phone, setPhone] = useState("");
  const nav = useNavigation();
  return (
    <SafeAreaView style={{ backgroundColor: "#fff", flex: 1 }}>
      <CustomHeaderHelp title="Help" />
      <Stack flex={1} mx={6} justifyContent={"space-between"}>
        <Stack>
          <Text bold fontSize={"2xl"}>
            Create account
          </Text>
          <Text>Enter your phone number. We'll send you a confirmation code.</Text>
          <Flex direction="row" justify="space-between" mx={"auto"} w={"100%"} mt={12}>
            <Box
              w={"33%"}
              bg={"#f8f8f8"}
              rounded={"md"}
              p={2}
              flexDirection={"row"}
              alignItems={"center"}
            >
              <Image
                source={require("../../../assets/country_flag.png")}
                mr={2}
                alt="eatern careabian"
              />
              <Input
                bg={"transparent"}
                variant={"unstyled"}
                py={2}
                fontSize={"15"}
                value="+1 784"
                keyboardType="number-pad"
                type="text"
              />
            </Box>
            <Input
              value={phone}
              onChangeText={(e) => setPhone(e as string)}
              keyboardType="number-pad"
              placeholder="Enter Phone number"
              type="text"
              bg={"#f8f8f8"}
              _focus={{ bg: "#f8f8f8" }}
              variant={"filled"}
              w={"65%"}
              fontSize={15}
              rightElement={
                <TouchableOpacity onPress={() => setPhone("")}>
                  <AntDesign
                    name="close"
                    size={16}
                    style={{
                      marginRight: 8,
                      backgroundColor: "#e1e1e1",
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
            <Text color={"#5E41E6"} onPress={() => nav.navigate("Login" as never)}>
              Log in
            </Text>
          </Text>
        </Stack>
        <Button
          _pressed={{ bg: "#f1f1f1" }}
          disabled={!phone}
          onPress={() => nav.navigate("OtpVerification2", { phone })}
        >
          Sign up
        </Button>
      </Stack>
    </SafeAreaView>
  );
};

export default CreateAccount;
