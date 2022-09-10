import React, {useEffect, useCallback} from 'react';
import {View, Animated} from 'react-native';
import Fries from './Fries';
import Latte from './Latte';
import Burger from './Burger';
import {useFadeInOut} from '../../../hooks/animas';
import style from './style';

const SwiperItem = ({data, isDisplay}) => {
  const {fadeAnim, fadeIn, fadeOut} = useFadeInOut(300);

  const getFoodComp = useCallback(foodName => {
    switch (foodName) {
      case 'FRIES':
        return <Fries />;
      case 'LATTE':
        return <Latte />;
      case 'BURGER':
        return <Burger />;
      default:
        return null;
    }
  }, []);

  useEffect(() => {
    if (isDisplay) {
      fadeIn();
    } else {
      fadeOut();
    }
  }, [isDisplay, fadeIn, fadeOut]);

  return (
    <View style={style.foodItemWrapper}>
      <Animated.View style={{opacity: fadeAnim}}>
        <View style={style.foodImgWrapper}>{getFoodComp(data.foodName)}</View>
      </Animated.View>
    </View>
  );
};

export default SwiperItem;
