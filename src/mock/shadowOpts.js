import {scaleSize} from '../utils/calc';

export const getShadowOpt = ({width, height, radius, opacity, x, y}) => ({
  width: scaleSize(width || 10),
  height: scaleSize(height || 10),
  color: '#FD003C',
  opacity: opacity || 0.3,
  radius: scaleSize(radius || 70),
  x: scaleSize(x || 0),
  y: scaleSize(y || 10),
});
