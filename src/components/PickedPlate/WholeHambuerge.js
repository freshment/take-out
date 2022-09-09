import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {scaleSize} from '../../utils/calc';

const WholeHambuerge = () => {
  return (
    <View style={style.container}>
      <Image
        style={style.topHalf}
        source={require('../../assets/images/food-topHamburger.png')}
      />
      <Image
        style={style.botHalf}
        source={require('../../assets/images/food-botHamburger.png')}
      />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    position: 'relative',
  },
  topHalf: {
    width: scaleSize(150),
    height: scaleSize(150),
    position: 'absolute',
    left: scaleSize(32),
    top: scaleSize(22),
    zIndex: 10,
  },
  botHalf: {
    width: scaleSize(201),
    height: scaleSize(202),
    position: 'absolute',
    left: 0,
    top: 0,
    zIndex: 9,
  },
});

export default WholeHambuerge;
