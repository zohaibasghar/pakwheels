import { Text, VStack, Image, Button, ScrollView, Stack, Checkbox, View } from "native-base";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomHeaderHelp from "../../Components/CustomHeaderHelp";
import { FloatingLabelInput } from "react-native-floating-label-input";
import { AntDesign, Feather } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import CountrySelect from "../../Components/CountrySelect";

const TaxInfo = () => {
  const [show, setShow] = React.useState(false);
  const nav = useNavigation();
  const [data, setData] = React.useState([{ country: "", pin: "" }]);

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
              {Array.from(data).map((item, index) => {
                return (
                  <View key={index}>
                    <CountrySelect label="Country of Tax Liability" />
                    <FloatingLabelInput
                      label="Tax number"
                      style={{ borderColor: "#e0e0e0", borderWidth: 1 }}
                      containerStyles={{
                        borderColor: "#e0e0e0",
                        borderWidth: 1,
                        borderRadius: 12,
                        paddingVertical: 14,
                        paddingHorizontal: 12,
                      }}
                      isPassword
                      value={item.pin}
                      onChangeText={(e) => {
                        const copy = [...data];
                        copy.splice(index, 1);
                        setData([...copy, { ...item, pin: e }]);
                      }}
                      togglePassword={show}
                      customShowPasswordComponent={
                        <Feather name="eye-off" size={24} color="#d4d2d2" />
                      }
                      customHidePasswordComponent={
                        <AntDesign name="eyeo" size={24} color="#d4d2d2" />
                      }
                    />
                  </View>
                );
              })}
              <TouchableOpacity onPress={() => setData([...data, { country: "", pin: "" }])}>
                <Stack
                  direction={"row"}
                  alignItems={"center"}
                  bg={"#f2f5f7"}
                  alignSelf={"flex-start"}
                  rounded={"2xl"}
                  py={1}
                  px={3}
                  mb={8}
                >
                  <Text fontWeight={700}>Add another</Text>
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
              _text={{ fontSize: 14 }}
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
              _text={{ fontSize: 14 }}
              defaultIsChecked
              _checked={{ bg: "#401EE1", borderColor: "#401EE1", borderWidth: 1 }}
            >
              I'm the beneficial own of the account
            </Checkbox>
          </View>
          <Button _pressed={{ bg: "#f1f1f1" }} onPress={() => nav.navigate("GetVerified" as never)}>
            Done
          </Button>
        </VStack>
      </VStack>
    </SafeAreaView>
  );
};

export default TaxInfo;
