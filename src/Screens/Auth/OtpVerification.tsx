import { useRoute } from "@react-navigation/native";
import { Stack, Text, View } from "native-base";
import React, { useEffect, useRef, useState } from "react";
import { FloatingLabelInput } from "react-native-floating-label-input";
import { useAppDispatch } from "../../redux/Store";
import { createTransaction, signIn } from "../../redux/authSlice";
import CustomHeader from "../../Components/CustomHeader";

const OtpVerification = () => {
  const route = useRoute();
  const { phone }: any = route.params;
  const [otp, setOtp] = useState("");
  const dispatch = useAppDispatch();
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
      <Stack w={"92%"} mx={"auto"} mt={8}>
        <Stack space={2}>
          <Text fontFamily={"Manrope_700Bold"} fontSize={28}>
            6-digit code
          </Text>
          <Text mb={6} fontSize={16} color={"#616161"}>
            Code sent to + 1784 {phone}, enter it below to continue.
          </Text>
          <FloatingLabelInput
            label="Code"
            ref={inputRef}
            containerStyles={{
              borderColor: "#e0e0e0",
              borderWidth: 1,
              borderRadius: 12,
              paddingVertical: 16,
              paddingHorizontal: 12,
            }}
            value={otp}
            keyboardType="number-pad"
            maxLength={6}
            onChangeText={(e) => {
              setOtp(e);
              if (e.length === 6) {
                dispatch(signIn());
                dispatch(createTransaction());
              }
            }}
          />
          <Text mt={4}>
            Resend code in <Text bold>00:14</Text>
          </Text>
        </Stack>
      </Stack>
    </View>
  );
};

export default OtpVerification;
