import React, {useState, useEffect} from 'react';
import {View, Text, Image, StatusBar, TouchableOpacity} from 'react-native';
import {Images} from '@config/Images';
import styles from './styles';
import {TextInput} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import crashlytics from '@react-native-firebase/crashlytics';
import messaging from '@react-native-firebase/messaging';
export default function HomeScreen() {
  const [text, setText] = useState('');
  const navigation = useNavigation();
  useEffect(() => {
    async function requestUserPermission() {
      const authStatus = await messaging().requestPermission();
      console.log('authStatus', authStatus);
      const enabled =
        authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
        authStatus === messaging.AuthorizationStatus.PROVISIONAL;

      if (enabled) {
        console.log('Authorization status:', authStatus);
      }
    }
    requestUserPermission();
  }, []);
  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });

    return unsubscribe;
  }, []);
  const testCrash = () => {
    console.log('111');
    try {
      if (users) {
      }
    } catch (error) {
      crashlytics().log(`${error} message : ${Date().toLocaleString()}`);
      crashlytics().crash();
      crashlytics().recordError(error);
    }
  };
  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Image source={Images.ic_logo} />
          <Text style={styles.txtApp}>Hyper Cast</Text>
        </View>
        <View style={styles.headerRight}>
          <TouchableOpacity onPress={() => testCrash()}>
            <Image source={Images.ic_search} style={styles.ic_search} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={Images.ic_menu} style={styles.ic_search} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.viewSearch}>
        <TextInput
          mode="outlined"
          outlineColor="#08121c"
          label="Search"
          value={text}
          onChangeText={text => setText(text)}
          style={styles.textInputStyle}
          right={
            <TextInput.Icon
              name={() => (
                <Image
                  source={Images.ic_search}
                  style={[styles.ic_search, {tintColor: '#000'}]}
                />
              )}
            />
          }
        />
      </View>
    </View>
  );
}
