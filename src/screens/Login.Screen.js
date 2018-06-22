import React, { Component } from 'react';
import { Navigation } from "react-native-navigation";
import Spinner from 'react-native-loading-spinner-overlay';
import Video from 'react-native-video';

import {
  StyleSheet, View, Image, TouchableOpacity, ScrollView, KeyboardAvoidingView, Text, TextInput, Picker, AsyncStorage
} from 'react-native';

import Icon from "react-native-vector-icons/Ionicons";

import styles from '../components/styles.js';

import HeadingText from '../components/UI/HeadingText';
import MainText from "../components/UI/MainText";
import Button from "../components/UI/Button";
import TextFieldInput from '../components/UI/TextInputField';
import startTabs from './MainTabs'; //start tabs navigation

//import validateEmail from '../utility/validateEmail.js';
//import validatePassword from '../utility/validatePassword.js';

const apiUrl = 'https://strokeknowhow.org/api/';

class LoginScreen extends Component {

  constructor(props) {
      super(props);
      //this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);

      this.state = {
        username: '', 
        name: '', 
        email: '', 
        password: '', 
        enterButtonDisabled: false,
        error: '',
        emailError: '',
        passwordError: '',
        inLogin: true,
        loading: false,
        showSpinner: false,
        language: 'en',
      }
  }

  async componentDidMount() {
    try {
      const userData = await AsyncStorage.getItem('user');
      const language = await AsyncStorage.getItem('language');

      this.setState({ user: JSON.parse(userData) });
      this.setState({ language: language });

      //Try login
      //console.log(this.state.user);
      if(this.state.user && this.state.user.username !=='' && this.state.user.password !=='') {
        this.setState({username: this.state.user.username, password: this.state.user.password});
        this.onEMailLogin();
      }
    } catch (error) {
      console.log(error);
      alert(error);
    }
  }

  //start bottom tabs navigation 
  loggedHandler = () => {
    startTabs(); 
  }

  //EMAIL LOGIN
  onEMailLogin = () => {
    //console.log(this.state.user);
    
    if(this.state.enterButtonDisabled) return false;
    
    this.setState({showSpinner: true});
    this.setState({ error: '' });

    const { email, password } = this.state;

    //login
    try {
      const data = {insecure: 'cool', username: this.state.username, password: this.state.password};
      const url = `${apiUrl}user/generate_auth_cookie/?insecure=${encodeURIComponent(data.insecure)}&username=${encodeURIComponent(data.username)}&password=${encodeURIComponent(data.password)}`;
      return fetch(url)
      .then((response) => response.json())
      .then((loginRes) => {
        //console.log(loginRes);

        if(loginRes.status == 'error'){
          this.setState({ error: loginRes.error, loading: false });
        } else {
          let user = {
            id: loginRes.user.id,
            avatar: loginRes.user.avatar,
            displayname: loginRes.user.displayname,
            email: loginRes.user.email,
            username: loginRes.user.username,
            password: password,
          }
          
          this.setUser(user);
          this.setLanguage(this.state.language);
          this.loggedHandler();
        }
  
        this.setState({showSpinner: false});
      })
      .catch((error) => {
        console.error(error);
        this.setState({ error: 'Network error, please try again', loading: false });
        this.setState({showSpinner: false});
      });
    } catch (error) {
      console.error(error);
      this.setState({ error: 'Network error, please try again', loading: false });
    }
  }

  //Register Screen
  onRegisterScreenButton = () => {
    this.setState({inLogin: false});
  }

  //Login Screen
  goToLogin = () => {
    this.setState({inLogin: true});
  }

  //Register Button
  onRegisterButton = () => {
    this.setState({showSpinner: true});
    this.setState({ error: '' });

    //Get token
    return fetch(apiUrl + 'get_nonce/?controller=user&method=register')
    .then((response) => response.json()) 
    .then((tokenRes) => {
      //register
      return fetch(apiUrl + 'user/register/?insecure=cool&username=' + this.state.username + '&email=' + this.state.email + '&nonce=' + tokenRes.nonce + '&display_name=' + this.state.name + '&notify=both&user_pass=' + this.state.password)
      .then((response) => response.json())
      .then((registrationReg) => {
        //console.log(registrationReg);
        if(registrationReg.status != 'ok'){
          this.setState({ error: registrationReg.error, loading: false });
        } else {
          //Get User Data to login
          return fetch(apiUrl + 'user/get_userinfo/?insecure=cool&user_id=' + registrationReg.user_id)
          .then((response) => response.json())
          .then((userReg) => {
            //console.log(userReg);
            if(userReg.status != 'ok'){
              this.setState({ error: userReg.error, loading: false });
            } else {
              this.setUser(userReg);

              this.goToLogin();
            }

            this.setState({showSpinner: false});
          })
        }

        this.setState({showSpinner: false});        
      })
      .catch((error) => {
        console.error(error);
        this.setState({ error: 'Network error, please try again', loading: false });
        this.setState({showSpinner: false});
      });      
    })
    .catch((error) => {
      console.error(error);
      this.setState({ error: 'Network error, please try again', loading: false });
      this.setState({showSpinner: false});
    });
  }

  async setUser (userData) {
    try {
      const user = await AsyncStorage.setItem('user', JSON.stringify(userData));
      this.setState({user: userData});

      return user;
    } catch (error) {
      console.log(error);
    }
  }

  async setLanguage (lang) {
    try {
      const value = await AsyncStorage.setItem('language', lang);
      this.setState({language: lang});

      return value;
    } catch (error) {
      console.log(error);
    }
  }

  validateEMail = (text) => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;

    if(reg.test(text) === false) {
      //console.log("Email is Not Correct");
      this.setState({email:text, enterButtonDisabled:true, emailError: 'Wrong Email Format'});
      return false;
    } else {
      this.setState({email:text, enterButtonDisabled:false, emailError: ''});
      //console.log("Email is Correct");
    }
  }

  validatePassword = (text) => {
    //let reg = '[ \t]+$';
    let minLength = 4;
    let valid = true;
    let error = '';

    if(text === undefined) {
      return;
    }

    text = text.trim();

    if( text.length < minLength ) {
      valid = false;
      error = 'At least ' + minLength + ' characters';
    }

    this.setState({password:text, enterButtonDisabled:!valid, passwordError: error});
    return valid;
  }

  changeLanguage = (itemValue, itemIndex) => {
    //console.log(itemValue, itemIndex);

    this.setState({language: itemValue});
  }

  renderButtonOrLoading() {
    if(this.state.loading) {
        return <Text>Wait...</Text>
    }

    return <View style={styles.buttonContainer}>
        <TouchableOpacity disabled={this.state.enterButtonDisabled || this.state.username == "" || this.state.password == ""}
          style={styles.EMailLogin}
          onPress={ this.onEMailLogin } >
          <Text style={{color: 'white', fontSize: 16, fontWeight: 'bold'}}>Login</Text>
        </TouchableOpacity>
      </View>;
  }  

  //Register Screen
  renderButtonOrRegister() {
    if(this.state.loading) {
        return <Text>Wait...</Text>
    }
    return <View style={styles.buttonContainer}>
        <TouchableOpacity disabled={this.state.enterButtonDisabled}
          style={styles.EMailRegister}
          onPress={this.onRegisterScreenButton} >
          <Text style={{color: 'white', fontSize: 16, fontWeight: 'bold'}}>Register</Text>
        </TouchableOpacity>
      </View>;
  }

  //Register to wordpress
  renderButtonRegister() {
    if(this.state.loading) {
        return <Text>Wait...</Text>
    }
    return <View style={styles.buttonContainer}>
        <TouchableOpacity disabled={this.state.enterButtonDisabled || this.state.email.trim() == "" || this.state.password.trim() == ""}
          style={styles.EMailRegister}
          onPress={this.onRegisterButton} >
          <Text style={{color: 'white', fontSize: 16, fontWeight: 'bold'}}>Register</Text>
        </TouchableOpacity>
      </View>;
  }

  render() {
    if(this.state.loading) {
      return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
          <View style={styles.loginContainer}>
            <Image resizeMode="contain" style={styles.logo} source={require('../assets/logo-header.jpg')} />
          </View>
        </KeyboardAvoidingView>
      );
    }

    if(this.state.inLogin) { //LOGIN
      return (
        <ScrollView style={{padding: 20, backgroundColor: 'white'}}>
          <KeyboardAvoidingView behavior='position' style={{flex: 1}}>
            <Spinner visible={this.state.showSpinner} textContent={"Please wait..."} textStyle={{color: '#FFF'}} />
            {/*
            <View>
              <Image resizeMode="contain" style={styles.logo} source={require('../assets/banner.jpg')} />
            </View>
            */}
            <View>
              <Video
                source={require('../assets/Sequence-Intro.mp4')}
                style={{height: 200}}
                rate={1}
                paused={false}
                volume={1}
                muted={false}
                playWhenInactive={true}
                resizeMode='contain'
                repeat={true}
                />
            </View>
            {/*
            <View style={styles.buttonContainer}>
                <Image style={{width: 150, height: 150}} source={require('../assets/patty.png')} />
            </View>
            */}
            <View>
              <MainText><HeadingText>Welcome to StrokeKnowHow</HeadingText></MainText>
              <MainText>We are a worldwide stroke community learning from one another</MainText>
            </View>

            <View style={styles.containerStyle}>
              <Picker
                selectedValue={this.state.language}
                style={styles.comboStyle}
                /*onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>*/
                onValueChange={(itemValue, itemIndex) => this.changeLanguage(itemValue, itemIndex)} >
                <Picker.Item label="English" value="en" />
                <Picker.Item label="Español" value="es" />
              </Picker>
            </View>

            <TextFieldInput
              label='Username or Email Address'
              placeholder='Username'
              value={this.state.username}
              onChangeText={username => this.setState({ username })}
              autoCorrect={true}
            />
            <Text style={styles.errorText}>{this.state.emailError}</Text>

            <TextFieldInput
              label='Password'
              autoCorrect={false}
              placeholder='Shared Password'
              secureTextEntry
              value={this.state.password}
              /*onChangeText={password => this.setState({ password })}*/
              onChangeText={(password) => this.validatePassword(password)}
            />
            <Text style={styles.errorText}>{this.state.passwordError}</Text>

            <Text style={styles.errorText}>{this.state.error}</Text>

            <View style={{marginTop: 20}}>
              {this.renderButtonOrLoading()}
            </View>

            <View style={{marginTop: 20}}>
              {this.renderButtonOrRegister()}
            </View>
            
          </KeyboardAvoidingView>
        </ScrollView>
      );

    } else { //REGISTER

      return (
        <ScrollView style={{padding: 20, backgroundColor: 'white'}}>
          <KeyboardAvoidingView behavior='position' style={{flex: 1}}>

            <TouchableOpacity onPress={this.goToLogin}>
              <Icon size={40} name="md-arrow-back" color="black" />
            </TouchableOpacity>

            <Spinner visible={this.state.showSpinner} textContent={"Please wait..."} textStyle={{color: '#FFF'}} />

            <View style={styles.buttonContainer}>
              <Image resizeMode="contain" style={styles.logo} source={require('../assets/logo-header.jpg')} />
            </View>

            <TextFieldInput
              placeholder='Username'
              value={this.state.username}
              onChangeText={username => this.setState({ username })}
              autoCorrect={true}
            />

            <TextFieldInput
              label='Family name'
              placeholder='Family name'
              value={this.state.name}
              onChangeText={name => this.setState({ name })}
              autoCorrect={true}
            />

            <TextFieldInput
              label='Username'
              placeholder='Email Address'
              value={this.state.email}
              onChangeText={(email) => this.validateEMail(email)}
              autoCorrect={true}
            />
            <Text style={styles.errorText}>{this.state.emailError}</Text>

            <TextFieldInput
              label='Password'
              autoCorrect={false}
              placeholder='Shared Password'
              secureTextEntry
              value={this.state.password}
              /*onChangeText={password => this.setState({ password })}*/
              onChangeText={(password) => this.validatePassword(password)}
            />
            <Text style={styles.errorText}>{this.state.passwordError}</Text>

            <Text style={styles.errorText}>{this.state.error}</Text>

            <View style={{marginTop: 20}}>
              {this.renderButtonRegister()}
            </View>
            
            <View style={{marginTop: 20}}>
            </View>

          </KeyboardAvoidingView>
        </ScrollView>
      );

    }
  }

}


export default LoginScreen;
