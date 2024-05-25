import { Text, HStack, VStack, Image, Button } from "native-base";
import React from "react";
import { Platform, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Svg, { LinearGradient, Stop, Rect } from "react-native-svg";
import { SafeAreaView } from "react-native-safe-area-context";

const Signup = () => {
  const nav = useNavigation();
  return (
    <SafeAreaView style={{ backgroundColor: "#5E41E6", flex: 1 }}>
      <HStack mt={4} mb={8} mx={6} alignItems={"center"} space={4}>
        <TouchableOpacity
          style={styles.backButtonContainer}
          onPress={() => nav.navigate("Login" as never)}
        >
          <Ionicons name="arrow-back" size={22} color="#fff" />
        </TouchableOpacity>
        <Text color={"white"} fontSize={16} fontFamily={"Manrope_600SemiBold"}>
          Login
        </Text>
      </HStack>
      <VStack mx={6} space={2} position={"relative"} mb={16}>
        <Text fontFamily={"Manrope_700Bold"} color={"#fff"} fontSize={48} lineHeight={52}>
          Banking you need. Service you deserve.
        </Text>
        <Text color={"#fff"} fontSize={"md"}>
          Create accounts, earn cash back and rewards, save effortlessly, and much more
        </Text>
      </VStack>
      <Image
        source={require("../../../assets/bank_app.png")}
        alt="Island bank app opened on iphone 13"
      />
      <Svg height="200" width="100%" style={styles.svgOverlay}>
        <LinearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <Stop offset="0%" stopColor="rgb(94, 65, 230)" stopOpacity={0} />
          <Stop offset="57.66%" stopColor="rgb(77, 45, 227)" />
          <Stop offset="100%" stopColor="rgb(64, 30, 225)" />
        </LinearGradient>
        <Rect x="0" y="0" width="100%" height="100%" fill="url(#gradient)" />
      </Svg>
      <Button
        bg={"white"}
        _text={{ color: "black", fontFamily: "Manrope_600SemiBold", fontSize: 16 }}
        mx={6}
        position={"absolute"}
        bottom={0}
        mb={Platform.OS === "android" ? 7 : 12}
        left={0}
        right={0}
        onPress={() => nav.navigate("GetStarted" as never)}
      >
        Get started
      </Button>
    </SafeAreaView>
  );
};

export default Signup;

const styles = StyleSheet.create({
  backButtonContainer: {
    backgroundColor: "#ffffff12",
    borderRadius: 100,
    padding: 16,
  },

  svgOverlay: {
    position: "absolute", // Position the gradient overlay on top of the image
    bottom: 0, // Place at the bottom
  },
});
