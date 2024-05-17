import React from "react";
import { Text, VStack, HStack, Container, Box } from "native-base";
import { StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const CustomActionHeader = ({
  title,
  handleFunc,
  handleClose,
}: {
  title: string;
  handleFunc?: () => void;
  handleClose?: () => void;
}) => {
  return (
    <Container mb={1} mt={4}>
      <HStack alignItems={"center"} justifyContent={"space-between"} w={"110%"}>
        <Box>
          <TouchableOpacity style={styles.backButtonContainer} onPress={handleClose}>
            <AntDesign name="close" size={24} color="black" />
          </TouchableOpacity>
        </Box>
        <TouchableOpacity onPress={handleFunc}>
          <Text fontSize="md" color={"#401EE1"} left={8} fontFamily={"Manrope_600SemiBold"}>
            {title}
          </Text>
        </TouchableOpacity>
      </HStack>
    </Container>
  );
};

export default CustomActionHeader;
const styles = StyleSheet.create({
  backButtonContainer: {
    backgroundColor: "#f8f8f8",
    borderRadius: 100,
    padding: 16,
  },
});
