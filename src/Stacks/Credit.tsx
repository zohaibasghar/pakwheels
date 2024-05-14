import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Overdraft from "../Screens/Credit/Overdraft";
import CreditHome from "../Screens/Credit/CreditHome";
import LoanApplication from "../Screens/Credit/LoanApplication";
import AmountNeeded from "../Screens/Credit/AmountNeeded";
import SelectMonths from "../Screens/Credit/SelectMonths";
import LoanReason from "../Screens/Credit/LoanReason";
import WorkInfo from "../Screens/Credit/WorkInfo";

const Stack = createStackNavigator();

const Credit = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="CreditHome">
      <Stack.Screen name="CreditHome" component={CreditHome} />
      <Stack.Screen name="Overdraft" component={Overdraft} />
      <Stack.Screen name="LoanApplication" component={LoanApplication} />
      <Stack.Screen name="AmountNeeded" component={AmountNeeded} />
      <Stack.Screen name="SelectMonths" component={SelectMonths} />
      <Stack.Screen name="LoanReason" component={LoanReason} />
      <Stack.Screen name="WorkInfo" component={WorkInfo} />
    </Stack.Navigator>
  );
};

export default Credit;
