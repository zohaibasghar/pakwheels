import { View, Text, Input, Center, Stack, Flex, Image, Button, HStack } from "native-base";
import React, { useEffect, useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomHeader from "../../Components/CustomHeader";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const TransferDirect = () => {
  const [amount, setAmount] = useState("$");
  const textInputRef = useRef(null);
  const nav = useNavigation();
  useEffect(() => {
    const timer = setTimeout(() => {
      if (textInputRef.current) {
        textInputRef.current?.focus();
      }
    }, 200);
    if (amount === "") {
      setAmount("$");
    }
    return () => clearTimeout(timer);
  }, [amount]);
  return (
    <SafeAreaView style={{ backgroundColor: "#fff", flex: 1 }}>
      <CustomHeader title="Transfer" />
      <Center>
        <Input
          variant={"unstyled"}
          ref={textInputRef}
          my={4}
          _input={{ fontFamily: "Manrope_400Regular" }}
          value={amount}
          onChangeText={(e) => setAmount(e)}
          w={"2/3"}
          keyboardType="number-pad"
          fontSize={"4xl"}
          textAlign={"center"}
        />
      </Center>
      <Stack space={2} w={"90%"} mx={"auto"} justifyContent={"space-between"} flex={1}>
        <Stack space={4}>
          <Stack>
            <Text fontFamily={"Manrope_700Bold"} fontSize={16}>
              From
            </Text>
            <TouchableOpacity>
              <Flex align="center" direction="row" justify="space-between" mb={2} mt={4}>
                <Stack direction={"row"} alignItems={"center"} space={2}>
                  <Image source={require("../../../assets/dollar_wings.png")} alt="Money" />
                  <Stack>
                    <Text fontFamily={"Manrope_700Bold"} fontSize={14}>
                      New Account
                    </Text>
                    <Text fontSize={"xs"} color={"#616161"}>
                      $2,738.00 • Checking **2830
                    </Text>
                  </Stack>
                </Stack>
                <MaterialIcons name="keyboard-arrow-right" size={28} color="#5E41E6" />
              </Flex>
            </TouchableOpacity>
          </Stack>
          <Stack>
            <Text fontFamily={"Manrope_700Bold"} fontSize={14}>
              To
            </Text>
            <TouchableOpacity>
              <Flex align="center" direction="row" justify="space-between" mb={2} mt={4}>
                <Stack direction={"row"} alignItems={"center"} space={2}>
                  <Image source={require("../../../assets/rainy_day_fund.png")} alt="Money" />
                  <Stack>
                    <Text fontFamily={"Manrope_700Bold"} fontSize={14}>
                      Rainy Day Fund
                    </Text>
                    <Text fontSize={"xs"} color={"#616161"}>
                      $147.02 • Savings **6272
                    </Text>
                  </Stack>
                </Stack>
                <MaterialIcons name="keyboard-arrow-right" size={28} color="#5E41E6" />
              </Flex>
            </TouchableOpacity>
          </Stack>
        </Stack>
        <Button
          disabled={!amount || amount === "$"}
          _disabled={{ background: "rgba(94, 65, 230, 0.4)" }}
          py={4}
          mb={6}
          onPress={() => nav.navigate("HomeTabs", { screen: "Transfers" })}
          _pressed={{ bg: "#f1f1f1", borderWidth: 1, borderColor: "#5E41E6" }}
        >
          <HStack space={2}>
            <Text color={"white"} fontFamily={"Manrope_700Bold"} fontSize={16}>
              Transfer
            </Text>
            <Text color={"white"} fontFamily={"Manrope_700Bold"} fontSize={16}>
              {amount === "$" || !amount ? "" : amount}
            </Text>
          </HStack>
        </Button>
      </Stack>
    </SafeAreaView>
  );
};

export default TransferDirect;
