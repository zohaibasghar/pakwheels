import React from "react";
import Header from "../Components/Header";
import CurrentAccounts from "../Components/CurrentAccounts";
import HomeCards from "../Components/HomeCards";
import { ScrollView, Stack } from "native-base";
import { useAppSelector } from "../redux/Store";
import ActivityCard from "../Components/ActivityCard";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const navigation = useNavigation();
  const cardsData = [
    {
      id: 1,
      title: "Get your paycheck early",
      desc: "Finish setting up direct deposit and get paid up to two days early",
      link: "Finish setting up",
      path: require("../../assets/Send.png"),
    },
    {
      id: 2,
      title: "Grow your savings",
      desc: "Earn more on your memory so you can save for what matters",
      link: "Open Saving account",
      path: require("../../assets/Chart.png"),
      handleFunc: () => navigation.navigate("Accounts", { screen: "FlexibleSavings" }),
    },
  ];
  const { transAdd, transaction } = useAppSelector((state) => state.auth);
  return (
    <SafeAreaView style={{ backgroundColor: "#fff", flex: 1 }}>
      <ScrollView bg={"#f8f8f8"}>
        <Header />
        <CurrentAccounts />
        <Stack space={4} mb={4}>
          {transAdd && <ActivityCard details={transaction} />}
          {cardsData.map((card) => {
            return (
              <HomeCards
                key={card.id}
                title={card.title}
                desc={card.desc}
                link={card.link}
                path={card.path}
                handleFunc={card.handleFunc}
              />
            );
          })}
        </Stack>
      </ScrollView>
    </SafeAreaView>
  );
}
