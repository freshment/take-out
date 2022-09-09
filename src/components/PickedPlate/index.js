import React, {useMemo} from 'react';
import {View, Image} from 'react-native';
import style from './style';
import WholeHambuerge from './WholeHambuerge';
import {positionList} from '../../mock/plate-list';

const PickedPlate = ({pickedList}) => {
  console.log('pickedL', pickedList);
  const plateList = useMemo(() => {
    return pickedList.map(item => {
      const positionData = positionList[item.foodName];
      return {
        ...item,
        ...positionData,
      };
    });
  }, [pickedList]);

  return (
    <View style={style.pickedPlateContainer}>
      <View style={style.pickedFoodWrapper}>
        {plateList.map(item =>
          item.foodName === 'BURGER' ? (
            <View style={style[item.viewStyleName]} key={item.foodName}>
              <WholeHambuerge />
            </View>
          ) : (
            <View style={style[item.viewStyleName]} key={item.foodName}>
              <Image style={style[item.imgStyleName]} source={item.source} />
            </View>
          ),
        )}
        {/* <View style={style.mainFoodItem}>
          <WholeHambuerge />
        </View>        
        <View style={style.drinksItem}>
          <Image
            style={style.coffee}
            source={require('../../assets/images/picked-coffe.png')}
          />
        </View>
        <View style={style.snackItem}>
          <Image
            style={style.snack}
            source={require('../../assets/images/picked-chips.png')}
          />
        </View> */}
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
