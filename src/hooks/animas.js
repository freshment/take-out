import {useRef, useCallback} from 'react';
import {Animated} from 'react-native';
import {scaleSize} from '../utils/calc';
import {positionList, positionMap} from '../mock/star-surround';

// fade in & out Animation Hooks
export const useFadeInOut = duration => {
  const fadeAnim = useRef(new Animated.Value(0), []).current;
  const _duration = duration || 300;
  const fadeIn = useCallback(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: _duration,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim, _duration]);
  const fadeOut = useCallback(() => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: _duration,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim, _duration]);
  return {fadeAnim, fadeIn, fadeOut};
};

// composition animation: fade & up down
export const useFadeUpDown = duration => {
  const translateYAnim = useRef(new Animated.Value(scaleSize(0)), []).current;
  const fadeAnim = useRef(new Animated.Value(0), []).current;
  const _duration = duration || 300;

  const entry = useCallback(() => {
    Animated.parallel([
      Animated.timing(translateYAnim, {
        toValue: 0,
        duration: _duration,
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: _duration,
        useNativeDriver: true,
      }),
    ]).start();
  }, [translateYAnim, fadeAnim, _duration]);

  const exit = useCallback(() => {
    Animated.parallel([
      Animated.timing(translateYAnim, {
        toValue: scaleSize(20),
        duration: _duration,
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: _duration,
        useNativeDriver: true,
      }),
    ]).start();
  }, [translateYAnim, fadeAnim, _duration]);

  return {translateYAnim, fadeAnim, entry, exit};
};

// surround star Animation
export const useSurroundAnim = (initPosition, duration) => {
  const {x, y} = initPosition;
  const leftAnim = useRef(new Animated.Value(0), []).current;
  const topAnim = useRef(new Animated.Value(0), []).current;
  const fadeAnim = useRef(new Animated.Value(0), []).current;
  const _duration = duration || 300;

  const from = useCallback(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: _duration,
        useNativeDriver: true,
      }),
      Animated.timing(leftAnim, {
        toValue: x,
        duration: _duration,
        useNativeDriver: true,
      }),
      Animated.timing(topAnim, {
        toValue: y,
        duration: _duration,
        useNativeDriver: true,
      }),
    ]).start();
  }, [x, y, leftAnim, topAnim, fadeAnim, _duration]);

  const to = useCallback(() => {
    const newPosition = getNewPosition(x, y);
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 0.5,
        duration: _duration,
        useNativeDriver: true,
      }),
      Animated.timing(leftAnim, {
        toValue: newPosition.x,
        duration: _duration,
        useNativeDriver: true,
      }),
      Animated.timing(topAnim, {
        toValue: newPosition.y,
        duration: _duration,
        useNativeDriver: true,
      }),
    ]).start();
  }, [x, y, leftAnim, topAnim, fadeAnim, _duration, getNewPosition]);

  const getNewPosition = useCallback((x, y) => {
    const currentIndex = positionList.findIndex(
      position => position.x === x && position.y === y,
    );
    return positionList[positionMap[currentIndex]];
  }, []);

  return {leftAnim, topAnim, fadeAnim, from, to};
};
