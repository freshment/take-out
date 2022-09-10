import {StyleSheet} from 'react-native';
import {scaleSize} from '../../utils/calc';

export default StyleSheet.create({
  headerWrapper: {
    width: '100%',
  },
  linearGradient: {
    height: scaleSize(146),
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  iconWrapper: {
    position: 'relative',
  },
  iconTag: {
    width: scaleSize(50),
    height: scaleSize(62),
  },
  iconHambergur: {
    width: scaleSize(62),
    height: scaleSize(64),
  },
  iconDrinks: {
    width: scaleSize(51),
    height: scaleSize(73),
  },
  iconSnack: {
    width: scaleSize(68),
    height: scaleSize(68),
  },
  bar: {
    backgroundColor: '#FF7B7E',
    width: scaleSize(35),
    height: scaleSize(4),
    position: 'absolute',
    left: '50%',
    top: scaleSize(5),
    transform: [{translateX: -9}],
  },
});
