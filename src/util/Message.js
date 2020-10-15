import { Alert } from 'react-native';

export const CANCEL = 'cancel';
export const OK = 'ok';

export const errorMsg = ({ title, message }) => {
    Alert.alert(
        title,
        message,
        [
            {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
            },
            { 
                text: "OK", 
                onPress: () => console.log("OK Pressed") 
            }
        ],
        { cancelable: false }
    );
}

export const successMsg = ({ title, message, callBack }) => {
    Alert.alert(
        title,
        message,
        [
            {
                text: "Cancel",
                onPress: () => {
                    callBack(CANCEL);
                },
                style: "cancel"
            },
            { 
                text: "OK",
                onPress: () => {
                    callBack(OK);
                },
                style: 'default'
            }
        ],
        { cancelable: false }
    );
}