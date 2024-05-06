import { useNavigation } from "@react-navigation/native";
import { Text, VStack, Button, Radio, ScrollView } from "native-base";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomHeaderHelp from "../../Components/CustomHeaderHelp";

const AccountUsage = () => {
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
                How do you plan to spend?
              </Text>
              <Text color={"#616161"}>How do you plan to use your account?</Text>
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
                  To receive salary/pension
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
                  Day-to-day expenses
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
                  Personal projects
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
                  Travel or relocation
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
                  Online purchases
                </Radio>
              </Radio.Group>
            </VStack>
          </VStack>
        </ScrollView>
        <Button _pressed={{ bg: "#f1f1f1" }} onPress={() => nav.navigate("TaxInfo" as never)}>
          Continue
        </Button>
      </VStack>
    </SafeAreaView>
  );
};

export default AccountUsage;
