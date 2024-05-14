import { View, Text } from "react-native";
import React from "react";
import { Image, Slider, Stack } from "native-base";

const CustomSlider = ({ handleFunc, min, max, value }: any) => {
  return (
    <Slider
      defaultValue={value}
      colorScheme={"black"}
      w={"90%"}
      mx={"auto"}
      onChange={(e) => handleFunc(e)}
      minValue={min}
      maxValue={max}
    >
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
