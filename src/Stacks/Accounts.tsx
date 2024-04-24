import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../Screens/Home";
import Transactions from "../Screens/Transactions";
import MyCard from "../Screens/MyCard";
import { View } from "native-base";
import { StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Stack = createStackNavigator();

const CustomBackButton = () => (
  <View style={styles.backButtonContainer}>
    <Ionicons name="arrow-back" size={24} color="#000" />
  </View>
);

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

const styles = StyleSheet.create({
  backButtonContainer: {
    backgroundColor: "#e1e1e1",
    borderRadius: 100,
    padding: 8,
  },
});
