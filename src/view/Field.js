import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, TextInput, Image, TouchableOpacity, Text, Dimensions } from 'react-native';

export default class Field extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			secureTextEntry: this.props.secureTextEntry,
		}
	}
	render() {
		return (
			<View>
				<View style={[styles.inputWrapper, {
					borderColor: this.props.errorMsg !== undefined ? 'red' : undefined,
					borderWidth: this.props.errorMsg !== undefined ? 1 : 0,
				}, this.props.style]}>
					{this.props.source !== undefined ? <Image source={this.props.source} style={styles.inlineImg} /> : null}
					<TextInput
						style={[styles.input, { marginStart: this.props.source !== undefined ? 0 : 15 }]}
						placeholder={this.props.placeholder}
						secureTextEntry={this.state.secureTextEntry}
						autoCorrect={this.props.autoCorrect}
						autoCapitalize={this.props.autoCapitalize}
						returnKeyType={this.props.returnKeyType}
						placeholderTextColor='#b2b2b2'
						underlineColorAndroid="transparent"
						onChangeText={this.props.onChangeText}
						keyboardType={this.props.keyboardType}
						maxLength={this.props.maxLength}
						onFocus={this.props.setFocus}
						editable={this.props.setEditable}
					/>
					{this.props.secureTextEntry ? <TouchableOpacity style={{
						flex: 0.16,
					}} onPress={() => {
						var secureTextEntry = this.state.secureTextEntry;
						this.setState({
							secureTextEntry: !secureTextEntry,
						});
					}}><Image source={this.state.secureTextEntry === true ? require('../../images/password_hide_icon.png') : require('../../images/password_show_icon.png')} style={{
						flex: 1,
						height: '80%',
						width: '80%',
						resizeMode: 'contain',
						backgroundColor: 'transparent',
					}} /></TouchableOpacity> : <Image style={styles.inlineImg} />}
				</View>
				{ this.props.errorMsg !== undefined ? <Text style={{ color: 'red', fontFamily: 'Lato-Light', fontSize:  Dimensions.get('window').width * 0.03, padding: 0, margin: 0}}>{ this.props.errorMsg }</Text> : null }
			</View>
		);
	}
}

Field.propTypes = {
	source: PropTypes.number,
	placeholder: PropTypes.string.isRequired,
	secureTextEntry: PropTypes.bool,
	autoCorrect: PropTypes.bool,
	autoCapitalize: PropTypes.string,
	returnKeyType: PropTypes.string,
};

const styles = StyleSheet.create({
	inputWrapper: {
		backgroundColor: '#f2f2f2',
		width: '100%',
		aspectRatio: 7 / 1,
		borderRadius: 8,
		flexDirection: 'row',
		marginVertical: 5,
		alignContent: 'center',
		alignItems: 'center',
	},
	inlineImg: {
		flex: 0.20,
		height: '50%',
		width: '50%',
		aspectRatio: 2 / 1,
		resizeMode: 'contain',
		backgroundColor: 'transparent',
	},
	input: {
		flex: 1,
		backgroundColor: 'transparent',
	},
});