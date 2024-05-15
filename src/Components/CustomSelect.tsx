import React, { useState } from "react";
import { Select, Box, Text } from "native-base";

const CustomSelect = ({ label, data }: { label: string; data: string[] }) => {
  const [selectedValue, setSelectedValue] = useState<any>();

  const getSelectedCountry = (code: string) => {
    return code;
  };
  return (
    <Box my={2}>
      {label && (
        <Text
          position="absolute"
          left={3}
          top={selectedValue ? 1 : 5}
          fontSize={selectedValue ? "xs" : "sm"}
          color={"#616161"}
          zIndex={-1}
        >
          {label}
        </Text>
      )}

      <Select
        selectedValue={selectedValue}
        minWidth={185}
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
          setSelectedValue(getSelectedCountry(itemValue));
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
