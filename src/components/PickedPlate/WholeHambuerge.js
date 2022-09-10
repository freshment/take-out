import React, {useEffect} from 'react';
import {Animated, Image, StyleSheet} from 'react-native';
import {scaleSize} from '../../utils/calc';
import {useJumpToPlaceAnim} from '../../hooks/animas';

const WholeHambuerge = ({data}) => {
  const {startX, startY, endX, endY, duration} = data;
  const {scaleAnim, leftAnim, topAnim, from} = useJumpToPlaceAnim(
    {
      startX,
      startY,
    },
    duration,
  );

  useEffect(() => {
    from({endX, endY});
  }, [endX, endY, from]);

  return (
    <Animated.View
      style={[
        style.mainFoodItem,
        {transform: [{scale: scaleAnim}], left: leftAnim, top: topAnim},
      ]}>
      <Image
        style={style.topHalf}
        source={require('../../assets/images/food-topHamburger.png')}
      />
      <Image
        style={style.botHalf}
        source={require('../../assets/images/food-botHamburger.png')}
      />
    </Animated.View>
  );
};

const style = StyleSheet.create({
  mainFoodItem: {
    position: 'absolute',
    left: scaleSize(-180),
    bottom: scaleSize(44),
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
