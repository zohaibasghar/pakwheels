import { ImageBackground } from "react-native";
import React from "react";
import CustomHeader from "../../Components/CustomHeader";
import {
  Avatar,
  Button,
  Center,
  HStack,
  ScrollView,
  Stack,
  Switch,
  Text,
  VStack,
  View,
} from "native-base";

const Overdraft = () => {
  return (
    <View flex={1} bg={"#fff"}>
      <ScrollView>
        <ImageBackground
          source={require("../../../assets/overdraft_bg.jpeg")}
          borderBottomLeftRadius={40}
          borderBottomRightRadius={40}
        >
          <View my={16}>
            <CustomHeader title="" />
          </View>
          <Center>
            <Avatar
              source={require("../../../assets/Shield.png")}
              rounded={"full"}
              w={"80px"}
              h={"80px"}
              bg={"#fff"}
              p={3}
              top={8}
            />
          </Center>
        </ImageBackground>
        <Center mt={12} mx={8}>
          <Text bold fontSize={"2xl"}>
            Turn on Overdrafts
          </Text>
          <Text textAlign={"center"} color={"#2b2b2b"}>
            Receive a $250+ qualifying direct deposit of Overdrafts with low fees! Your Overdraft
            base starts at $20 and can increase up to $250 base on your account activity and
            history.
          </Text>
          <HStack alignItems={"center"} my={4}>
            <VStack w={"75%"}>
              <Text fontSize={"xl"} bold>
                Overdarft Alerts
              </Text>
              <Text color={"#3e3e3e"} fontSize={"xs"}>
                A text alert we send to let you know that you may go into an arranged overdraft
              </Text>
            </VStack>
            <View w={"25%"}>
              <Switch
                offTrackColor="#e6e6e6"
                onTrackColor="#24AD3B"
                onThumbColor="white"
                offThumbColor="white"
                size={"lg"}
              />
            </View>
          </HStack>
          <HStack alignItems={"center"} my={4} mb={16}>
            <VStack w={"75%"}>
              <Text fontSize={"xl"} bold>
                Transfer when i get paid
              </Text>
              <Text color={"#3e3e3e"} fontSize={"xs"}>
                Automatically transfer from your direct deposit to clear off Overdraft balance
              </Text>
            </VStack>
            <View w={"25%"}>
              <Switch
                offTrackColor="#e6e6e6"
                onTrackColor="#24AD3B"
                onThumbColor="white"
                offThumbColor="white"
                size={"lg"}
              />
            </View>
          </HStack>
        </Center>
      </ScrollView>
      <Stack space={2} mx={8}>
        <Text fontSize={"xs"} textAlign={"left"} mx={0} color={"#616161"}>
          By tapping "Turn on" you agree to the{" "}
          <Text color={"#5E41E6"}>Island Bank's Overdraft Account Agreement</Text>
        </Text>
        <Button w={"100%"} rounded={"full"} _pressed={{ bg: "#f1f1f1" }}>
          Turn on
        </Button>
      </Stack>
    </View>
  );
};

export default Overdraft;
