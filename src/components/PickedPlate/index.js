import React from 'react';
import {View, Image} from 'react-native';
import style from './style';
import WholeHambuerge from './WholeHambuerge';

const PickedPlate = () => {
  return (
    <View style={style.pickedPlateContainer}>
      <View style={style.pickedFoodWrapper}>
        <View style={style.mainFoodItem}>
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
        </View>
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
