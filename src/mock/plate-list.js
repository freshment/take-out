import {scaleSize} from '../utils/calc';

export const positionList = {
  BURGER: {
    startX: scaleSize(-200),
    startY: scaleSize(-200),
    endX: scaleSize(-180),
    endY: scaleSize(44),
    viewStyleName: 'mainFoodItem',
  },
  LATTE: {
    startX: scaleSize(-200),
    startY: scaleSize(-200),
    endX: scaleSize(-90),
    endY: scaleSize(-90),
    viewStyleName: 'drinksItem',
    imgStyleName: 'coffee',
    source: require('../assets/images/picked-coffe.png'),
  },
  FRIES: {
    startX: scaleSize(-200),
    startY: scaleSize(-200),
    endX: scaleSize(4),
    endY: scaleSize(154),
    viewStyleName: 'snackItem',
    imgStyleName: 'snack',
    source: require('../assets/images/picked-chips.png'),
  },
};
