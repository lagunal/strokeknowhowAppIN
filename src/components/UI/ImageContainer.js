import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

const imageContainer = ({src}) => {

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
    paddingVertical: 10,
    marginHorizontal: 0,
  },
  image: {
    width: '100%',
    //width: 375,
    //height: 180,
    //height: 'auto',
  }
});

export default imageContainer;