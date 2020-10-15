import * as React from 'react';
import { Text, View } from 'react-native';
import {getUser} from './util/DataStorage';

export default class Profile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {}
        }

        getUser((data)=>{
            this.setState({
                user: data,
            });
        });
    }
    render() {
        return(
            <View>
                {
                    this.state.user.id !== undefined ? <View style={{
                        justifyContent: 'center',
                        margin: 10,
                    }}>
                        <Text>Name: {this.state.user.firstname+' '+this.state.user.lastname}</Text>
                        <Text>Email: {this.state.user.email}</Text>
                        <Text>Phone number: {this.state.user.phone}</Text>
                    </View> : null
                }
            </View>
        );
    }
}