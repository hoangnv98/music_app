import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen, DetailMusic} from '@screens/';
const Stack = createStackNavigator();
export default () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="DetailMusic" component={DetailMusic} />
    </Stack.Navigator>
  );
};
