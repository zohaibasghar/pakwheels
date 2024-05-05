import { useNavigation, useRoute } from "@react-navigation/native";
import { Stack, Text, View } from "native-base";
import React, { useEffect, useRef, useState } from "react";
import { FloatingLabelInput } from "react-native-floating-label-input";
import { Title } from "react-native-paper";
import CustomHeaderHelp from "../../Components/CustomHeaderHelp";

const OtpVerification2 = () => {
  const route = useRoute();
  const { phone }: any = route.params;
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
      <View mt={12}>
        <CustomHeaderHelp title="Help" />
      </View>
      <Stack w={"92%"} mx={"auto"} mt={8}>
        <Stack space={4}>
          <Title style={{ fontWeight: "bold", fontSize: 28 }}>6-digit code</Title>
          <Text fontSize={18} color={"#616161"}>
            Code sent to + 1784 {phone}, enter it below to continue.
          </Text>
          <FloatingLabelInput
            label="Code"
            value={otp}
            ref={inputRef}
            keyboardType="number-pad"
            maxLength={6}
            onChangeText={(e) => {
              setOtp(e);
              if (e.length === 6) {
                nav.navigate("PushNotifications" as never);
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

export default OtpVerification2;
