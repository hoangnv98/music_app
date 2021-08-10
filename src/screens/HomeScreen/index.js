import React from 'react';
import {View, Text, Image} from 'react-native';
import {Images} from '@config/Images';
import styles from './styles';
export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.bottom}>
        <Text style={styles.txtName}>Tôi là Hoàng</Text>
      </View>
    </View>
  );
}
