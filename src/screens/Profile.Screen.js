import React, { Component } from 'react';
import Spinner from 'react-native-loading-spinner-overlay';

import {
  View, Image, TouchableOpacity, ScrollView, KeyboardAvoidingView, Text, TextInput, Linking, CameraRoll, AsyncStorage
} from 'react-native';

import Icon from "react-native-vector-icons/Ionicons";

import styles from '../styles/styles';

import TextFieldInput from '../components/UI/TextInputField';

//import ImagePicker from 'react-native-image-picker';

const apiUrl = 'https://strokeknowhow.org/api/';

class ProfileScreen extends Component {

  constructor(props) {
      super(props);
      this.state = {
        defaultImage: require('../assets/logo-header.jpg')
      }

      rootNavigator = this.props.navigator;
  }

  async componentDidMount() {
    try {
      const userData = await AsyncStorage.getItem('user');

    } catch (error) {
      console.log(error);
      alert(error);
    }
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
            token: loginRes.cookie,
          }
          
          this.setUser(user);
          //this.setLanguage(this.state.language);
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

  async setUser (userData) {
    try {
      const user = await AsyncStorage.setItem('user', JSON.stringify(userData));
      this.setState({user: userData});

      return user;
    } catch (error) {
      console.log(error);
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
    return <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.EMailLogin}
          onPress={ this.logOutHandler } >
          <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>LOGOUT</Text>
        </TouchableOpacity>

      </View>;
  }  

  async logOutHandler () {
    rootNavigator.resetTo({
      screen: 'StrokeApp.LoginScreen',
      backButtonHidden: true,
      navigatorStyle: {
        tabBarHidden: true,
      },
      title: 'Login',
    });

    const user = await AsyncStorage.setItem('user', '');
  }

  openGallery () {
    CameraRoll.getPhotos({
      first: 20,
      //assetType: 'Photos',
    })
    .then(r => {
      console.log(r)
      this.setState({ photos: r.edges })
    })
    .catch((err) => {
      console.log(err)
    });
  }
  
  render() {

    return (
      // Try setting `justifyContent` to `center`.
      // Try setting `flexDirection` to `row`.
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
      }}>
        <View>
          <TouchableOpacity onPress={() => this.openGallery()}>
            <Image style={styles.profileImage} source={this.state.defaultImage} resizeMode="contain"/>
          </TouchableOpacity>
        </View>

        <View style={{height: 60}}>
          {this.renderButtonOrLoading()}
        </View>

        <View style={styles.termsContainer}>
          <Text style={styles.terms}>By clicking "Register" I agree to StrokeKnowHow's</Text>
          <Text style={styles.textHyper} onPress={ ()=> Linking.openURL('https://google.com') }>Terms of Service</Text>
        </View>
      </View>
    );
  }
}

export default ProfileScreen;
