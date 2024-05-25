import { View, Text, VStack, Button, Modal } from "native-base";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomHeaderHelp from "../../Components/CustomHeaderHelp";
import { useNavigation } from "@react-navigation/native";
import { Camera, CameraView, useCameraPermissions } from "expo-camera";
import { StyleSheet } from "react-native";

const PersonalDetails = () => {
  const nav = useNavigation();
  const [showModal, setShowModal] = useState(true);
  const [permission, requestPermission] = useCameraPermissions();
  useEffect(() => {
    requestPermission();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <CustomHeaderHelp title="Manual Input" />
      <VStack justifyContent={"space-between"} flex={1}>
        <VStack space={4} mx={6}>
          <VStack my={4}>
            <Text fontFamily={"Manrope_700Bold"} fontSize={28}>
              Personal Details
            </Text>
            <Text color={"#616161"} fontSize={16}>
              Capture your ID card to automatically fill in your personal information.
            </Text>
          </VStack>
        </VStack>
        {permission?.granted ? (
          <CameraView style={{ flex: 1, marginVertical: 24 }} facing="back">
            <View style={styles.overlay}>
              {/* Create a black overlay with a cutout for the rectangle */}
              {/* Top, Bottom, Left, and Right views create the overlay */}
              <View style={styles.topOverlay} />
              <View style={styles.leftOverlay} />
              <View style={styles.rightOverlay} />
              <View style={styles.bottomOverlay} />

              {/* The transparent rectangle in the center */}
              <View style={styles.rectangle} />
            </View>
          </CameraView>
        ) : (
          <Modal
            isOpen={showModal}
            onClose={() => setShowModal(false)}
            flex={1}
            justifyContent={"center"}
          >
            <Modal.Content maxWidth="450px" p={4} pt={8}>
              <Text style={{ textAlign: "center" }} my={2}>
                We need your permission to show the camera
              </Text>
              <Button
                mx={6}
                onPress={() => {
                  requestPermission();
                  setShowModal(false);
                }}
                _text={{ fontFamily: "Manrope_600SemiBold", fontSize: 16 }}
                _pressed={{ bg: "#f1f1f1" }}
              >
                Grant permission
              </Button>
            </Modal.Content>
          </Modal>
        )}
        <Button
          mx={6}
          onPress={() => nav.navigate("ConfirmDetails" as never)}
          _text={{ fontFamily: "Manrope_600SemiBold", fontSize: 16 }}
          _pressed={{ bg: "#f1f1f1" }}
        >
          Capture
        </Button>
      </VStack>
    </SafeAreaView>
  );
};

export default PersonalDetails;

const styles = StyleSheet.create({
  camera: {
    flex: 1,
    marginVertical: 24,
  },
  overlay: {
    flex: 1,
    position: "relative",
  },

  rectangle: {
    position: "absolute",
    top: "28%",
    left: "15%",
    width: "70%",
    height: "44%",
    borderWidth: 1,
    borderColor: "#e0e0e0",
    backgroundColor: "transparent",
  },
  topOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "28%",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  },
  bottomOverlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: "28%",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  },
  leftOverlay: {
    position: "absolute",
    top: "28%",
    bottom: "28%",
    left: 0,
    width: "15%",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  },
  rightOverlay: {
    position: "absolute",
    top: "28%",
    bottom: "28%",
    right: 0,
    width: "15%",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  },
});
