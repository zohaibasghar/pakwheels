import React from 'react'
import { HStack, Text, Menu, Pressable } from 'native-base';

import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
const CustomMenu = () => {
    return (
        <Menu w="190" bg={"#fff"} rounded={'lg'} trigger={triggerProps => {
            return <Pressable {...triggerProps}>
                <MaterialCommunityIcons name="dots-vertical" size={22} color="gray" />
            </Pressable>;
        }}>
            <Menu.Group title="New Account **2830" _title={{ fontWeight: 900 }}>
                <Menu.Item px={0}>
                    <HStack space={2}>
                        <MaterialCommunityIcons name="information-outline" size={20} color="#D4D2D2" />
                        <Text>Get account details</Text>
                    </HStack>
                </Menu.Item>
                <Menu.Item px={0}>
                    <HStack space={2}>
                        <MaterialCommunityIcons name="file-document-outline" size={20} color="#D4D2D2" />
                        <Text>Go to account</Text>
                    </HStack>
                </Menu.Item>
                <Menu.Item px={0}>
                    <HStack space={2}>
                        <AntDesign name="creditcard" size={20} color="#D4D2D2" />
                        <Text>Spend from here</Text>
                    </HStack>
                </Menu.Item>
            </Menu.Group>
        </Menu>
    )
}

export default CustomMenu