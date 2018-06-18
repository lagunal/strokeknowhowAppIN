import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

const imageContainer = ({ src }) => {

    return(
        <View style={styles.container}>
            <Image 
                source={src}
                style={styles.image}>
            </Image>
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 230,
    height: 200,
  }
});

export default imageContainer;