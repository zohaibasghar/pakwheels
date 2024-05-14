import { useNavigation } from "@react-navigation/native";
import { View, Text, HStack, VStack, Button, Image } from "native-base";
import React, { useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { Camera, CameraType, CameraView } from "expo-camera";
import { Circle, Defs, Ellipse, Mask, Rect, Svg, Text as SvgText } from "react-native-svg";

const Video = () => {
  const nav = useNavigation();
  const [capture, setCapture] = useState(false);
  const Overlay = () => (
    <View style={styles.overlayContainer}>
      <Svg height="100%" width="100%" viewBox="0 0 100 150">
        <Defs>
          <Mask id="mask" x="0" y="0" height="100%" width="100%">
            <Rect height="100%" width="100%" fill="white" />
            {/* This oval creates the cutout */}
            <Ellipse cx="50" cy="75" rx="30" ry="40" fill="black" />
          </Mask>
        </Defs>

        {/* Gray overlay with the oval cutout */}
        <Rect height="100%" width="100%" fill="rgba(0, 0, 0, 0.5)" mask="url(#mask)" />

        {/* Border around the oval (white border) */}
        <Ellipse
          cx="50"
          cy="75"
          rx="30"
          ry="40"
          stroke={capture ? "#4CD964" : "white"}
          strokeWidth="1" // Border thickness
          strokeDasharray={capture ? "1 0" : "2 3"} // Defines the dash pattern (10px dash, 5px gap)
          fill="none" // Ensure it is transparent
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

        <VStack mx={6} alignItems={"center"} position={"absolute"} bottom={0} w={"87%"}>
          <Text color={"white"} mb={8} fontSize={"md"} textAlign={"center"} fontWeight={300}>
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
          >
            Start recording
          </Button>
          <HStack alignItems={"center"} mb={3}>
            <Text fontSize={"2xs"} color={"white"}>
              Powered by{" "}
            </Text>
            <Image source={require("../../../assets/whitemetamaplogo.png")} alt="Metamaplogo" />
            <Image source={require("../../../assets/whitemetamap.png")} alt="Metamap" />
          </HStack>
        </VStack>
      </CameraView>
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
    transform: [{ translateX: -12 }, { translateY: -12 }], // Centering the icon
    zIndex: 3, // Ensures it appears above everything else
  },
});
