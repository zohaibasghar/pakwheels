import { Text, View } from "native-base";
import React from "react";
import { TouchableOpacity } from "react-native";

const Button = ({
  text,
  bgColor,
  handleFunc,
  disability,
  btnColor,
}: {
  text: string;
  bgColor?: string;
  handleFunc: () => void;
  disability?: boolean;
  btnColor?: string;
}) => {
  return (
    <View mx={"auto"}>
      <TouchableOpacity
        disabled={disability}
        onPress={handleFunc}
        style={{
          backgroundColor: bgColor,
          marginVertical: 12,
          paddingVertical: 16,
          paddingHorizontal: "41%",
          borderRadius: 40,
        }}
      >
        <Text
          color={btnColor ? btnColor : "black"}
          fontSize={16}
          fontFamily={"Manrope_600SemiBold"}
        >
          {text}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;
