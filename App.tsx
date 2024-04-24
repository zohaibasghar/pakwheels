import "react-native-gesture-handler";
import Main from "./src/Main";
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider, StatusBar } from "native-base";
import React from "react";
import { StyleSheet, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <NativeBaseProvider>
        <NavigationContainer>
          <StatusBar barStyle={"dark-content"} backgroundColor={"#f8f8f8"} />
          <Main />
        </NavigationContainer>
      </NativeBaseProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
