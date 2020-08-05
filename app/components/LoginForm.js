import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet, Image } from 'react-native';

const onButtonPress = () => {
    Alert.alert('Button has been pressed!');
};

const emailIcon = require("../assets/images/email.png");
const passIcon = require("../assets/images/password.png");

class LoginForm extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.inputGroup}>
                    <Image source={emailIcon} style={styles.ImageStyle} />
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
                </View>
                <View style={styles.inputGroup}>
                    <Image source={passIcon} style={styles.ImageStyle} />
                    <TextInput
                        style = {styles.input}
                        returnKeyType="go" 
                        ref={(input)=> this.passwordInput = input} 
                        placeholder='Password' 
                        placeholderTextColor='rgba(225,225,225,0.7)'
                        secureTextEntry
                    />
                </View>
                <TouchableOpacity 
                    style={styles.buttonContainer} 
                    onPress={() => navigation.navigate('Profile')}
                >
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
        color: '#fff',
        fontFamily: "Lato",
        width: '100%'
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
    },
    inputGroup: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: 40,
        marginBottom: 10,
        color: '#fff',
        backgroundColor: 'rgba(225,225,225,0)',
        borderBottomColor: "rgba(225,225,225, 0.5)",
        borderBottomWidth: 1,
        fontFamily: "Lato",
        width: '100%'
    },
    ImageStyle: {
        width: 28,
        resizeMode: 'contain',
        alignItems: 'center',
        marginRight: 20
    },
});

//make this component available to the app
export default LoginForm;