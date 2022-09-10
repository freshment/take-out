import {scaleSize} from '../utils/calc';

export const positionList = {
  BURGER: {
    startX: scaleSize(230),
    startY: scaleSize(-660),
    endX: scaleSize(-210),
    endY: scaleSize(-20),
    duration: 700, // animation duration(ms)
  },
  LATTE: {
    startX: scaleSize(120),
    startY: scaleSize(-700),
    endX: scaleSize(-120),
    endY: scaleSize(-140),
    source: require('../assets/images/picked-coffe.png'),
    duration: 700, // animation duration(ms)
  },
  FRIES: {
    startX: scaleSize(120),
    startY: scaleSize(-700),
    endX: scaleSize(-4),
    endY: scaleSize(-14),
    source: require('../assets/images/picked-chips.png'),
    duration: 700, // animation duration(ms)
  },
};
