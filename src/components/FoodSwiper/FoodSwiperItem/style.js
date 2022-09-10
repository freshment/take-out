import {StyleSheet} from 'react-native';
import {scaleSize} from '../../../utils/calc';

export default StyleSheet.create({
  foodItemWrapper: {
    position: 'relative',
  },
  foodImgWrapper: {
    position: 'absolute',
    top: scaleSize(110),
    left: scaleSize(60),
  },
  chipImg: {
    width: scaleSize(380),
    height: scaleSize(380),
  },
  chipImg1: {
    width: scaleSize(380),
    height: scaleSize(380),
    position: 'absolute',
    left: scaleSize(30),
    top: scaleSize(-160),
  },
  chipImg2: {
    width: scaleSize(380),
    height: scaleSize(380),
    position: 'absolute',
    left: scaleSize(-50),
    top: scaleSize(-100),
  },
  coffeeImg: {
    width: scaleSize(400),
    height: scaleSize(400),
    position: 'absolute',
    left: scaleSize(-40),
    top: 0,
    transform: [{rotate: '20deg'}],
  },
  dropsImg: {
    width: scaleSize(380),
    height: scaleSize(380),
    position: 'absolute',
    left: scaleSize(-40),
    top: scaleSize(-110),
  },
  topBurImg: {
    width: scaleSize(250),
    height: scaleSize(240),
    position: 'absolute',
    left: scaleSize(40),
    top: scaleSize(-46),
    zIndex: 3,
  },
  botBurImg: {
    width: scaleSize(380),
    height: scaleSize(380),
    position: 'absolute',
    left: scaleSize(-20),
    top: scaleSize(30),
  },
});
