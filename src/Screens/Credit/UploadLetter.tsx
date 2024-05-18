import React, { useState } from "react";
import CustomHeaderHelp from "../../Components/CustomHeaderHelp";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { Box, Button, Center, Image, ScrollView, Stack, Text, VStack } from "native-base";
import { TouchableOpacity } from "react-native";
import * as DocumentPicker from "expo-document-picker";
import { AntDesign } from "@expo/vector-icons";

const UploadLetter = () => {
  const nav = useNavigation();
  const [file, setfile] = useState<any>({});
  const mediaPick = async () => {
    try {
      const docRes = await DocumentPicker.getDocumentAsync({ type: "application/pdf" });
      const file = new FormData();
      const assets = docRes.assets;
      if (!assets) return;
      const asset = docRes.assets[0];
      const pdfFile = {
        name: asset.name,
        uri: asset.uri,
        type: asset.mimeType,
        size: asset.size,
      };
      setfile(pdfFile);
      console.log(docRes);
    } catch (error) {
      console.log("error while getting documents: ", error);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <CustomHeaderHelp
        title="Cancel"
        handleFunc={() => nav.navigate("HomeTabs", { screen: "Credit" })}
      />
      <Stack w={"92%"} mx={"auto"} mt={8} justifyContent={"space-between"} flex={1}>
        <ScrollView>
          <Stack mb={6}>
            <Text fontFamily={"Manrope_700Bold"} fontSize={28}>
              Upload your job letter
            </Text>
            <Text color={"#616161"} fontSize={"16px"}>
              Gather this from your employer and we'll use this as reference
            </Text>
          </Stack>
          {Object.keys(file).length ? (
            <VStack bg={"#F7F6FE"} w={"2/3"} mx={"auto"} alignItems={"center"} space={4} py={4}>
              <Image source={require("../../../assets/pdf.png")} alt="Uploaded file" />
              <Text>{file?.name}</Text>
              <TouchableOpacity onPress={() => setfile({})}>
                <Text color={"#5E41E6"}>Delete</Text>
              </TouchableOpacity>
            </VStack>
          ) : (
            <TouchableOpacity onPress={mediaPick}>
              <Stack
                bg={"#F7F6FE"}
                w={"2/3"}
                mx={"auto"}
                minH={200}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <AntDesign name="plus" size={32} color="black" />
                <Text>Add job letter</Text>
              </Stack>
            </TouchableOpacity>
          )}
        </ScrollView>
        <Button
          _text={{ fontFamily: "Manrope_600SemiBold", fontSize: 16 }}
          _pressed={{ bg: "#f1f1f1" }}
          onPress={() => nav.navigate("LastStep" as never)}
        >
          Continue
        </Button>
      </Stack>
    </SafeAreaView>
  );
};

export default UploadLetter;
