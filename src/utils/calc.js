import {Dimensions, PixelRatio, Platform} from 'react-native';

const {width, height} = Dimensions.get('window');
export const deviceWidth = width;
export const deviceHeight = height;
export const isAndroid = Platform.OS !== 'ios';

let fontScale = PixelRatio.getFontScale();
let pixelRatio = PixelRatio.get(); //GET current device px density
let screenPxW = PixelRatio.getPixelSizeForLayoutSize(deviceWidth);

/**
 * set Text as sp
 * @param size sp
 * @returns number dp
 */
export function setSpText(size) {
  const scaleWidth = deviceWidth / 750;
  const scaleHeight = deviceHeight / 1334;
  const _scale = Math.min(scaleWidth, scaleHeight);
  size = Math.round((size * _scale) / fontScale + 0.5);
  return size;
}

export const scaleSize = size => {
  const scaleWidth = (size * screenPxW) / 750;
  return Math.round(scaleWidth / pixelRatio + 0.5);
};
