import React from 'react';
import { View, Text, TextInput } from 'react-native';
import styles from '../../styles/styles';


const TextFieldInput = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
    const { inputStyle, containerStyle } = styles;

    return (
        <View style={containerStyle}>
            <Text style={{fontSize: 20}}>{label}</Text>
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
