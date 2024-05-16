import { Text, Stack, Button } from "native-base";
import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { FloatingLabelInput } from "react-native-floating-label-input";
import CustomSelect from "../Components/CustomSelect";

const MonthlyAmount = () => {
  const nav = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <Stack alignSelf={"flex-start"} ml={6} mt={4}>
        <TouchableOpacity style={styles.backButtonContainer} onPress={() => nav.goBack()}>
          <Ionicons name="arrow-back" size={22} color="#000" />
        </TouchableOpacity>
      </Stack>
      <Stack w={"92%"} mx={"auto"} mt={8} justifyContent={"space-between"} flex={1}>
        <Stack>
          <Text fontSize={"3xl"} bold>
            Monthly amount
          </Text>
          <Text color={"#616161"} fontSize={"16px"}>
            Set up the amount required by the others in your iSuSu Fund
          </Text>
          <Stack space={2} mt={6}>
            <FloatingLabelInput
              label="Amount"
              leftComponent={<Text>$</Text>}
              containerStyles={{
                borderColor: "#E0E0E0",
                borderWidth: 1,
                padding: 12,
                borderRadius: 12,
              }}
              inputStyles={{ padding: 2 }}
            />
            <CustomSelect label="Disburse frequency" data={["Weekly", "Monthly", "Yearly"]} width={'100%'}/>
          </Stack>
        </Stack>
        <Button _pressed={{ bg: "#f1f1f1" }} onPress={() => nav.navigate("FundRules" as never)}>
          Continue
        </Button>
      </Stack>
    </SafeAreaView>
  );
};

export default MonthlyAmount;

const styles = StyleSheet.create({
  backButtonContainer: {
    backgroundColor: "#f8f8f8",
    borderRadius: 100,
    padding: 16,
  },
});
