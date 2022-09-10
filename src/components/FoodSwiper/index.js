import React, {useState, useMemo, useCallback} from 'react';
import {View} from 'react-native';
import Swiper from 'react-native-swiper';
import FoodSwiperItem from './FoodSwiperItem';
import FoodSalesInfo from './FoodSalesInfo';
import SurroundStar from './SurroundStar';
import AddButton from './AddButton';
import style from './style';
import foodList from '../../mock/food-list';

const FoodSwiper = ({handleAddFoodItem}) => {
  const [swiperIndex, setSwiperIndex] = useState(0);
  const [isShowInfo, setIsShowInfo] = useState(true);
  // define Swiper callbacks
  const handleIndexChanged = useCallback(index => {
    setSwiperIndex(index);
  }, []);
  const handleScrollBegin = useCallback(() => {
    setIsShowInfo(false);
  }, []);
  const handleScrollEnd = useCallback(() => {
    setTimeout(() => {
      setIsShowInfo(true);
    }, 100);
  }, []);

  const currentItem = useMemo(() => foodList[swiperIndex], [swiperIndex]);

  return (
    <View style={style.foodSwiperContainer}>
      <SurroundStar isDisplay={isShowInfo} />
      <Swiper
        index={swiperIndex}
        loop={false}
        showsPagination={false}
        onIndexChanged={handleIndexChanged}
        onScrollBeginDrag={handleScrollBegin}
        onMomentumScrollEnd={handleScrollEnd}>
        {foodList.map((item, index) => (
          <FoodSwiperItem
            key={item.id}
            data={item}
            index={index}
            isDisplay={isShowInfo}
          />
        ))}
      </Swiper>
      <FoodSalesInfo data={currentItem} isDisplay={isShowInfo} />
      <AddButton
        data={currentItem}
        isDisplay={isShowInfo}
        handleAddFoodItem={handleAddFoodItem}
      />
    </View>
  );
};

FoodSwiper.defaultProps = {
  handleAddFoodItem: () => {},
};

export default FoodSwiper;
