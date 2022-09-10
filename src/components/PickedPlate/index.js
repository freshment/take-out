import React, {useCallback, useMemo} from 'react';
import {View, Image} from 'react-native';
import style from './style';
import WholeHambuerge from './WholeHambuerge';
import Latte from './Latte';
import Chips from './Chips';
import {positionList} from '../../mock/plate-list';

const PickedPlate = ({pickedList}) => {
  const plateList = useMemo(() => {
    return pickedList.map(item => {
      const positionData = positionList[item.foodName];
      return {
        ...item,
        ...positionData,
      };
    });
  }, [pickedList]);

  const getPlateFoodItem = useCallback(item => {
    switch (item.foodName) {
      case 'BURGER':
        return <WholeHambuerge key={item.foodName} data={item} />;
      case 'LATTE':
        return <Latte key={item.foodName} data={item} />;
      case 'FRIES':
        return <Chips key={item.foodName} data={item} />;
      default:
        return null;
    }
  }, []);

  return (
    <View style={style.pickedPlateContainer}>
      <View style={style.pickedFoodWrapper}>
        {plateList.map(item => getPlateFoodItem(item))}
      </View>
      <View>
        <Image
          style={style.plate}
          source={require('../../assets/images/picked-plate.png')}
        />
      </View>
    </View>
  );
};

export default PickedPlate;
