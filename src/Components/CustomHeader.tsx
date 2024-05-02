import React from 'react';
import { Text, VStack, Center } from 'native-base'; // NativeBase for styling

// Custom Header with Title and Subtitle
const CustomHeader = ({ title, subtitle }: { title: string, subtitle: string }) => {
    return (
        <Center>
            <VStack alignItems="center">
                <Text fontSize="lg" fontWeight="bold">{title}</Text>
                <Text fontSize="sm" color="gray.500">{subtitle}</Text>
            </VStack>
        </Center>
    );
};

export default CustomHeader;
