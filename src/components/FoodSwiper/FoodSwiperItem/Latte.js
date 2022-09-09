import React from 'react';
import {View, Image} from 'react-native';
import style from './style';

const Latte = () => {
  return (
    <View>
      <Image
        style={style.coffeeImg}
        source={require('../../../assets/images/picked-coffe.png')}
      />
      <Image
        style={style.dropsImg}
        source={require('../../../assets/images/food-drops.png')}
      />
    </View>
  );
};

export default Latte;
