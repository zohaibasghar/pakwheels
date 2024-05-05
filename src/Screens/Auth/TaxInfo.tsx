import { Text, VStack, Image, Button, ScrollView, Stack, Checkbox, View } from "native-base";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomHeaderHelp from "../../Components/CustomHeaderHelp";
import { FloatingLabelInput } from "react-native-floating-label-input";
import { AntDesign, Feather } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useAppDispatch } from "../../redux/Store";
import { signIn } from "../../redux/authSlice";
const TaxInfo = () => {
  const [show, setShow] = React.useState(false);
  const dispatch = useAppDispatch();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <CustomHeaderHelp title="" />
      <VStack justifyContent={"space-between"} flex={1}>
        <ScrollView>
          <VStack space={4} mx={6}>
            <VStack my={4}>
              <Text bold fontSize={"3xl"}>
                Tax information
              </Text>
              <Text color={"#616161"}>In which country(s) are you a tax resident?</Text>
            </VStack>
            <VStack space={4}>
              <FloatingLabelInput
                label="Country of Tax Liability"
                style={{ borderColor: "#e0e0e0", borderWidth: 1 }}
                containerStyles={{
                  borderColor: "#e0e0e0",
                  borderWidth: 1,
                  borderRadius: 12,
                  paddingVertical: 14,
                  paddingHorizontal: 8,
                }}
                leftComponent={
                  <Image
                    source={require("../../../assets/country_flag.png")}
                    alt="Eastern caribbean"
                    mr={2}
                  />
                }
              />
              <FloatingLabelInput
                label="Tax number"
                style={{ borderColor: "#e0e0e0", borderWidth: 1 }}
                containerStyles={{
                  borderColor: "#e0e0e0",
                  borderWidth: 1,
                  borderRadius: 12,
                  paddingVertical: 14,
                  paddingHorizontal: 8,
                }}
                isPassword
                value="hello"
                togglePassword={show}
                customShowPasswordComponent={<Feather name="eye-off" size={24} color="#d4d2d2" />}
                customHidePasswordComponent={<AntDesign name="eyeo" size={24} color="#d4d2d2" />}
              />
              <TouchableOpacity>
                <Stack
                  direction={"row"}
                  alignItems={"center"}
                  bg={"#f2f5f7"}
                  alignSelf={"flex-start"}
                  rounded={"2xl"}
                  py={1}
                  px={3}
                >
                  <Text>Add another</Text>
                  <Feather name="plus" size={18} color={"black"} />
                </Stack>
              </TouchableOpacity>
            </VStack>
          </VStack>
        </ScrollView>
        <VStack space={4} bg={"#f2f5f7"} px={6} py={4}>
          <View bg={"#fff"} py={4} px={4} rounded={"xl"}>
            <Checkbox
              shadow={2}
              value="us"
              defaultIsChecked
              _checked={{ bg: "#401EE1", borderColor: "#401EE1", borderWidth: 1 }}
            >
              I'm not a U.S citizen
            </Checkbox>
          </View>
          <View bg={"#fff"} py={4} px={4} rounded={"xl"}>
            <Checkbox
              shadow={2}
              value="beneficial"
              defaultIsChecked
              _checked={{ bg: "#401EE1", borderColor: "#401EE1", borderWidth: 1 }}
            >
              I'm the beneficial own of the account
            </Checkbox>
          </View>
          <Button _pressed={{ bg: "#f1f1f1" }} onPress={() => dispatch(signIn())}>
            Done
          </Button>
        </VStack>
      </VStack>
    </SafeAreaView>
  );
};

export default TaxInfo;
