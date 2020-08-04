import React, { Component } from 'react';
// import { StackNavigator } from 'react-navigation';
import { StyleSheet, View, Text } from 'react-native';
import Home from '../app/components/Home';

export default class App extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Home />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
