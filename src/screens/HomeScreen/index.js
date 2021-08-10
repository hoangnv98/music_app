import React from 'react';
import {View, Text, Image} from 'react-native';
import {Images} from '@config/Images';
import styles from './styles';
export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Image source={Images.img_idol} style={{width: 100, height: 100}} />
    </View>
  );
}
