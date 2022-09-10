import React, {useEffect} from 'react';
import {Animated, Image, StyleSheet} from 'react-native';
import {scaleSize} from '../../utils/calc';
import {useJumpToPlaceAnim} from '../../hooks/animas';

const Chips = ({data}) => {
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
        style.snackItem,
        {transform: [{scale: scaleAnim}], left: leftAnim, top: topAnim},
      ]}>
      <Image style={style.snack} source={data.source} />
    </Animated.View>
  );
};

const style = StyleSheet.create({
  snackItem: {
    position: 'absolute',
    left: scaleSize(4),
    bottom: scaleSize(-154),
    zIndex: 2,
  },
  snack: {
    width: scaleSize(188),
    height: scaleSize(188),
  },
});

export default Chips;
