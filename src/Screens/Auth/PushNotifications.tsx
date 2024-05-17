import { View, Text, Image, Button } from "native-base";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomHeaderHelp from "../../Components/CustomHeaderHelp";
import { Stack } from "native-base";
import { useNavigation } from "@react-navigation/native";

const PushNotifications = () => {
  const nav = useNavigation();
  return (
    <SafeAreaView style={{ backgroundColor: "#fff", flex: 1 }}>
      <CustomHeaderHelp title="Not now" />
      <Stack flex={1} mx={6} justifyContent={"space-between"}>
        <Stack mt={8}>
          <Text fontFamily={"Manrope_700Bold"} fontSize={28}>
            Don't miss anything
          </Text>
          <Text color={"#616161"} fontSize={"md"}>
            Get notified about transfers, spending and security, so you're always in the know
          </Text>
        </Stack>
        <Image
          source={require("../../../assets/Notification.png")}
          alt="Notification Bells"
          alignSelf={"center"}
        />
        <Button
          _pressed={{ bg: "#f1f1f1" }}
          onPress={() => nav.navigate("Residency" as never)}
          _text={{ fontFamily: "Manrope_600SemiBold", fontSize: 16 }}
        >
          Enable push notificaions
        </Button>
      </Stack>
    </SafeAreaView>
  );
};

export default PushNotifications;
