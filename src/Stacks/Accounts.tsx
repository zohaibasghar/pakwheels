import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../Screens/Home";
import Transactions from "../Screens/Transactions";
import MyCard from "../Screens/MyCard";
import CustomBackButton from "../Components/CustomBackButton";

const Stack = createStackNavigator();


const Accounts = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Transactions"
        component={Transactions}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MyCard"
        component={MyCard}
        options={{
          headerTitleAlign: "center",
          headerTitle: "My Card",
          headerBackImage: CustomBackButton,
          headerBackgroundContainerStyle: {
            backgroundColor: "#f8f8f8",
            alignItems: "center",
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default Accounts;

