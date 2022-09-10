import React, {useCallback, useState} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {scaleSize, deviceHeight, isAndroid} from '../utils/calc';
import LinearGradient from 'react-native-linear-gradient';
import NavHeader from '../components/NavHeader';
import FoodSwiper from '../components/FoodSwiper';
import PickedPlate from '../components/PickedPlate';
import ContactShop from '../components/ContactShop';
import OrderSummary from '../components/OrderSummary';
// import data
import navList from '../mock/nav-data';

const Home = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [pickedList, setPickedList] = useState([]);

  const handleAddFoodItem = useCallback(
    foodData => {
      if (!pickedList.find(picked => picked.id === foodData.id)) {
        const {price} = foodData;
        setTotalPrice(totalPrice + Number(price));
        setPickedList([].concat(pickedList, foodData));
      }
    },
    [totalPrice, pickedList],
  );

  return (
    <View style={style.homeContainer}>
      <ScrollView>
        <LinearGradient
          style={style.linearGradient}
          colors={['#F5F5F5', '#FFEDED']}
          start={{x: 0, y: 0.8}}
          end={{x: 0, y: 1}}>
          <NavHeader navList={navList} />
          <FoodSwiper handleAddFoodItem={handleAddFoodItem} />
          <View style={style.separator} />
          <PickedPlate pickedList={pickedList} />
        </LinearGradient>
      </ScrollView>
      <View style={style.stickBottom}>
        <View>
          <ContactShop />
        </View>
        <OrderSummary totalPrice={totalPrice} />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  homeContainer: {
    minHeight: deviceHeight,
    position: 'relative',
  },
  linearGradient: {
    paddingBottom: scaleSize(140),
  },
  separator: {
    backgroundColor: '#F2F1F1',
    height: scaleSize(6),
  },
  stickBottom: {
    position: 'absolute',
    left: 0,
    bottom: scaleSize(isAndroid ? 45 : 150),
    zIndex: 19,
  },
});

export default Home;
