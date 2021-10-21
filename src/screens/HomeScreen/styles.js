import {StyleSheet} from 'react-native';
import {getHeight, fontFamily} from '@common/';
import {getStatusBarHeight, getWidth, ScreenWidth} from '@common/Helper';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#08121c',
  },
  txtName: {
    fontSize: getHeight(50),
    fontFamily: fontFamily.f1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: getStatusBarHeight(),
    justifyContent: 'space-between',
    paddingHorizontal: getWidth(20),
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  txtApp: {
    color: 'white',
    fontFamily: fontFamily.f1,
  },
  headerRight: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: getWidth(70),
  },
  ic_search: {
    width: getWidth(25),
    height: getHeight(25),
    tintColor: '#fff',
  },
  //viewSearch
  viewSearch: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: getWidth(20),
  },
  textInputStyle: {
    marginTop: getHeight(20),
    width: ScreenWidth - getWidth(40),
    height: getHeight(50),
    backgroundColor: 'gray',
    color: '#fff',
  },
});
export default styles;
