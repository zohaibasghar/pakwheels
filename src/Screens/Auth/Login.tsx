import { Box, Flex, Image, Input, Stack, Text } from "native-base";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";
import Button from "../../Components/Button";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const [phone, setPhone] = useState("");
  const [code, setCode] = useState("1784");
  const nav = useNavigation();

  function handleLogin() {
    nav.navigate("OtpVerification", { phone });
  }
  return (
    <SafeAreaView style={{ backgroundColor: "#5E41E6", flex: 1 }}>
      <Stack alignItems={"center"} justifyContent={"space-around"} w={"92%"} flex={1} mx={"auto"}>
        <Stack alignItems={"center"} space={3}>
          <Image source={require("../../../assets/main_logo.png")} alt="Logo" />
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
                leftElement={<Text>+</Text>}
                bg={"transparent"}
                variant={"unstyled"}
                py={2}
                fontSize={"15"}
                inputMode="numeric"
                value={code}
                onChangeText={(e) => setCode(e)}
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

          <Button
            text={"Log in"}
            bgColor={"#f8f8f8"}
            handleFunc={handleLogin}
            disability={!phone}
          />
        </Stack>
        <Stack>
          <Text color={"#f8f8f8"} fontWeight={400}>
            Don't have an account?
          </Text>
          <TouchableOpacity onPress={() => nav.navigate("Signup" as never)}>
            <Text textAlign={"center"} color={"#f8f8f8"} fontWeight={800}>
              Get one in 10mins
            </Text>
          </TouchableOpacity>
        </Stack>
      </Stack>
    </SafeAreaView>
  );
};

export default Login;
