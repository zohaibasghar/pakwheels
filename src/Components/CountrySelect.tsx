import React, { useState } from "react";
import { Select, Box, Image, CheckIcon, HStack, Text } from "native-base";
import { Platform } from "react-native";
const countriesData = [
  {
    name: "St. Vincent & the Grenadines",
    code: "VC",
    flag: "https://flagpedia.net/data/flags/w580/vc.png",
  },
  {
    name: "United States",
    code: "US",
    flag: "https://flagpedia.net/data/flags/w580/us.png",
  },
  {
    name: "Canada",
    code: "CA",
    flag: "https://flagpedia.net/data/flags/w580/ca.png",
  },
  {
    name: "Brazil",
    code: "BR",
    flag: "https://flagpedia.net/data/flags/w580/br.png",
  },
  {
    name: "Germany",
    code: "DE",
    flag: "https://flagpedia.net/data/flags/w580/de.png",
  },
];

const CountrySelect = ({ label }: { label: string }) => {
  const [selectedCountry, setSelectedCountry] = useState<any>();

  const getSelectedCountry = (code: string) => {
    return countriesData.find((country) => country.code === code);
  };
  return (
    <Box my={2}>
      {label && (
        <Text
          position="absolute"
          left={3}
          top={selectedCountry ? 1 : Platform.OS === "ios" ? 3 : 5}
          fontSize={selectedCountry ? "xs" : "sm"}
          color={"#616161"}
          zIndex={-1}
        >
          {label}
        </Text>
      )}
      {selectedCountry && (
        <Image
          position={"absolute"}
          top={"22px"}
          left={3}
          source={{ uri: selectedCountry.flag }}
          alt="Country flag"
          size={"6"}
          style={{ objectFit: "contain" }}
        />
      )}
      <Select
        selectedValue={selectedCountry ? selectedCountry.code : null}
        minWidth="200"
        pl={10}
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
          setSelectedCountry(getSelectedCountry(itemValue));
        }}
      >
        {countriesData.map((country) => (
          <Select.Item key={country.code} label={country.name} value={country.code} />
        ))}
      </Select>
    </Box>
  );
};

export default CountrySelect;
