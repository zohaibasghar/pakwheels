import React, { useState } from "react";
import { Select, Box, Text } from "native-base";

const CustomSelect = ({
  label,
  data,
  width,
}: {
  label: string;
  data: string[];
  width: string | number;
}) => {
  const [selectedValue, setSelectedValue] = useState<any>();

  return (
    <Box my={2} w={width}>
      {label && (
        <Text
          position="absolute"
          left={3}
          top={selectedValue ? 1 : 3}
          fontSize={selectedValue ? "xs" : "sm"}
          color={"#616161"}
          zIndex={-1}
        >
          {label}
        </Text>
      )}

      <Select
        selectedValue={selectedValue}
        pb={2}
        pt={6}
        borderColor={"#e0e0e0"}
        rounded={12}
        _selectedItem={{
          bg: "#5E41E6",
          borderRadius: "12",
          _text: {
            color: "white",
          },
        }}
        onValueChange={(itemValue) => {
          setSelectedValue(itemValue);
        }}
      >
        {data.map((country) => (
          <Select.Item key={country} label={country} value={country} />
        ))}
      </Select>
    </Box>
  );
};

export default CustomSelect;
