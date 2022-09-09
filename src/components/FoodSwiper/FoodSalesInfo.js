import React, {useEffect} from 'react';
import {Animated, Text, StyleSheet} from 'react-native';
import {useFadeUpDown} from '../../hooks/animas';
import {scaleSize, setSpText} from '../../utils/calc';

const FoodSalesInfo = ({data, isDisplay}) => {
  const {translateYAnim, fadeAnim, entry, exit} = useFadeUpDown(300);
  const {foodName, price} = data;

  useEffect(() => {
    if (isDisplay) {
      entry();
    } else {
      exit();
    }
  }, [isDisplay, entry, exit]);

  return (
    <Animated.View
      style={[
        style.foodInfoWrapper,
        {translateY: translateYAnim, opacity: fadeAnim},
      ]}>
      <Text style={style.foodName}>{foodName}</Text>
      <Text style={style.foodPrice}>{price}$</Text>
    </Animated.View>
  );
};

const style = StyleSheet.create({
  foodInfoWrapper: {
    position: 'absolute',
    right: scaleSize(84),
    top: scaleSize(140),
    alignItems: 'flex-end',
  },
  foodName: {
    fontSize: setSpText(64),
    fontWeight: 'bold',
    color: '#EB5C77',
  },
  foodPrice: {
    fontSize: setSpText(48),
    color: '#EB5C77',
  },
});

export default FoodSalesInfo;
