import React from "react";
import Header from "../Components/Header";
import CurrentAccounts from "../Components/CurrentAccounts";
import HomeCards from "../Components/HomeCards";
import { ScrollView, Stack } from "native-base";
import ActivityCard from "../Components/ActivityCard";
import Send from "../../assets/Send.png";
import Chart from "../../assets/Chart.png";

export default function Transactions() {
  return (
    <ScrollView bgColor={"#f8f8f8"}>
      <Header />
      <CurrentAccounts />
      <Stack space={4} mb={4}>
        <ActivityCard />
        <HomeCards
          title={"Get your paycheck early"}
          desc={"Finish setting up direct deposit and get paid up to two days early"}
          link={"Finish setting up"}
          path={Send}
          image={"arrow-circle-right"}
        />
        <HomeCards
          title={"Grow your savings"}
          desc={"Earn more on your memory so you can save for what matters"}
          link={"Open Saving account"}
          path={Chart}
          image={"chart-bar"}
        />
      </Stack>
    </ScrollView>
  );
}
