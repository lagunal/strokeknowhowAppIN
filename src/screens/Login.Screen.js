import React, { Component } from 'react';
import { Navigation } from "react-native-navigation";
import Spinner from 'react-native-loading-spinner-overlay';
import Video from 'react-native-video';

import {
  StyleSheet, View, Image, TouchableOpacity, ScrollView, KeyboardAvoidingView, Text, Icon, TextInput, AsyncStorage
} from 'react-native';

import styles from '../components/styles.js';

import HeadingText from '../components/UI/HeadingText';
import MainText from "../components/UI/MainText";
import Button from "../components/UI/Button";
import TextFieldInput from '../components/UI/TextInputField.js';
import startTabs from './MainTabs'; //start tabs navigation

//import validateEmail from "../utility/validateEmail";
//import validatePassword from "../utility/validatePassword";

class LoginScreen extends Component {

  constructor(props) {
      super(props);
      //this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);

      this.state = {
        username: '', 
        name: '', 
        email: '', 
        password:  '', 
        enterButtonDisabled: false,
        user: null,
        error: '',
        emailError: '',
        passwordError: '',
        inLogin: true,
        loading: false,
        showSpinner: false,
        url: 'https://strokeknowhow.org/api/',
      }
  }

  async componentDidMount() {
    try {
      const userData = await AsyncStorage.getItem('user');

      this.setState({ user: JSON.parse(userData) });
      console.log(this.state.user);
    } catch (error) {
      console.log(error);
      alert(error);
    }
  }

  //start bottom tabs navigation 
  loggedHandler = () => {
    startTabs(); 
  }

  //Email Validation///////////// ***************put in utility folder
  validateEMail = (text) => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;

    if(reg.test(text) === false) {
      this.setState({email:text, enterButtonDisabled:true, emailError: 'Wrong Email Format'});
      return false;
    } else {
      this.setState({email:text, enterButtonDisabled:false, emailError: ''});
    }
  }

    //Password Validation///////////// ***************put in utility folder
  validatePassword = (text) => {
      let minLength = 4;
      let valid = true;
      let error = '';

      text = text.trim();

      if( text.length < minLength ){
        valid = false;
        error = 'At least ' + minLength + ' characters';
      }
      this.setState({password:text, enterButtonDisabled:!valid, passwordError: error});
      return valid;
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
      const url = this.state.url + 'user/generate_auth_cookie/?insecure=cool&username=' + this.state.username + '&password=' + this.state.password;
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
          }
          
          this.setUser(user);
          this.setState({showSpinner: false});
          this.loggedHandler();
        }
  
        //this.setState({showSpinner: false});
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

  //Register Button
  onRegisterButton = () => {
    this.setState({showSpinner: true});
    this.setState({ error: '' });

    //Get token
    return fetch(this.state.url + 'get_nonce/?controller=user&method=register')
    .then((response) => response.json()) 
    .then((tokenRes) => {
      //register
      return fetch(this.state.url + 'user/register/?insecure=cool&username=' + this.state.username + '&email=' + this.state.email + '&nonce=' + tokenRes.nonce + '&display_name=' + this.state.name + '&notify=both&user_pass=' + this.state.password)
      .then((response) => response.json())
      .then((registrationReg) => {
        //console.log(registrationReg);
        if(registrationReg.status != 'ok'){
          this.setState({ error: registrationReg.error, loading: false });
        } else {
          //Get User Data to login
          return fetch(this.state.url + 'user/get_userinfo/?insecure=cool&user_id=' + registrationReg.user_id)
          .then((response) => response.json())
          .then((userReg) => {
            //console.log(userReg);
            if(userReg.status != 'ok'){
              this.setState({ error: userReg.error, loading: false });
            } else {
              this.setUser(userReg);

              alert('ok');
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


  renderButtonOrLoading() {
    if(this.state.loading) {
        return <Text>Wait...</Text>
    }

    return <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={styles.EMailLogin}
          onPress={ this.loggedHandler } >
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
          <Text style={{color: 'white', fontSize: 16, fontWeight: 'bold'}}>JOIN IN</Text>
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
            <View>
              <Image resizeMode="contain" style={styles.logo} source={require('../assets/banner.jpg')} />
            </View>
            <View style={styles.buttonContainer}>
                <Image style={{width: 200, height: 200}} source={require('../assets/patty.png')} />
            </View>
            <View>
              <MainText><HeadingText>Welcome to StrokeKnowHow</HeadingText></MainText>
              <MainText>We are a worldwide stroke community learning from one another</MainText>
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
            
            <View style={{marginTop: 20}}>
            </View>

          </KeyboardAvoidingView>
        </ScrollView>
      );

    } else { //REGISTER

      return (
        <ScrollView style={{padding: 20, backgroundColor: 'white'}}>
          <KeyboardAvoidingView behavior='position' style={{flex: 1}}>
            
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
              onChangeText={(email) => this.EMail(email)}
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
