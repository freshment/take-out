import React from 'react';
import {View, Image, Text} from 'react-native';
import style from './style';

const FoodSwiper = () => {
  return (
    <View style={style.foodSwiperContainer}>
      <View style={style.foodItemWrapper}>
        <View style={style.foodImgWrapper}>
          <Image
            style={style.chipImg}
            source={require('../../assets/images/food-chips.png')}
          />
          <Image
            style={style.chipImg1}
            source={require('../../assets/images/food-chips1.png')}
          />
          <Image
            style={style.chipImg2}
            source={require('../../assets/images/food-chips2.png')}
          />
        </View>
        <Image
          style={{...style.star, ...style.start1}}
          source={require('../../assets/images/star.png')}
        />
        <Image
          style={{...style.star, ...style.start2}}
          source={require('../../assets/images/star.png')}
        />
        <Image
          style={{...style.star, ...style.start3}}
          source={require('../../assets/images/star.png')}
        />
        <View style={style.foodInfoWrapper}>
          <Text style={style.foodName}>FRIES</Text>
          <Text style={style.foodPrice}>4$</Text>
        </View>
        <View style={style.foodAction}>
          <Image
            style={style.iconPlus}
            source={require('../../assets/images/icon-plus.png')}
          />
        </View>
      </View>
    </View>
  );
};

export default FoodSwiper;
