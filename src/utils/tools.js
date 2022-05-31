import { Text } from "react-native";
import Toast from 'react-native-toast-message';
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
export const showToast = (type, text1, text2)=>{
    switch(type){
        case 'success':
            Toast.show({
                type: 'success',
                text1,
                text2,
                position: 'bottom',
                visibilityTime: 4000,
                autoHide: true, 
                bottomOffset: 50
              });
        break;
        case 'error':
            Toast.show({
                type: 'error',
                text1,
                text2,
                position: 'bottom',
                visibilityTime: 4000,
                autoHide: true, 
                bottomOffset: 50
              });
        break;
        default: 
        null;
    }
}