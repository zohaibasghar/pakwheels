import React from "react";
import CustomHeaderHelp from "../../Components/CustomHeaderHelp";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { Button, HStack, ScrollView, Stack, Text, VStack } from "native-base";
import { FloatingLabelInput } from "react-native-floating-label-input";
import CustomSelect from "../../Components/CustomSelect";

const WorkInfo = () => {
  const nav = useNavigation();
  const [employer, setEmployer] = React.useState("");
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <CustomHeaderHelp
        title="Cancel"
        handleFunc={() => nav.navigate("HomeTabs", { screen: "Credit" })}
      />
      <Stack w={"92%"} mx={"auto"} mt={8} justifyContent={"space-between"} flex={1}>
        <ScrollView>
          <Stack mb={6}>
            <Text fontFamily={"Manrope_700Bold"} fontSize={28}>
              Where do you work?
            </Text>
            <Text color={"#616161"} fontSize={"16px"}>
              We will never contact your employer
            </Text>
          </Stack>
          <VStack space={4} w={"100%"}>
            <FloatingLabelInput
              label="Employer name"
              value={employer}
              containerStyles={{
                borderColor: "#E0E0E0",
                borderWidth: 1,
                padding: 12,
                borderRadius: 12,
              }}
              inputStyles={{ padding: 2 }}
              onChangeText={(e) => setEmployer(e)}
            />
            <HStack space={2}>
              <CustomSelect
                width={"48.5%"}
                label="Start year"
                data={[
                  "2020",
                  "2019",
                  "2018",
                  "2017",
                  "2016",
                  "2015",
                  "2014",
                  "2013",
                  "2012",
                  "2011",
                  "2010",
                  "2009",
                  "2008",
                  "2007",
                  "2006",
                  "2005",
                  "2004",
                  "2003",
                  "2002",
                  "2001",
                  "2000",
                  "1999",
                ]}
              />
              <CustomSelect
                width={"48.5%"}
                label="Start month"
                data={["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"]}
              />
            </HStack>
          </VStack>
        </ScrollView>
        <Button
          _pressed={{ bg: "#f1f1f1" }}
          _text={{ fontFamily: "Manrope_600SemiBold", fontSize: 16 }}
          onPress={() => nav.navigate("IncomeAfterTax" as never)}
        >
          Continue
        </Button>
      </Stack>
    </SafeAreaView>
  );
};

export default WorkInfo;
