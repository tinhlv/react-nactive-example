import React, { Component } from 'react';
import { 
  Image, 
  ImageBackground, 
  View, 
  KeyboardAvoidingView
} from 'react-native';
import LoginForm from './LoginForm.js';
import AppStyle from '../theme';

const backgroundImage = require("../assets/images/bg_login.png");
const logoImage = require("../assets/images/logo.png");

export default class Home extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      username: '',
      password: '',
    };
  }
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={AppStyle.StyleLogin.container}>
        <ImageBackground source={backgroundImage} style={AppStyle.StyleLogin.backgroundImage}>
          <View style={AppStyle.StyleLogin.loginContainer}>
            <Image source={logoImage} style={AppStyle.StyleLogin.logoImage}></Image>
            <LoginForm />
          </View>
        </ImageBackground>
      </KeyboardAvoidingView>
    );
  }
}