import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';

export default class FlexDirectionBasics extends Component {
    render() {
        return (
            // Try setting `flexDirection` to `column`.
            <View style={{
                flex: 1, flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'stretch'
            }}>
                <View style={{ height: 50, backgroundColor: 'white' }} />
                <View style={{ height: 50, backgroundColor: 'blue' }} />
                <View style={{ height: 50, backgroundColor: 'red' }} />
            </View>
        );
    }
};