import React, {useState} from 'react';
import {View, Text, Image, StatusBar, TouchableOpacity} from 'react-native';
import {Images} from '@config/Images';
import styles from './styles';
import {TextInput} from 'react-native-paper';
export default function HomeScreen() {
  const [text, setText] = useState('');

  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Image source={Images.ic_logo} />
          <Text style={styles.txtApp}>Hyper Cast</Text>
        </View>
        <View style={styles.headerRight}>
          <TouchableOpacity>
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
