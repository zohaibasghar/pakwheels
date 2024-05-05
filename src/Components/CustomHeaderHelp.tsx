import React from "react";
import { Text, VStack, HStack, Container, Box } from "native-base";
import CustomBackButton from "./CustomBackButton";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const CustomHeaderHelp = ({ title, handleFunc }: { title: string; handleFunc?: () => void }) => {
  const nav = useNavigation();
  function handleFunction() {
    if (title === "Help") {
      return nav.navigate("Support" as never);
    } else {
      handleFunc && handleFunc();
    }
  }
  return (
    <Container mb={1} mt={4} mx={7}>
      <HStack alignItems={"center"} justifyContent={"space-between"} w={"110%"}>
        <Box>
          <CustomBackButton />
        </Box>
        <TouchableOpacity onPress={handleFunction}>
          <Text fontSize="md" color={"#401EE1"}>
            {title}
          </Text>
        </TouchableOpacity>
      </HStack>
    </Container>
  );
};

export default CustomHeaderHelp;
