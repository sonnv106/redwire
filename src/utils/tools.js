import { Text } from "react-native"

export const Colors = {
    'white': '#FFFFFF',
    'black': '#131418',
    'black2': '#272930',
    'black3': '#1a1a21',
    'grey': '#C8C8C8',
    'red': '#ff0000'

}
export const LogoText = (props)=>{
    return(
        <Text style={{
            fontFamily: "Monoton-Regular",
            fontSize: 50,
            color: '#FFFFFF',
            ...props.style
        }}>
            Redwire
        </Text>
    )
}