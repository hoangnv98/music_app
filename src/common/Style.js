/**
 * Common style for project
 * @author truongnv
 * @since 2020
 * @version 1.0.0
 */
import {StyleSheet} from 'react-native';
import {getHeight, getWidth} from './Helper';

export const Style = StyleSheet.create({
  iconTabBottom: {
    width: getWidth(23),
    height: getHeight(23),
    resizeMode: 'contain',
  },
  validationText: {
    color: '#dc3545',
    fontSize: getHeight(14),
    marginTop: getHeight(7),
  },
});

export const Colors = {
  c1: '#FEBD2F',
  c2: '#2D2C31',
  c3: '#828282',
};

export const fontFamily = {
  f1: 'Roboto-Bold',
  f2: 'Roboto-Medium',
  f3: 'Roboto-Light',
};
