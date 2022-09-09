import React, {useEffect, useCallback} from 'react';
import {
  StyleSheet,
  Animated,
  TouchableWithoutFeedback,
  Image,
} from 'react-native';
import {useFadeInOut} from '../../hooks/animas';
import {scaleSize} from '../../utils/calc';

const AddButton = ({data, isDisplay, handleAddFoodItem}) => {
  const {fadeAnim, fadeIn, fadeOut} = useFadeInOut(300);

  useEffect(() => {
    if (isDisplay) {
      fadeIn();
    } else {
      fadeOut();
    }
  }, [isDisplay, fadeIn, fadeOut]);

  const handleAdd = useCallback(() => {
    handleAddFoodItem(data);
  }, [data, handleAddFoodItem]);

  return (
    <Animated.View style={[style.foodAction, {opacity: fadeAnim}]}>
      <TouchableWithoutFeedback onPress={handleAdd}>
        <Image
          style={style.iconPlus}
          source={require('../../assets/images/icon-plus.png')}
        />
      </TouchableWithoutFeedback>
    </Animated.View>
  );
};

const style = StyleSheet.create({
  foodAction: {
    position: 'absolute',
    top: scaleSize(356),
    right: scaleSize(40),
  },
  iconPlus: {
    width: scaleSize(180),
    height: scaleSize(180),
  },
});

export default AddButton;
