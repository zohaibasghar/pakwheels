import "react-native-gesture-handler";
import Main from "./src/Main";
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider, extendTheme } from "native-base";
import React from "react";
import { StyleSheet, View } from "react-native";
import StoreProvider from "./src/redux/Store";
import { StatusBar } from "expo-status-bar";
const theme = extendTheme({
  components: {
    Input: {
      defaultProps: {
        rounded: "md",
      },
    }
  }
})
export default function App() {
  return (
    <View style={styles.container}>
      <NativeBaseProvider theme={theme}>
        <StoreProvider>
          <NavigationContainer>
            <StatusBar style="dark" />
            <Main />
          </NavigationContainer>
        </StoreProvider>
      </NativeBaseProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});