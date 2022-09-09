import React, {useState, useCallback} from 'react';
import {View, Image, Text} from 'react-native';
import Swiper from 'react-native-swiper';
import style from './style';

const FoodSwiper = () => {
  const [swiperIndex, setSwiperIndex] = useState(0);
  const handleIndexChanged = useCallback(
    index => {
      if (swiperIndex !== index) {
        setSwiperIndex(index);
      }
    },
    [swiperIndex],
  );

  return (
    <View>
      <Swiper onIndexChanged={handleIndexChanged} showsPagination={false}>
        {[0, 2].map(id => (
          <View style={style.foodItemWrapper} key={id}>
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
        ))}
      </Swiper>
    </View>
  );
};

export default FoodSwiper;
