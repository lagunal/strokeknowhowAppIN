import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image
  } from 'react-native';

class Header extends Component {

    render() {
        return (
          <View style={styles.header}>
            <Image source={require('../assets/logo-header.jpg')} style={styles.imgHeader} />
          </View>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        flex: 1,
        //flexDirection: 'row',
        alignItems: 'center',
    },
    imgHeader: {
        width: 200,
        height: 35,
        margin: 5,
    },
});

export default Header;







