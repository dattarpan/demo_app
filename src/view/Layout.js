import React from 'react';
import { View, ScrollView, Platform } from 'react-native';
import KeyboardSpacer from 'react-native-keyboard-spacer';

export default Layout = (props) => {
        return(
            <View style={{
                flex: 1,
                flexDirection: 'column',
            }}>
                <ScrollView 
                    showsVerticalScrollIndicator={false} 
                    keyboardShouldPersistTaps="always"
                    style={{
                        backgroundColor: 'white',
                    }}>
                    <View style={{ 
                        flex: 1,
                        backgroundColor: 'white',
                        flexDirection: 'column',
                        padding: props.padding === undefined ? 20 : props.padding,
                        marginTop: props.marginTop === undefined ? 28 : props.marginTop,
                    }}>
                        {props.children}
                    </View>
                </ScrollView>
                {Platform.OS === 'ios' ? <KeyboardSpacer /> : null}
            </View>
        );
}