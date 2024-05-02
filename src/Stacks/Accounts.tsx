import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../Screens/Home";
import Transactions from "../Screens/Transactions";
import MyCard from "../Screens/MyCard";
import CustomBackButton from "../Components/CustomBackButton";
import TransactionDetail from "../Screens/TransactionDetail";
import CustomHeader from "../Components/CustomHeader";

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
        options={{ headerTitle: "All Activity", headerTitleAlign: "center", headerBackImage: CustomBackButton }}
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
      <Stack.Screen name="TransactionDetail" component={TransactionDetail} options={{
        headerTitle: () => <CustomHeader title="Purchase" subtitle="11:47 AM &#8226; 1 April 2024 " />,
        headerTitleAlign: "center",
        headerBackImage: CustomBackButton
      }} />
    </Stack.Navigator>
  );
};

export default Accounts;

