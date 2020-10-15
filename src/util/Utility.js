import * as Values from './Values';

export const checkName = (name) => {
    if(Values.Attributes.name_pattern.test(name)){
        return true;
    }else{
        return false;
    }
}

export const checkPassword = (password) => {
    if(Values.Attributes.passwordd_pattern.test(password)){
        return true;
    }else{
        return false;
    }
}

export const checkEmail = (email) => {
    return Values.Attributes.email_pattern.test(String(email).toLowerCase());
}