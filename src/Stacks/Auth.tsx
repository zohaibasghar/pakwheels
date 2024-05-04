import { createStackNavigator } from "@react-navigation/stack";
import Login from "../Screens/Auth/Login";
import OtpVerification from "../Screens/Auth/OtpVerification";
import Signup from "../Screens/Auth/Signup";
import GetStarted from "../Screens/Auth/GetStarted";
import CreateAccount from "../Screens/Auth/CreateAccount";
import OtpVerification2 from "../Screens/Auth/OtpVerification2";
import PushNotifications from "../Screens/Auth/PushNotifications";
import Residency from "../Screens/Auth/Residency";

const Stack = createStackNavigator();
export default function Auth() {
  return (
    <Stack.Navigator
      initialRouteName="Signup"
      screenOptions={{
        headerShown: false,
        headerBackgroundContainerStyle: { backgroundColor: "#f8f8f8" },
      }}
    >
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="OtpVerification" component={OtpVerification} />
      <Stack.Screen name="OtpVerification2" component={OtpVerification2} />
      <Stack.Screen name="GetStarted" component={GetStarted} />
      <Stack.Screen name="CreateAccount" component={CreateAccount} />
      <Stack.Screen name="PushNotifications" component={PushNotifications} />
      <Stack.Screen name="Residency" component={Residency} />
    </Stack.Navigator>
  );
}
