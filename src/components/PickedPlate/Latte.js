import React, {useEffect} from 'react';
import {Animated, Image, StyleSheet} from 'react-native';
import {scaleSize} from '../../utils/calc';
import {useJumpToPlaceAnim} from '../../hooks/animas';

const Latte = ({data}) => {
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
        style.drinksItem,
        {transform: [{scale: scaleAnim}], left: leftAnim, top: topAnim},
      ]}>
      <Image style={style.coffee} source={data.source} />
    </Animated.View>
  );
};

const style = StyleSheet.create({
  drinksItem: {
    position: 'absolute',
    left: scaleSize(-90),
    bottom: scaleSize(-90),
  },
  coffee: {
    width: scaleSize(256),
    height: scaleSize(256),
  },
});

export default Latte;
