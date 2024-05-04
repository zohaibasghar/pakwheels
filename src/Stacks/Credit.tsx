import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Overdraft from "../Screens/Credit/Overdraft";
import CreditHome from "../Screens/Credit/CreditHome";

const Stack = createStackNavigator();

const Credit = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="CreditHome">
      <Stack.Screen name="CreditHome" component={CreditHome} />
      <Stack.Screen name="Overdraft" component={Overdraft} />
    </Stack.Navigator>
  );
};

export default Credit;
