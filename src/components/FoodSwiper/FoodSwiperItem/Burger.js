import React from 'react';
import {View, Image} from 'react-native';
import style from './style';

const Burger = () => {
  return (
    <View>
      <Image
        style={style.topBurImg}
        source={require('../../../assets/images/food-topHamburger.png')}
      />
      <Image
        style={style.botBurImg}
        source={require('../../../assets/images/food-botHamburger.png')}
      />
    </View>
  );
};

export default Burger;
