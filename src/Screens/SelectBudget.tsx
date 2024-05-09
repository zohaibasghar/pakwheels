import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomHeaderHelp from "../Components/CustomHeaderHelp";
import { FloatingLabelInput } from "react-native-floating-label-input";
import { Button, Stack, Text } from "native-base";
import { useNavigation } from "@react-navigation/native";

const SelectBudget = () => {
  const [amount, setAmount] = useState("");
  const nav = useNavigation();
  return (
    <SafeAreaView style={{ backgroundColor: "#fff", flex: 1 }}>
      <CustomHeaderHelp
        title="Skip"
        handleFunc={() => nav.navigate("DoneSavingAccount" as never)}
      />
      <Stack w={"92%"} mx={"auto"} mt={8} justifyContent={"space-between"} flex={1}>
        <Stack>
          <Text fontSize={"3xl"} bold>
            What's your budget?
          </Text>
          <Text color={"#616161"} fontSize={"16px"} mb={6}>
            Setting a monthly budget can help you to better track and manage your spend.
          </Text>

          <FloatingLabelInput
            label="Amount"
            value={amount}
            leftComponent={<Text>$</Text>}
            containerStyles={{
              borderColor: "#E0E0E0",
              borderWidth: 1,
              padding: 12,
              borderRadius: 12,
            }}
            inputStyles={{ padding: 2 }}
            onChangeText={(e) => setAmount(e)}
          />
        </Stack>
        <Button
          _pressed={{ bg: "#f1f1f1" }}
          onPress={() => nav.navigate("DoneSavingAccount" as never)}
        >
          Add Budget
        </Button>
      </Stack>
    </SafeAreaView>
  );
};

export default SelectBudget;
