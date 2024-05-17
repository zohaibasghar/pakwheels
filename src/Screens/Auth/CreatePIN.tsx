import { useNavigation, useRoute } from "@react-navigation/native";
import { Stack, Text, View } from "native-base";
import React, { useEffect, useRef, useState } from "react";
import { FloatingLabelInput } from "react-native-floating-label-input";
import { Title } from "react-native-paper";
import CustomHeader from "../../Components/CustomHeader";

const CreatePIN = () => {
  const [otp, setOtp] = useState("");
  const nav = useNavigation();
  const inputRef = useRef();
  useEffect(() => {
    const timer = setTimeout(() => {
      if (inputRef.current) {
        inputRef.current?.focus();
      }
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <View mt={16}>
        <CustomHeader title="" />
      </View>
      <Stack w={"92%"} mx={"auto"} mt={8} space={4}>
        <Stack>
          <Text fontFamily={"Manrope_700Bold"} fontSize={28}>
            Create PIN
          </Text>
          <Text color={"#616161"} fontSize={"16px"}>
            Set a PIN code for your Island Bank Visa Debit Card
          </Text>
        </Stack>
        <FloatingLabelInput
          label="PIN Code"
          ref={inputRef}
          containerStyles={{
            borderColor: "#e0e0e0",
            borderWidth: 1,
            borderRadius: 12,
            paddingVertical: 16,
            paddingHorizontal: 12,
          }}
          isPassword
          value={otp}
          keyboardType="number-pad"
          maxLength={4}
          onChangeText={(e) => {
            setOtp(e);
            if (e.length === 4) {
              nav.navigate("DeliveryAdd" as never);
            }
          }}
        />
      </Stack>
    </View>
  );
};

export default CreatePIN;
