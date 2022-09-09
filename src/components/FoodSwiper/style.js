import {StyleSheet} from 'react-native';
import {scaleSize, setSpText} from '../../utils/calc';

export default StyleSheet.create({
  foodSwiperContainer: {
    height: scaleSize(572),
  },
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
  star: {
    position: 'absolute',
  },
  // middle size Star
  start1: {
    width: scaleSize(30),
    height: scaleSize(34),
    left: scaleSize(60),
    top: scaleSize(260),
  },
  // large size Star
  start2: {
    width: scaleSize(50),
    height: scaleSize(54),
    left: scaleSize(330),
    top: scaleSize(100),
  },
  // small size Star
  start3: {
    width: scaleSize(22),
    height: scaleSize(26),
    left: scaleSize(400),
    top: scaleSize(240),
  },
  foodInfoWrapper: {
    position: 'absolute',
    right: scaleSize(84),
    top: scaleSize(140),
    alignItems: 'flex-end',
  },
  foodName: {
    fontSize: setSpText(64),
    fontWeight: 'bold',
    color: '#EB5C77',
  },
  foodPrice: {
    fontSize: setSpText(48),
    color: '#EB5C77',
  },
  foodAction: {
    position: 'absolute',
    top: scaleSize(356),
    right: scaleSize(40),
  },
  iconPlus: {
    width: scaleSize(180),
    height: scaleSize(180),
  },
});
