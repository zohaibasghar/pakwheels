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
      <Stack w={"92%"} mx={"auto"} mt={4}>
        <Stack space={2}>
          <Text fontFamily={"Manrope_700Bold"} fontSize={28}>
            6-digit code
          </Text>
          <Text fontSize={16} color={"#616161"} mb={8}>
            Code sent to + 1784 {phone}, enter it below to continue.
          </Text>
          <FloatingLabelInput
            label="Code"
            value={otp}
            ref={inputRef}
            containerStyles={{
              borderColor: "#e0e0e0",
              borderWidth: 1,
              borderRadius: 12,
              paddingVertical: 16,
              paddingHorizontal: 12,
            }}
            keyboardType="number-pad"
            mask="123-456"
            onChangeText={(e) => {
              setOtp(e);
              if (e.length === 7) {
                nav.navigate("PushNotifications" as never);
              }
            }}
          />
          <Text>
            Resend code in <Text fontFamily={"Manrope_700Bold"}>00:14</Text>
          </Text>
        </Stack>
      </Stack>
    </View>
  );
};

export default OtpVerification2;
