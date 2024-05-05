import { View, Text, VStack, Button, Modal } from "native-base";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomHeaderHelp from "../../Components/CustomHeaderHelp";
import { useNavigation } from "@react-navigation/native";
import { Camera, CameraType } from "expo-camera";
import { StyleSheet } from "react-native";

const PersonalDetails = () => {
  const nav = useNavigation();
  const [showModal, setShowModal] = useState(true);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  useEffect(() => {
    requestPermission();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <CustomHeaderHelp title="Manual Input" />
      <VStack justifyContent={"space-between"} flex={1}>
        <VStack space={4} mx={6}>
          <VStack my={4}>
            <Text bold fontSize={"3xl"}>
              Personal Details
            </Text>
            <Text color={"#616161"}>
              Capture your ID card to automatically fill in your personal information.
            </Text>
          </VStack>
        </VStack>
        {permission?.granted ? (
          <Camera style={{ flex: 1, marginVertical: 24 }} type={CameraType.back} autoFocus>
            <View style={styles.overlay}>
              <View style={styles.rectangle} />
            </View>
          </Camera>
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
  },
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  rectangle: {
    width: 350,
    height: 200,
    borderWidth: 2,
    borderColor: "#e6e6e6",
    borderRadius: 14,
  },
});
