import {StyleSheet} from 'react-native';
import {scaleSize} from '../../utils/calc';

export default StyleSheet.create({
  pickedPlateContainer: {
    height: scaleSize(342),
    alignItems: 'center',
    justifyContent: 'flex-end',
    position: 'relative',
  },
  plate: {
    width: scaleSize(500),
    height: scaleSize(196),
    position: 'relative',
    zIndex: 1,
  },
  pickedFoodWrapper: {
    zIndex: 2,
  },
});
