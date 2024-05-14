import { useRoute } from "@react-navigation/native";
import { Stack, Text, View } from "native-base";
import React, { useEffect, useRef, useState } from "react";
import { FloatingLabelInput } from "react-native-floating-label-input";
import { Title } from "react-native-paper";
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
        <Stack space={4}>
          <Title style={{ fontWeight: "bold", fontSize: 28 }}>6-digit code</Title>
          <Text fontSize={18} color={"#616161"}>
            Code sent to + 1784 {phone}, enter it below to continue.
          </Text>
          <FloatingLabelInput
            label="Code"
            ref={inputRef}
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
          <Text>
            Resend code in <Text bold>00:14</Text>
          </Text>
        </Stack>
      </Stack>
    </View>
  );
};

export default OtpVerification;
