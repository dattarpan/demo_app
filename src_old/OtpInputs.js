import React, {Component} from 'react';
import {TextInput, StyleSheet, View} from 'react-native';

export default class OtpInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      otp_inputs: [
        React.createRef(),
        React.createRef(),
        React.createRef(),
        React.createRef(),
        React.createRef(),
        React.createRef(),
      ],
      otp: [],
    };
  }

  onKeyPress = (e, index) => {
    if (e.nativeEvent.key === 'Backspace') {
      if (index !== 0) {
        let otp = this.state.otp;
        otp[index - 1] = '';
        this.setState(
          {
            otp: otp,
          },
          () => {
            this.state.otp_inputs[index - 1].focus();
          },
        );
      }
    }
  };

  render() {
    return (
      <View
        style={{
          flexDirection: 'row',
        }}>
        <TextInput
          style={{
            flex: 1,
          }}
          ref={(ref) => (this.state.otp_inputs[0] = ref)}
          maxLength={1}
          textContentType="telephoneNumber"
          focusable={true}
          onChangeText={(text) => {
            let otp = this.state.otp;
            otp[0] = text;
            this.setState(
              {
                otp: otp,
              },
              () => {
                  if (text !== '') {
                this.state.otp_inputs[1].focus();
                  }
              },
            );
          }}
          onKeyPress={(e) => this.onKeyPress(e, 0)}
          keyboardType="numeric"
        />
        <TextInput
          style={{
            flex: 1,
          }}
          ref={(ref) => (this.state.otp_inputs[1] = ref)}
          maxLength={1}
          textContentType="telephoneNumber"
          focusable={true}
          onChangeText={(text) => {
            let otp = this.state.otp;
            otp[1] = text;
            this.setState(
              {
                otp: otp,
              },
              () => {
                if (text !== '') {
                this.state.otp_inputs[2].focus();
                }
              },
            );
          }}
          onKeyPress={(e) => this.onKeyPress(e, 1)}
          keyboardType="numeric"
        />
        <TextInput
          style={{
            flex: 1,
          }}
          ref={(ref) => (this.state.otp_inputs[2] = ref)}
          maxLength={1}
          textContentType="telephoneNumber"
          focusable={true}
          onChangeText={(text) => {
            let otp = this.state.otp;
            otp[2] = text;
            this.setState(
              {
                otp: otp,
              },
              () => {
                if (text !== '') {
                this.state.otp_inputs[3].focus();
                }
              },
            );
          }}
          onKeyPress={(e) => this.onKeyPress(e, 2)}
          keyboardType="numeric"
        />
        <TextInput
          style={{
            flex: 1,
          }}
          ref={(ref) => (this.state.otp_inputs[3] = ref)}
          maxLength={1}
          textContentType="telephoneNumber"
          focusable={true}
          onChangeText={(text) => {
            let otp = this.state.otp;
            otp[3] = text;
            this.setState(
              {
                otp: otp,
              },
              () => {
                if (text !== '') {
                this.state.otp_inputs[4].focus();
                }
              },
            );
          }}
          onKeyPress={(e) => this.onKeyPress(e, 3)}
          keyboardType="numeric"
        />
        <TextInput
          style={{
            flex: 1,
          }}
          ref={(ref) => (this.state.otp_inputs[4] = ref)}
          maxLength={1}
          textContentType="telephoneNumber"
          focusable={true}
          onChangeText={(text) => {
            let otp = this.state.otp;
            otp[4] = text;
            this.setState(
              {
                otp: otp,
              },
              () => {
                if (text !== '') {
                this.state.otp_inputs[5].focus();
                }
              },
            );
          }}
          onKeyPress={(e) => this.onKeyPress(e, 4)}
          keyboardType="numeric"
        />
        <TextInput
          style={{
            flex: 1,
          }}
          ref={(ref) => (this.state.otp_inputs[5] = ref)}
          maxLength={1}
          textContentType="telephoneNumber"
          focusable={true}
          onChangeText={(text) => {
            let otp = this.state.otp;
            otp[5] = text;
            this.setState(
              {
                otp: otp,
              },
              () => {
                if (text !== '') {
                this.props.otpEnteredDone(this.state.otp);
                }
              },
            );
          }}
          onKeyPress={(e) => this.onKeyPress(e, 5)}
          keyboardType="numeric"
        />
      </View>
    );
  }
}
