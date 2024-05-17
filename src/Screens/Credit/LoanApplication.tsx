import { ImageBackground } from "react-native";
import React from "react";
import CustomHeader from "../../Components/CustomHeader";
import {
  Avatar,
  Button,
  Center,
  HStack,
  Image,
  ScrollView,
  Stack,
  Text,
  VStack,
  View,
} from "native-base";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";

const LoanApplication = () => {
  const nav = useNavigation();
  return (
    <View flex={1} bg={"#fff"}>
      <ImageBackground
        source={require("../../../assets/plane.png")}
        borderBottomLeftRadius={40}
        borderBottomRightRadius={40}
      >
        <View my={16}>
          <CustomHeader title="" />
        </View>
        <Center>
          <Avatar
            source={require("../../../assets/Lock.png")}
            rounded={"full"}
            w={"80px"}
            h={"80px"}
            bg={"#fff"}
            p={3}
            top={8}
          />
        </Center>
      </ImageBackground>
      <ScrollView>
        <Center mt={12} mx={8}>
          <Text fontFamily={"Manrope_700Bold"} fontSize={24}>
            Apply for a personal loan
          </Text>
          <HStack my={4} space={4} mx={2}>
            <Feather name="fast-forward" size={22} color="#aaa9" style={{ marginTop: 6 }} />
            <VStack w={"98%"}>
              <Text fontFamily={"Manrope_700Bold"} fontSize={18}>
                Quick application
              </Text>
              <Text fontSize={"xs"}>
                It takes less than 5 minutes to apply – and we’ll save your details as you go along.
              </Text>
            </VStack>
          </HStack>
          <HStack my={4} space={4} mx={2}>
            <Image
              source={require("../../../assets/circle-percent.png")}
              alt="circle-percentage"
              mt={2}
            />
            <VStack>
              <Text fontFamily={"Manrope_700Bold"} fontSize={18}>
                See your chance of approval
              </Text>
              <Text fontSize={"xs"}>
                We’ll show your chances of approval alongside your offer, so you can make a quick
                decision up front.
              </Text>
            </VStack>
          </HStack>
        </Center>
      </ScrollView>
      <Stack space={2} mx={6}>
        <Text fontSize={"xs"} textAlign={"left"} mx={0} color={"#616161"}>
          By tapping "Get started" you agree to the{" "}
          <Text color={"#5E41E6"}>Island Bank's Loan Agreement</Text>
        </Text>
        <Button
          _text={{ fontFamily: "Manrope_600SemiBold", fontSize: 16 }}
          onPress={() => nav.navigate("Credit", { screen: "AmountNeeded" })}
          _pressed={{ bg: "#f1f1f1" }}
        >
          Get started
        </Button>
      </Stack>
    </View>
  );
};

export default LoanApplication;
