import { createStackNavigator } from "@react-navigation/stack";
import Login from "../Screens/Auth/Login";
import OtpVerification from "../Screens/Auth/OtpVerification";
import Signup from "../Screens/Auth/Signup";
import CustomBackButton from "../Components/CustomBackButton";

const Stack = createStackNavigator();
export default function Auth() {
    return (
        <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false, headerBackgroundContainerStyle: { backgroundColor: "#f8f8f8" } }}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="OtpVerification" component={OtpVerification} options={{ headerShown: true, headerTitle: "", headerBackImage: CustomBackButton }} />
            <Stack.Screen name="Signup" component={Signup} />
        </Stack.Navigator>
    )
}