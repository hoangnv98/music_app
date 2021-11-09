import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function DetailMusic() {
  const navigation = useNavigation();

  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        backgroundColor: 'red',
      }}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>123</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({});
