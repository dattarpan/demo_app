import React, {Component} from 'react';
import { TextInput, StyleSheet, View, Text } from 'react-native';
import OtpInput from './OtpInputs';

export default class Otp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            otp: '',
        }
    }
    render() {
        return(
            <View>
                <OtpInput otpEnteredDone={(otp_array) => {
                    let otp = '';
                    otp_array.map((value, index) => {
                        otp += value;
                    });
                    this.setState({
                        otp: otp,
                    });
                }}/>
                <Text>{this.state.otp}</Text>
            </View>
        );
    }
}