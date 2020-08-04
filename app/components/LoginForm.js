import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';

const onButtonPress = () => {
    Alert.alert('Button has been pressed!');
};

class LoginForm extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TextInput 
                    style = {styles.input} 
                    autoCapitalize="none" 
                    onSubmitEditing={() => this.passwordInput.focus()} 
                    autoCorrect={false} 
                    keyboardType='email-address' 
                    returnKeyType="next" 
                    placeholder='Email Adress' 
                    placeholderTextColor='rgba(225,225,225,0.7)'
                />
                <TextInput 
                    style = {styles.input}
                    returnKeyType="go" 
                    ref={(input)=> this.passwordInput = input} 
                    placeholder='Password' 
                    placeholderTextColor='rgba(225,225,225,0.7)' 
                    secureTextEntry
                />
                <TouchableOpacity 
                    style={styles.buttonContainer} 
                    onPress={onButtonPress}>
                    <Text  style={styles.buttonText}>LOGIN</Text>
                </TouchableOpacity> 
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
     padding: 20,
     width: "100%"
    },
    input:{
        height: 40,
        backgroundColor: 'rgba(225,225,225,0)',
        marginBottom: 10,
        padding: 10,
        color: '#fff',
        borderBottomColor: "rgba(225,225,225, 0.5)",
        borderBottomWidth: 1,
        fontFamily: "Lato"
    },
    buttonContainer:{
        backgroundColor: '#f57365',
        paddingVertical: 15,
        marginTop: 49
    },
    buttonText:{
        color: '#fff',
        textAlign: 'center',
        fontWeight: '700'
    }
});

//make this component available to the app
export default LoginForm;