import React from 'react';
import {
    StyleSheet, Text, View, TouchableOpacity, Dimensions
} from 'react-native';
import Field from './view/Field';
import mail_icon from '../images/mail.png';
import password_icon from '../images/password.png';
import Layout from './view/Layout';
import * as Msg from './util/Message';
import {isUserExist} from './util/DataStorage';

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            sign_in: 'SIGN IN',
            error_email: undefined,
            error_password: undefined,
            next_disable: true,
        }
    }

    userlogin = () => {
        let error_title = "Login failed.";
        if (this.state.sign_in === 'SIGN IN') {
            if (this.state.email !== undefined && this.state.email !== '') {
                if (this.state.password !== undefined && this.state.password !== '') {
                    this.setState({
                        sign_in: "Please wait...",
                    });
                    
                    isUserExist({
                        email: this.state.email,
                        password: this.state.password
                    }, (status, result) => {
                        if (status) {
                            this.props.navigation.navigate('App');
                        } else {
                            Msg.errorMsg({
                                title: 'Login',
                                message: 'User does not extst.'
                            });
                        }
                        this.setState({
                            sign_in: "SIGN IN",
                        });
                    });
                } else {
                    Msg.errorMsg({ title: error_title, message: "Password can't be blank." });
                }
            } else {
                Msg.errorMsg({ title: error_title, message: "Email or Phone number can't be blank." });
            }
        }
    }

    accountCreation = () => {
        this.props.navigation.navigate('CreateAccount');
    }

    checkEmail = (email) => {
        const expression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
        return expression.test(String(email).toLowerCase());
    }

    checkPassword = (password) => {
        let pattern = /^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/;
        if(pattern.test(password)){
            return true;
        }else{
            return false;
        }
    }

    checkOnlyNumber = (input) => {
        var reg = /^\d+$/;
        if(reg.test(input)){
            return true;
        }else{
            return false;
        }
    }

    isValidEmailOrPhone = () => {
        if (this.state.email === undefined || this.state.email === '') {
            error = { title: "Registration failed.", message: "Email can't be blank." };
            this.setState({
                error_email: error.message,
            });
            return false;
        } else if ( this.checkOnlyNumber(this.state.email) && this.state.email.length < 10) {
            error = { title: "Registration failed.", message: "Phone should have 10 or more digits." };
            this.setState({
                error_email: error.message,
            });
            return false;
        } else if ( !this.checkOnlyNumber(this.state.email) && !this.checkEmail(this.state.email)) {
            error = { title: "Registration failed.", message: "Enter a valid email id." };
            this.setState({
                error_email: error.message,
            });
            return false;
        }
        this.setState({
            error_email: undefined,
        });
        return true;
    }

    isValidPassword = () => {
        if (this.state.password === undefined || this.state.password === '') {
            error = { title: "Registration failed.", message: "Password can't be blank." };
            this.setState({
                error_password: error.message,
            });
            return false;
        } else if (!this.checkPassword(this.state.password)) {
            error = { title: "Registration failed.", message: "Password Must be \n" +
            "1. At least 8 characters \n" +
            "2. At least 1 number, 1 lowercase, 1 uppercase letter \n" +
            "3. At least 1 special character from @#$%&" };
            this.setState({
                error_password: error.message,
            });
            return false;
        }
        this.setState({
            error_password: undefined,
        });
        return true;
    }

    isFromValid = () => {
        if (this.state.email === undefined || this.state.email === '') {
            error = { title: "Registration failed.", message: "Email can't be blank." };
            this.setState({
                next_disable: true,
            });
            return false;
        } else if ( this.checkOnlyNumber(this.state.email) && this.state.email.length < 10) {
            error = { title: "Registration failed.", message: "Phone should have 10 or more digits." };
            this.setState({
                next_disable: true,
            });
            return false;
        } else if ( !this.checkOnlyNumber(this.state.email) && !this.checkEmail(this.state.email)) {
            error = { title: "Registration failed.", message: "Enter a valid email id." };
            this.setState({
                next_disable: true,
            });
            return false;
        } else if (this.state.password === undefined || this.state.password === '') {
            error = { title: "Registration failed.", message: "Password can't be blank." };
            this.setState({
                next_disable: true,
            });
            return false;
        } else if (!this.checkPassword(this.state.password)) {
            error = { title: "Registration failed.", message: "Password Must be \n" +
            "1. At least 8 characters \n" +
            "2. At least 1 number, 1 lowercase, 1 uppercase letter \n" +
            "3. At least 1 special character from @#$%&" };
            this.setState({
                next_disable: true,
            });
            return false;
        }
        this.setState({
            next_disable: false,
        });
        return true;
    }

    render() {
        return (
            <Layout>
                
                <Text style={{ color: '#5a5a5a', fontFamily: 'Lato-Regular', fontSize: Dimensions.get('window').width * 0.05, marginBottom: 5 }}>Login</Text>
                <View style={{ backgroundColor: '#A2A2A2', height: 1, width: '100%' ,marginBottom: 4 }} />

                <View style={{
                    marginTop: 20
                }}>
                    <Field source={mail_icon}
                        placeholder="Email or Phone number"
                        placeholderTextColor='#b2b2b2'
                        autoCapitalize={'none'}
                        returnKeyType={'done'}
                        autoCorrect={false}
                        keyboardType='email-address'
                        onChangeText={(text) => {
                            this.state.email = text;
                            this.isFromValid();
                            this.isValidEmailOrPhone();
                        }}
                        errorMsg={this.state.error_email}
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
                            this.state.password = text;
                            this.isFromValid();
                            this.isValidPassword();
                        }}
                        errorMsg={this.state.error_password}
                    />
                </View>

                <View>
                    <TouchableOpacity style={[styles.buttonContainer, {
                        backgroundColor: this.state.next_disable ? '#00a2ff50' : '#00a2ff'
                    }]} disabled={this.state.next_disable} onPress={this.userlogin}>
                        <Text style={styles.buttonText}>{this.state.sign_in}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', marginTop: 5 }} onPress={() => {
                        this.props.navigation.navigate('ForgotPassword');
                    }}>
                        <Text style={styles.ForgotPassword}>FORGOT YOUR PASSWORD?</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttonContainerTwo} onPress={this.accountCreation}>
                        <Text style={styles.buttonText}>CREATE NEW ACCOUNT</Text>
                    </TouchableOpacity>
                </View>
            </Layout>
        )
    }
}

const DEVICE_WIDTH = Dimensions.get('window').width;
console.log("Login", DEVICE_WIDTH * 0.04);
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
        backgroundColor: '#00a2ff',
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