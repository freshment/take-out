import React, {useEffect, useCallback} from 'react';
import {View, Animated, Image, StyleSheet} from 'react-native';
import {useJumpToPlaceAnim} from '../../hooks/animas';
import {scaleSize} from '../../utils/calc';
import {positionList, positionMap} from '../../mock/star-surround';

const SurroundStar = ({isDisplay}) => {
  const {
    leftAnim: leftAnim1,
    topAnim: topAnim1,
    from: from1,
  } = useJumpToPlaceAnim({
    startX: positionList[0].x,
    startY: positionList[0].y,
  });
  const {
    leftAnim: leftAnim2,
    topAnim: topAnim2,
    from: from2,
  } = useJumpToPlaceAnim({
    startX: positionList[1].x,
    startY: positionList[1].y,
  });
  const {
    leftAnim: leftAnim3,
    topAnim: topAnim3,
    from: from3,
  } = useJumpToPlaceAnim({
    startX: positionList[2].x,
    startY: positionList[2].y,
  });

  useEffect(() => {
    if (isDisplay) {
      from1(getNewPosition(leftAnim1, topAnim1));
      from2(getNewPosition(leftAnim2, topAnim2));
      from3(getNewPosition(leftAnim3, topAnim3));
    }
  }, [
    isDisplay,
    from1,
    from2,
    from3,
    leftAnim1,
    topAnim1,
    leftAnim2,
    topAnim2,
    leftAnim3,
    topAnim3,
    getNewPosition,
  ]);

  // after Changed postion, get new Postion
  const getNewPosition = useCallback((x, y) => {
    const currentIndex = positionList.findIndex(
      position => +position.x === x._value && +position.y === y._value,
    );
    const newPosition = positionList[positionMap[currentIndex]];
    return {endX: newPosition.x, endY: newPosition.y};
  }, []);

  return (
    <View>
      <Animated.View
        style={[style.starWrapper, {left: leftAnim1, top: topAnim1}]}>
        <Image
          style={style.start1}
          source={require('../../assets/images/star.png')}
        />
      </Animated.View>
      <View style={style.starWrapper}>
        <Animated.View style={[style.start, {left: leftAnim2, top: topAnim2}]}>
          <Image
            style={style.start2}
            source={require('../../assets/images/star.png')}
          />
        </Animated.View>
      </View>
      <View style={style.starWrapper}>
        <Animated.View style={[style.start, {left: leftAnim3, top: topAnim3}]}>
          <Image
            style={style.start3}
            source={require('../../assets/images/star.png')}
          />
        </Animated.View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  starWrapper: {
    position: 'absolute',
  },
  // middle size Star
  start1: {
    width: scaleSize(33),
    height: scaleSize(34),
  },
  // large size Star
  start2: {
    width: scaleSize(50),
    height: scaleSize(54),
  },
  // small size Star
  start3: {
    width: scaleSize(22),
    height: scaleSize(26),
  },
});

export default SurroundStar;
