import React from 'react';
import {View, Image} from 'react-native';
import style from './style';

const Fries = () => {
  return (
    <View>
      <Image
        style={style.chipImg}
        source={require('../../../assets/images/food-chips.png')}
      />
      <Image
        style={style.chipImg1}
        source={require('../../../assets/images/food-chips1.png')}
      />
      <Image
        style={style.chipImg2}
        source={require('../../../assets/images/food-chips2.png')}
      />
    </View>
  );
};

export default Fries;
