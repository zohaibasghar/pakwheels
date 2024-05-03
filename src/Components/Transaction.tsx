// TransactionList.js
import React from 'react';
import { Flex, Image, List, Stack, Text } from 'native-base';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const TransactionList = ({ transaction }: any) => {
    const nav = useNavigation()
    return (
        <TouchableOpacity onPress={() => nav.navigate("TransactionDetail" as never, { transaction })}>
            <Flex align="center" direction="row" justify="space-between" mt={4}>
                <Stack direction={"row"} alignItems={"center"} space={2}>
                    <Image
                        source={transaction.image}
                        alt="Other Bank"
                    />
                    <Stack>
                        <Text fontSize={"md"} bold>
                            {transaction.bankName} {transaction.recipient}
                        </Text>
                        <Text fontSize={"xs"}>{transaction.type} • {transaction.time}</Text>
                    </Stack>
                </Stack>
                <Stack alignItems={"flex-end"}>
                    <Text bold color={transaction.type === "Deposit" ? "green.500" : "black"}>{transaction.type === "Deposit" && "+"} ${transaction.amount}</Text>
                    <Text fontSize={"xs"} color={'#7B7B7B'}>${transaction.amount}</Text>
                </Stack>
            </Flex>
        </TouchableOpacity>

    );
};

export default TransactionList;
