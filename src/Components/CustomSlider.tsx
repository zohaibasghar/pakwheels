import { View, Text } from "react-native";
import React from "react";
import { Image, Slider, Stack } from "native-base";

const CustomSlider = ({ handleFunc }: any) => {
  return (
    <Slider defaultValue={70} colorScheme={"black"} onChange={(e) => handleFunc(e)}>
      <Slider.Track>
        <Slider.FilledTrack bg={"black"} />
      </Slider.Track>
      <Slider.Thumb>
        <Stack bg={"black"} rounded={"md"}>
          <Image source={require("../../assets/menu.png")} alt="slider menu" p={5} />
        </Stack>
      </Slider.Thumb>
    </Slider>
  );
};

export default CustomSlider;
