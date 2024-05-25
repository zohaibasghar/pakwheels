import { useNavigation } from "@react-navigation/native";
import { View, Text, HStack, VStack, Button, Image } from "native-base";
import React, { useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { CameraView } from "expo-camera";
import { Defs, Ellipse, Mask, Rect, Svg } from "react-native-svg";

const Video = () => {
  const nav = useNavigation();
  const [capture, setCapture] = useState(false);
  const Overlay = () => (
    <View style={styles.overlayContainer}>
      <Svg height="100%" width="100%" viewBox="0 0 100 150">
        <Defs>
          <Mask id="mask" x="0" y="0" height="100%" width="100%">
            <Rect height="100%" width="100%" fill="white" />
            <Ellipse cx="50" cy="75" rx="30" ry="40" fill="black" />
          </Mask>
        </Defs>

        <Rect height="100%" width="100%" fill="rgba(0, 0, 0, 0.5)" mask="url(#mask)" />
        <Ellipse
          cx="50"
          cy="75"
          rx="30"
          ry="40"
          stroke={capture ? "#4CD964" : "white"}
          strokeWidth="1"
          strokeDasharray={capture ? "1 0" : "2 3"}
          fill="none"
        />
      </Svg>
    </View>
  );
  return (
    <View flex={1}>
      <CameraView
        style={{ flex: 1, justifyContent: "space-between", zIndex: 1 }}
        facing="front"
        videoQuality="1080p"
      >
        <HStack mt={16} mb={8} mx={6} alignItems={"center"} space={4} zIndex={99}>
          <TouchableOpacity style={styles.backButtonContainer} onPress={() => nav.goBack()}>
            <Ionicons name="arrow-back" size={22} color="#fff" />
          </TouchableOpacity>
        </HStack>
        <Overlay />
        {capture && (
          <View style={styles.checkIconContainer} bg={"#4CD964"} rounded={"full"} p={2}>
            <AntDesign name="check" size={24} color="white" />
          </View>
        )}
      </CameraView>
      <VStack mx={6} alignItems={"center"} position={"absolute"} bottom={0} w={"87%"} zIndex={99}>
        <Text color={"#fff"} mb={8} fontSize={16} textAlign={"center"}>
          Keep your face within the oval to start recording
        </Text>
        <Button
          _pressed={{ bg: "#f1f1f1" }}
          onPress={() => {
            setCapture(true);
            setTimeout(() => {
              nav.navigate("ReviewVideo" as never);
              setCapture(false);
            }, 300);
          }}
          w={"100%"}
          mb={0}
          _text={{ fontFamily: "Manrope_600SemiBold", fontSize: 16 }}
        >
          Start recording
        </Button>
        <HStack alignItems={"center"} mb={3}>
          <Text fontSize={"2xs"} color={"#fff"}>
            Powered by{" "}
          </Text>
          <Image source={require("../../../assets/whitemetamaplogo.png")} alt="Metamaplogo" />
          <Image source={require("../../../assets/whitemetamap.png")} alt="Metamap" />
        </HStack>
      </VStack>
    </View>
  );
};

export default Video;

const styles = StyleSheet.create({
  backButtonContainer: {
    backgroundColor: "#ffffff12",
    borderRadius: 100,
    padding: 16,
  },
  overlayContainer: {
    position: "absolute",
    top: -250,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
  },
  checkIconContainer: {
    position: "absolute",
    top: "35%",
    left: "49%",
    transform: [{ translateX: -12 }, { translateY: -12 }],
    zIndex: 3,
  },
});
