import AsyncStorage from '@react-native-community/async-storage';

export const saveUser = async (user, callBack) => {
    await AsyncStorage.setItem('user', JSON.stringify(user), (e) => {
        console.log("setUserData", user);
        callBack();
    });
}

export const getUser = async (callBack) => {
    let userData = await AsyncStorage.getItem('user');
    if (userData !== null && userData !== '') {
        callBack(JSON.parse(userData));
    } else {
        callBack(undefined);
    }
}

export const isUserExist = async (data, callBack) => {
    let userData = await AsyncStorage.getItem('user');
    console.log("user", userData, data);
    if (userData !== null && userData !== '') {
        console.log("user", userData, data, '1');
        userData = JSON.parse(userData);
        if (userData.email == data.email && userData.password == data.password) {
            console.log("user", userData, data, '2');
            callBack(true,userData);
        } else if (userData.phone == data.email && userData.password == data.password) {
            console.log("user", userData, data, '3');
            callBack(true, userData);
        } else {
            console.log("user", userData, data, '4');
            callBack(false, undefined);
        }
    } else {
        callBack(false, undefined);
    }
}