import React from 'react';
import { View, Text, TextInput } from 'react-native';
import styles from '../styles.js';

const TextFieldInput = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
    const { inputStyle, labelStyle, containerStyle } = styles;

    return (
        <View style={containerStyle}>
            <TextInput
                {...this.props} 
                autoCorrect={false}
                placeholder={placeholder}
                secureTextEntry={secureTextEntry}
                value={value}
                onChangeText={onChangeText}
                style={inputStyle}
                underlineColorAndroid={'transparent'}
                autoCorrect={false}
                maxLength={30}
            />
        </View>
    );
};

export default TextFieldInput;
