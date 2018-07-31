import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

const imageToolkitContainer = ({ src }) => {

    return(
        <View style={styles.container}>
            <Image 
                source={src}
                style={[styles.image]} 
                resizeMode='contain' >
            </Image>
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  image: {
    width: '100%',
    height: 300,
  }
});

export default imageToolkitContainer;