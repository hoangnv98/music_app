import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen, DetailMusic} from '@screens/';
const MainStack = createStackNavigator();
export default () => {
  return (
    <MainStack.Navigator headerMode="none">
      <MainStack.Screen name="Home" component={HomeScreen} />
      <MainStack.Screen name="DetailMusic" component={DetailMusic} />
    </MainStack.Navigator>
  );
};
