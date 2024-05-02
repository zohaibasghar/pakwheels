import { Text } from 'native-base'
import React from 'react'
import { TouchableOpacity } from 'react-native'

const Button = ({ text, bgColor, handleFunc, disability, btnColor }: { text: string, bgColor?: string, handleFunc: () => void, disability: boolean, btnColor?: string }) => {
    return (
        <TouchableOpacity
            disabled={disability}
            onPress={handleFunc}
            style={{ backgroundColor: bgColor, marginVertical: 12, paddingVertical: 12, paddingHorizontal: 145, borderRadius: 40 }}>
            <Text color={btnColor ? btnColor : "black"} >{text}</Text>
        </TouchableOpacity>
    )
}

export default Button