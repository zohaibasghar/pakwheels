import { useNavigation } from "@react-navigation/native";
import { View, Text, VStack, Image, Button, Radio, ScrollView } from "native-base";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomHeaderHelp from "../../Components/CustomHeaderHelp";
import { FloatingLabelInput } from "react-native-floating-label-input";

const EmploymentStatus = () => {
  const nav = useNavigation();
  const [value, setValue] = React.useState("1");
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <CustomHeaderHelp title="Skip" />
      <VStack justifyContent={"space-between"} flex={1} mx={6}>
        <ScrollView>
          <VStack space={4}>
            <VStack my={4}>
              <Text bold fontSize={"3xl"}>
                Employment Status
              </Text>
              <Text color={"#616161"}>What is your main employment status?</Text>
            </VStack>
            <VStack>
              {/* // TODO: Still not confirm input or select */}
              <Radio.Group
                name="myRadioGroup"
                accessibilityLabel="favorite number"
                value={value}
                onChange={(nextValue) => {
                  setValue(nextValue);
                }}
              >
                <Radio
                  shadow={2}
                  value="1"
                  my="2"
                  _icon={{ color: "#401EE1" }}
                  _checked={{
                    borderColor: "#401EE1",
                    _icon: {
                      color: "#401EE1",
                    },
                  }}
                >
                  Employed (full-time or part-time)
                </Radio>
                <Radio
                  shadow={2}
                  value="2"
                  my="2"
                  _icon={{ color: "#401EE1" }}
                  _checked={{
                    borderColor: "#401EE1",
                    _icon: {
                      color: "#401EE1",
                    },
                  }}
                >
                  Freelancer
                </Radio>
                <Radio
                  shadow={2}
                  value="3"
                  my="2"
                  _icon={{ color: "#401EE1" }}
                  _checked={{
                    borderColor: "#401EE1",
                    _icon: {
                      color: "#401EE1",
                    },
                  }}
                >
                  Student
                </Radio>
                <Radio
                  shadow={2}
                  value="4"
                  my="2"
                  _icon={{ color: "#401EE1" }}
                  _checked={{
                    borderColor: "#401EE1",
                    _icon: {
                      color: "#401EE1",
                    },
                  }}
                >
                  Retired or homemaker
                </Radio>
                <Radio
                  shadow={2}
                  value="5"
                  my="2"
                  _icon={{ color: "#401EE1" }}
                  _checked={{
                    borderColor: "#401EE1",
                    _icon: {
                      color: "#401EE1",
                    },
                  }}
                >
                  Unemployed
                </Radio>
              </Radio.Group>
              <FloatingLabelInput
                label="Country of residence"
                style={{ borderColor: "#e0e0e0", borderWidth: 1 }}
                containerStyles={{
                  borderColor: "#e0e0e0",
                  marginVertical: 16,
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
            </VStack>
          </VStack>
        </ScrollView>
        <Button _pressed={{ bg: "#f1f1f1" }} onPress={() => nav.navigate("SalaryRange" as never)}>
          Continue
        </Button>
      </VStack>
    </SafeAreaView>
  );
};

export default EmploymentStatus;
