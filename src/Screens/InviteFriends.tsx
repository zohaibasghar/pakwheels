import { Text, Progress, Stack, Button, HStack, VStack, ScrollView } from "native-base";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomHeader from "../Components/CustomHeader";
import { Feather } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

const listData = [
  {
    initials: "AS",
    name: "Ayla Sharpe",
  },
  {
    initials: "JR",
    name: "Jaylene Rose",
  },
  {
    initials: "RC",
    name: "Regan Cantrell",
  },
  {
    initials: "PS",
    name: "Princeton Sargent",
  },
  {
    initials: "WC",
    name: "Wade Cross",
  },
];
const InviteFriends = () => {
  return (
    <SafeAreaView style={{ backgroundColor: "#fff", flex: 1 }}>
      <ScrollView>
        <CustomHeader title="Get $1,000" />
        <Stack w={"92%"} mx={"auto"} space={4} my={4}>
          <VStack space={2} mb={4}>
            <Text bold fontSize={"2xl"}>
              Get $10, Give $10.
            </Text>
            <Text color={"#616161"}>
              Earn up to $1000. Each friend you refer gets $10 when they enroll and create a
              checking account within 30 days! Details apply.
            </Text>
          </VStack>
          <VStack alignItems={"center"} space={2} mb={4}>
            <Progress value={3} _filledTrack={{ bg: "#5E41E6" }} w={"100%"} />
            <Text>$0 / $1,000 earned</Text>
          </VStack>
          <Button
            bg={"transparent"}
            rounded={"full"}
            borderWidth={1}
            borderColor={"#5E41E6"}
            py={4}
          >
            <HStack space={2}>
              <Feather name="share" size={20} color="#5E41E6" />
              <Text color={"#5E41E6"} fontWeight={600}>
                Share your link
              </Text>
            </HStack>
          </Button>
          <Text bold mt={4} fontSize={"md"}>
            Invite friends
          </Text>
          <VStack space={6}>
            {listData.map((user, index) => {
              return (
                <HStack key={index} justifyContent={"space-between"} alignItems={"center"}>
                  <HStack space={4} alignItems={"center"}>
                    <Text bg={"#f1f1f1"} p={1} rounded={"lg"} fontSize={"xs"}>
                      {user.initials}
                    </Text>
                    <Text>{user.name}</Text>
                  </HStack>
                  <TouchableOpacity
                    style={{
                      backgroundColor: "#f1f1f1",
                      borderRadius: 40,
                      paddingVertical: 4,
                      paddingHorizontal: 10,
                    }}
                  >
                    <Text>Get $10</Text>
                  </TouchableOpacity>
                </HStack>
              );
            })}
          </VStack>
        </Stack>
      </ScrollView>
    </SafeAreaView>
  );
};

export default InviteFriends;
