import { useRoute } from '@react-navigation/native'
import { Stack, Text, View } from 'native-base'
import React, { useState } from 'react'
import { FloatingLabelInput } from 'react-native-floating-label-input';
import { Title } from 'react-native-paper';

import { useAppDispatch } from '../../redux/Store';
import { signIn } from '../../redux/authSlice';

const OtpVerification = () => {
    const route = useRoute();
    const { phone }: any = route.params
    const [otp, setOtp] = useState('')
    const dispatch = useAppDispatch();

    function handleSubmit() {
        if (otp.length === 6) {
            dispatch(signIn())
        }
    }
    return (
        <View style={{ flex: 1, backgroundColor: "#fff" }} >
            <Stack w={'92%'} mx={'auto'} mt={12}>
                <Stack space={4} >
                    <Title style={{ fontWeight: "bold", fontSize: 28 }}>6-digit code</Title>
                    <Text fontSize={18} color={"#616161"}>Code sent to + 1784 {phone}, enter it below to continue.</Text>
                    <FloatingLabelInput label='Code' clearButtonMode='while-editing' value={otp}
                        onChangeText={(e) => setOtp(e)}
                        onBlur={handleSubmit}
                    />
                    <Text>Resend code in <Text bold>00:14</Text></Text>
                </Stack>
            </Stack>
        </View >
    )
}

export default OtpVerification