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
  mainFoodItem: {
    position: 'absolute',
    left: scaleSize(-180),
    bottom: scaleSize(44),
  },
  drinksItem: {
    position: 'absolute',
    left: scaleSize(-90),
    bottom: scaleSize(-90),
  },
  coffee: {
    width: scaleSize(256),
    height: scaleSize(256),
  },
  snackItem: {
    position: 'absolute',
    left: scaleSize(4),
    bottom: scaleSize(-154),
  },
  snack: {
    width: scaleSize(188),
    height: scaleSize(188),
  },
});
