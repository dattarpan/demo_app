import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import Field from './view/Field';
import mail_icon from '../images/mail.png';
import password_icon from '../images/password.png';
import user_icon from '../images/user-icon.png';
import phone from '../images/telephone.png';
import * as Msg from './util/Message';
import Layout from './view/Layout';
import * as Values from './util/Values';
import * as Utility from './util/Utility';
import {saveUser, isUserExist} from './util/DataStorage';

export default class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            f_name: '',
            l_name: '',
            email: '',
            phone: '',
            password: '',
            confirm_password: '',
            error_f_name: undefined,
            error_l_name: undefined,
            error_email: undefined,
            error_phone: undefined,
            error_password: undefined,
            error_confirm_password: undefined,
            sign_in: 'SUBMIT',
            next_disable: true,
            focus: undefined,
            confirm_password_editable: false,
        }
    }

    userSignup = () => {
        if (this.state.sign_in === 'SUBMIT') {
            if (this.isFromValid(true)) {
                const data = {
                    "id": 0,
                    "firstname": this.state.f_name.trim(),
                    "lastname": this.state.l_name.trim(),
                    "email": this.state.email.trim(),
                    "password": this.state.password.trim(),
                    "phone": this.state.phone.trim()
                }

                this.setState({
                    sign_in: 'Please wait...'
                });

                saveUser(data, () => {
                    this.setState({
                        sign_in: 'SUBMIT'
                    }); 
                });
            }
        }
    }

    isActivateNextButton = () => {
        if (this.isFromValid(false)) {
            this.setState({
                next_disable: false,
            });
        }
    }

    isFromValid = (is_alert) => {
        let error = undefined;
        if ( this.state.f_name === undefined || this.state.f_name === '') {
            console.log('isFromValid',Utility.checkName(this.state.f_name));
            error = { title: Values.Strings.registration_error_title, message: Values.Strings.first_name_blank_error };
            return false;
        } else if (!Utility.checkName(this.state.f_name)) {
            error = { title: Values.Strings.registration_error_title, message: Values.Strings.first_name_invalid_error };
            return false;
        } else if (this.state.l_name === undefined || this.state.l_name === '') {
            error = { title: Values.Strings.registration_error_title, message: Values.Strings.last_name_blank_error };
            return false;
        } else if (!Utility.checkName(this.state.l_name)) {
            error = { title: Values.Strings.registration_error_title, message: Values.Strings.last_name_invalid_error };
            return false;
        } else if (this.state.email === undefined || this.state.email === '') {
            error = { title: Values.Strings.registration_error_title, message: Values.Strings.email_blank_error };
            return false;
        } else if (!Utility.checkEmail(this.state.email)) {
            error = { title: Values.Strings.registration_error_title, message: Values.Strings.email_invalid_error };
            return false;
        } else if (this.state.phone === undefined || this.state.phone === '') {
            error = { title: Values.Strings.registration_error_title, message: Values.Strings.phone_no_blank_error };
            return false;
        } else if (this.state.phone.length < 10) {
            error = { title: Values.Strings.registration_error_title, message: Values.Strings.phone_number_invalid_error };
            return false;
        } else if (this.state.password === undefined || this.state.password === '') {
            error = { title: Values.Strings.registration_error_title, message: Values.Strings.password_blank_error };
            return false;
        } else if (!Utility.checkPassword(this.state.password)) {
            error = { title: Values.Strings.registration_error_title, message: Values.Strings.password_invalid_error };
            return false;
        } else if (this.state.confirm_password === undefined || this.state.confirm_password === '') {
            error = { title: Values.Strings.registration_error_title, message: Values.Strings.confirm_password_blank_error };
            return false;
        } else if (this.state.password !== this.state.confirm_password) {
            error = { title: Values.Strings.registration_error_title, message: Values.Strings.password_and_confirm_password_not_match_error };
            return false;
        }

        if (is_alert && error !== undefined) {
            Msg.errorMsg(error);
        }

        return true;
    }

    open_sign_in = () => {
        this.props.navigation.goBack();
    }

    isValidFirstName = () => {
        if ( this.state.f_name === undefined || this.state.f_name === '') {
            this.setState({
                error_f_name: Values.Strings.first_name_blank_error,
            });
            return false;
        } else if (!Utility.checkName(this.state.f_name)) {
            this.setState({
                error_f_name: Values.Strings.first_name_invalid_error,
            });
            return false;
        }
        this.setState({
            error_f_name: undefined,
        });
        return true;
    }

    isValidLastName = () => {
        if (this.state.l_name === undefined || this.state.l_name === '') {
            this.setState({
                error_l_name: Values.Strings.last_name_blank_error,
            });
            return false;
        } else if (!Utility.checkName(this.state.l_name)) {
            this.setState({
                error_l_name: Values.Strings.last_name_invalid_error,
            });
            return false;
        }
        this.setState({
            error_l_name: undefined,
        });
        return true;
    }

    isValidEmail = () => {
        if (this.state.email === undefined || this.state.email === '') {
            this.setState({
                error_email: Values.Strings.email_blank_error,
            });
            return false;
        } else if (!Utility.checkEmail(this.state.email)) {
            this.setState({
                error_email: Values.Strings.email_invalid_error,
            });
            return false;
        }
        this.setState({
            error_email: undefined,
        });
        return true;
    }

    isValidPhone = () => {
        if (this.state.phone === undefined || this.state.phone === '') {
            this.setState({
                error_phone: Values.Strings.phone_no_blank_error,
            });
            return false;
        } else if (this.state.phone.length < 10) {
            this.setState({
                error_phone: Values.Strings.phone_number_invalid_error,
            });
            return false;
        }
        this.setState({
            error_phone: undefined,
        });
        return true;
    }

    isValidPassword = () => {
        if (this.state.password === undefined || this.state.password === '') {
            this.setState({
                error_password: Values.Strings.password_blank_error,
                confirm_password_editable: false,
            });
            return false;
        } else if (!Utility.checkPassword(this.state.password)) {
            this.setState({
                error_password: Values.Strings.password_invalid_error,
                confirm_password_editable: false,
            });
            return false;
        }
        this.setState({
            error_password: undefined,
            confirm_password_editable: true,
        });
        return true;
    }

    isValidConfirmPassword = () => {
        if (this.state.confirm_password === undefined || this.state.confirm_password === '') {
            this.setState({
                error_confirm_password: Values.Strings.confirm_password_blank_error,
            });
            return false;
        } else if (this.state.password !== this.state.confirm_password) {
            this.setState({
                error_confirm_password: Values.Strings.password_and_confirm_password_not_match_error,
            });
            return false;
        }
        this.setState({
            error_confirm_password: undefined,
        });
        return true;
    }

    render() {
        return (
            <Layout>
                <Text style={{ color: '#5a5a5a', fontFamily: 'Lato-Regular', fontSize: Dimensions.get('window').width * 0.05, marginBottom: 5 }}>Create New Account</Text>
                <View style={{ backgroundColor: '#A2A2A2', height: 1,width: '100%' ,marginBottom: 4 }} />
                
                <View style={{
                    marginTop: 20,
                }}>
                    <Field source={user_icon}
                        placeholder="First Name"
                        placeholderTextColor='#b2b2b2'
                        autoCapitalize={'words'}
                        returnKeyType={'done'}
                        autoCorrect={false}
                        keyboardType='default'
                        onChangeText={(text) => {
                            this.state.f_name = text.trim();
                            this.isActivateNextButton();
                            this.isValidFirstName();
                        }}
                        maxLength={20}
                        errorMsg={this.state.error_f_name}
                        setFocus={(e)=>{
                            this.state.focus = "f_name";
                        }}
                    />
                    <Field source={user_icon}
                        placeholder="Last Name"
                        placeholderTextColor='#b2b2b2'
                        autoCapitalize={'words'}
                        returnKeyType={'done'}
                        autoCorrect={false}
                        keyboardType='default'
                        onChangeText={(text) => {
                            this.state.l_name = text.trim();
                            this.isActivateNextButton();
                            this.isValidLastName();
                        }}
                        maxLength={20}
                        errorMsg={this.state.error_l_name}
                        setFocus={(e)=>{
                            this.state.focus = "l_name";
                        }}
                    />
                    <Field source={mail_icon}
                        placeholder="Email"
                        placeholderTextColor='#b2b2b2'
                        autoCapitalize={'none'}
                        returnKeyType={'done'}
                        autoCorrect={false}
                        keyboardType='email-address'
                        onChangeText={(text) => {
                            this.state.email = text.trim();
                            this.isActivateNextButton();
                            this.isValidEmail();
                        }}
                        errorMsg={this.state.error_email}
                        setFocus={(e)=>{
                            this.state.focus = "email";
                        }}
                    />
                    <Field source={phone}
                        placeholder="Phone number"
                        placeholderTextColor='#b2b2b2'
                        autoCapitalize={'none'}
                        returnKeyType={'done'}
                        autoCorrect={false}
                        keyboardType='phone-pad'
                        onChangeText={(text) => {
                            this.state.phone = text.trim();
                            this.isActivateNextButton();
                            this.isValidPhone();
                        }}
                        errorMsg={this.state.error_phone}
                        setFocus={(e)=>{
                            this.state.focus = "phone";
                        }}
                    />
                    <Field
                        source={password_icon}
                        placeholder="Password"
                        placeholderTextColor='#b2b2b2'
                        autoCapitalize={'none'}
                        returnKeyType={'done'}
                        autoCorrect={false}
                        returnKeyType='go'
                        secureTextEntry
                        autoCorrect={false}
                        onChangeText={(text) => {
                            this.state.password = text.trim();
                            this.isActivateNextButton();
                            this.isValidPassword();
                        }}
                        errorMsg={this.state.error_password}
                        setFocus={(e)=>{
                            this.state.focus = "password";
                        }}
                    />
                    <Field
                        source={password_icon}
                        placeholder="Confirm password"
                        placeholderTextColor='#b2b2b2'
                        autoCapitalize={'none'}
                        returnKeyType={'done'}
                        autoCorrect={false}
                        returnKeyType='go'
                        secureTextEntry
                        autoCorrect={false}
                        onChangeText={(text) => {
                            this.state.confirm_password = text.trim();
                            this.isActivateNextButton();
                            this.isValidConfirmPassword();
                        }}
                        errorMsg={this.state.error_confirm_password}
                        setFocus={(e)=>{
                            this.state.focus = "confirm_password";
                        }}
                        setEditable={this.state.confirm_password_editable}
                    />
                </View>

                <View>
                    <TouchableOpacity style={[styles.buttonContainer, {
                        backgroundColor: this.state.next_disable ? '#00a2ff50' : '#00a2ff'
                    }]} disabled={this.state.next_disable} onPress={this.userSignup}>
                        <Text style={styles.buttonText}>{this.state.sign_in}</Text>
                    </TouchableOpacity>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 5, marginBottom: 10 }}>
                        <Text style={styles.textNoLink}>Already have an account?</Text>
                        <TouchableOpacity onPress={this.open_sign_in}>
                            <Text style={styles.ForgotPassword}> Login.</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Layout>
        )
    }
}

const DEVICE_WIDTH = Dimensions.get('window').width;
const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'white',
        flexDirection: 'column',
        padding: 20,
        marginTop: 28
    },

    LogoView: {
        justifyContent: 'center',
        alignContent: 'center',
        flex: 1
    },
    LogoImage: {
        height: 150,
        width: 120,
    },
    LoginStaticData: {

    },
    hairline: {
        backgroundColor: '#C1C1C1',
        height: 2,
        width: 165
    },
    infoConatiner: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: 230,
        padding: 20,
    },
    buttonContainer: {
        paddingVertical: 15,
        marginBottom: 10,
        borderRadius: 8,
        marginTop: 30,
    },
    buttonText: {
        textAlign: 'center',
        alignItems: "center",
        color: '#fff',
        fontWeight: 'bold',
        fontSize: DEVICE_WIDTH * 0.035,
        fontFamily: 'Lato-Black'
    },
    textNoLink: {
        fontFamily: 'Lato-Regular',
        fontSize: DEVICE_WIDTH * 0.030,
    },
    ForgotPassword: {
        fontFamily: 'Lato-Regular',
        fontSize: DEVICE_WIDTH * 0.030,
        textDecorationLine: 'underline',
        color: '#a32bb1'
    },
    buttonContainerTwo: {
        backgroundColor: '#0a1115',
        paddingVertical: 15,
        marginBottom: 10,
        borderRadius: 8,
        marginTop: 15,
    },
    error_text: {
        color: '#FF0',
        padding: 1
    }

});