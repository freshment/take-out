import React, {useEffect} from 'react';
import {View, Animated, Image, StyleSheet} from 'react-native';
import {useSurroundAnim} from '../../hooks/animas';
import {scaleSize} from '../../utils/calc';
import {positionList} from '../../mock/star-surround';

const SurroundStar = ({isDisplay}) => {
  const {
    leftAnim: leftAnim1,
    topAnim: topAnim1,
    fadeAnim: fadeAnim1,
    from: from1,
    to: to1,
  } = useSurroundAnim(positionList[0]);
  const {
    leftAnim: leftAnim2,
    topAnim: topAnim2,
    fadeAnim: fadeAnim2,
    from: from2,
    to: to2,
  } = useSurroundAnim(positionList[1]);
  const {
    leftAnim: leftAnim3,
    topAnim: topAnim3,
    fadeAnim: fadeAnim3,
    from: from3,
    to: to3,
  } = useSurroundAnim(positionList[2]);
  // {x: 30, y: 230}, {x: 340, y: 60}, {x: 430, y: 200}
  useEffect(() => {
    if (isDisplay) {
      from1();
      from2();
      from3();
    } else {
      to1();
      to2();
      to3();
    }
  }, [isDisplay, from1, from2, to1, to2, from3, to3]);

  return (
    <View>
      <View style={style.starWrapper}>
        <Animated.View
          style={[
            style.start,
            {translateX: leftAnim1, translateY: topAnim1, opacity: fadeAnim1},
          ]}>
          <Image
            style={style.start1}
            source={require('../../assets/images/star.png')}
          />
        </Animated.View>
      </View>

      <View style={style.starWrapper}>
        <Animated.View
          style={[
            style.start,
            {translateX: leftAnim2, translateY: topAnim2, opacity: fadeAnim2},
          ]}>
          <Image
            style={style.start2}
            source={require('../../assets/images/star.png')}
          />
        </Animated.View>
      </View>
      <View style={style.starWrapper}>
        <Animated.View
          style={[
            style.start,
            {translateX: leftAnim3, translateY: topAnim3, opacity: fadeAnim3},
          ]}>
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
