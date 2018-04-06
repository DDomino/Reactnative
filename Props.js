
import React from 'react';
import { Text, View, Platform, TouchableOpacity, StyleSheet, Button, WebView } from 'react-native';




//Todo: Refactor into a seperate file (Props.js), import and complete the exercise
export default class Props extends React.Component {
    static navigationOptions = { title: "Learn about Props" }
    render() {
        return (
            <View>
                <Text>Props</Text>
            </View>
        )
    }
}