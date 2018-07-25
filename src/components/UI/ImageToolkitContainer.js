import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

const imageToolkitContainer = ({ src }) => {

    return(
        <View style={styles.container}>
            <Image 
                source={src}
                style={[styles.image]}>
            </Image>
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    //paddingVertical: 10,
    //marginHorizontal: 0,
  },
  image: {
    width: 300,
    //width: '80%',
    height: 300,
    //height: 'auto',
  }
});

export default imageToolkitContainer;