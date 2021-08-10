import {StyleSheet} from 'react-native';
import {getHeight, fontFamily} from '@common/';
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  txtName: {
    fontSize: getHeight(50),
    fontFamily: fontFamily.f1,
  },
});
export default styles;
