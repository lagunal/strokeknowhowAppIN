import React, { Component } from 'react';
import Spinner from 'react-native-loading-spinner-overlay';
import Video from 'react-native-video';

import {
  StyleSheet, View, Image, TouchableOpacity, ScrollView, 
  KeyboardAvoidingView, Text, TextInput, Picker, AsyncStorage,
  Dimensions, Linking, Platform
} from 'react-native';

import Icon from "react-native-vector-icons/Ionicons";

import styles from '../styles/styles';

import HeadingText from '../components/UI/HeadingText';
import MainText from "../components/UI/MainText";
import TextFieldInput from '../components/UI/TextInputField';
import startTabs from './MainTabs'; //start tabs navigation

//import validateEmail from '../utility/validateEmail.js';
//import validatePassword from '../utility/validatePassword.js';

const apiUrl = 'https://strokeknowhow.org/api/';
const { width, height } = Dimensions.get("window");


class LoginScreen extends Component {
    
  static navigatorStyle = {
      navBarHidden: true,
  };

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
        videoPaused: false,
      }
  }

  async componentDidMount() {
    try {
      const userData = await AsyncStorage.getItem('user');
      //const userData = '';

      this.setState({ user: JSON.parse(userData) });

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
  loggedHandler() {
    startTabs(); 
  }

  //EMAIL LOGIN
  onEMailLogin = () => {
    
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
            token: loginRes.cookie,
          }
          
          this.setUser(user);
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

  renderButtonOrLoading() {
    if(this.state.loading) {
        return <Text>Wait...</Text>
    }

    return <View style={styles.buttonContainer}>
        <TouchableOpacity disabled={this.state.enterButtonDisabled || this.state.username == "" || this.state.password == ""}
          style={styles.EMailLogin}
          onPress={ this.onEMailLogin } >
          <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>LOG IN</Text>
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
          <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>JOIN IN</Text>
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
          <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>JOIN IN</Text>
        </TouchableOpacity>
      </View>;
  }

  playVideo = () => {
    this.setState({videoPaused: !this.state.videoPaused})
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

      return (
        <ScrollView style={{flex: 1, width, height, paddingHorizontal: 0, paddingVertical: 0}}>
          <KeyboardAvoidingView behavior='position' style={{flex: 1}}>
            <Spinner visible={this.state.showSpinner} textContent={"Please wait..."} textStyle={{color: '#FFF'}} />

            
              <Video
                source={{uri: "https://strokeknowhow.org/wp-content/uploads/2018/07/102_Pattys_husband.mp4"}}
                ref={(ref) => {
                  this.player = ref
                }}                
                style={videoStyles.backgroundVideo}
                rate={1}
                paused={false}
                volume={1}
                muted={true}
                playWhenInactive={false}
                resizeMode='cover'
                repeat={false}
                />
            
            
            <View style={!this.state.inLogin && Platform.OS !== 'android' ? {marginTop: 30} : {marginTop: 100}}>
              <MainText><HeadingText style={{color: 'white'}}>Welcome to {`\n`} StrokeKnowHow.org</HeadingText></MainText>
              <MainText style={{textAlign: 'center', fontSize: 20, color: 'white'}}>We are a worldwide stroke <Text style={{fontSize: 24, fontWeight: 'bold'}}>community</Text> {`\n`} learning from one another</MainText>
            </View>

            <View style={!this.state.inLogin && Platform.OS !== 'android' ? {marginTop: 20} : {marginTop: 40}}>
                <TextFieldInput
                  label='Username'
                  value={this.state.username}
                  onChangeText={username => this.setState({ username })}
                  autoCorrect={true}
                />
                <Text style={styles.errorText}>{this.state.emailError}</Text>
                
                {!this.state.inLogin &&
                    <TextFieldInput
                      label='Family name (ex. Lopez Family)'
                      value={this.state.name}
                      onChangeText={name => this.setState({ name })}
                      autoCorrect={true}
                    />}

                {!this.state.inLogin &&
                    <TextFieldInput
                      label='Email Address'
                      value={this.state.email}
                      onChangeText={(email) => this.validateEMail(email)}
                      autoCorrect={true}
                    />}
                {!this.state.inLogin && <Text style={styles.errorText}>{this.state.emailError}</Text>}

                <TextFieldInput
                  label={this.state.inLogin ? 'Shared Family Password' : 'Shared Family Password (6+ chars)'}
                  autoCorrect={false}
                  secureTextEntry
                  value={this.state.password}
                  /*onChangeText={password => this.setState({ password })}*/
                  onChangeText={(password) => this.validatePassword(password)}
                />

                <Text style={styles.errorText}>{this.state.passwordError}</Text>

                <Text style={styles.errorText}>{this.state.error}</Text>

                {!this.state.inLogin &&
                  <View style={styles.termsContainer}>
                    <Text style={[styles.terms, {color: 'white'}]}>Tip: Everyone in your family will use this password, so tell them what it is!</Text>
                  </View>}  
                  
            </View>

            {this.state.inLogin &&
            <View style={{marginTop: 50}}>
              {this.renderButtonOrLoading()}
            </View>}

            {!this.state.inLogin &&
            <View style={{marginTop: 0}}>
              {this.renderButtonRegister()}
            </View>}

            {this.state.inLogin &&
            <View style={{marginTop: 5, flex:1, flexDirection: 'row', justifyContent: 'center'}}>
              {/* {this.renderButtonOrRegister()} */}
                <MainText style={{color: 'white'}}>Don't have an account?</MainText>
                <TouchableOpacity 
                      onPress={this.onRegisterScreenButton}>
                      <MainText style={{color: '#b30000', fontWeight: 'bold'}}>Sign up</MainText>
                </TouchableOpacity>
            </View>}

            {this.state.inLogin && Platform.OS === 'android' ?
              <View style={{height: 100}}>
              </View>
              :
              <View style={{height: 0}}>
              </View>
            }

            {!this.state.inLogin &&
              <View style={{marginTop: 5, flex:1, flexDirection: 'row', justifyContent: 'center'}}>
                {/* {this.renderButtonOrRegister()} */}
                  <MainText style={{color: 'white'}}>Already have an account?</MainText>
                  <TouchableOpacity 
                        onPress={this.goToLogin}>
                        <MainText style={{color: '#b30000', fontWeight: 'bold'}}>Log in</MainText>
                  </TouchableOpacity>
              </View>}

            </KeyboardAvoidingView>

        </ScrollView>
      );


  }

}

const videoStyles = StyleSheet.create({

  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    width,
    height,
  }
});

export default LoginScreen;
