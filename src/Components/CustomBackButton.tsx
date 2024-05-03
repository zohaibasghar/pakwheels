import { StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const CustomBackButton = () => {
  const nav = useNavigation();
  return (
    <TouchableOpacity style={styles.backButtonContainer} onPress={() => nav.goBack()}>
      <Ionicons name="arrow-back" size={22} color="#000" />
    </TouchableOpacity>
  );
};

export default CustomBackButton;
const styles = StyleSheet.create({
  backButtonContainer: {
    backgroundColor: "#f8f8f8",
    borderRadius: 100,
    padding: 16,
    // marginLeft: 12,
  },
});
