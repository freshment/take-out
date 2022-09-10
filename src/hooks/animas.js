import {useRef, useCallback} from 'react';
import {Animated} from 'react-native';
import {scaleSize} from '../utils/calc';

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

// surround star Animation && plate food Animation
export const useJumpToPlaceAnim = (data, duration) => {
  const {startX, startY} = data;
  const scaleAnim = useRef(new Animated.Value(0), []).current;
  const leftAnim = useRef(new Animated.Value(startX), []).current;
  const topAnim = useRef(new Animated.Value(startY), []).current;
  const _duration = duration || 300;

  const from = useCallback(
    ({endX, endY}) => {
      Animated.parallel([
        Animated.timing(scaleAnim, {
          toValue: 1,
          duration: _duration,
          useNativeDriver: false,
        }),
        Animated.timing(leftAnim, {
          toValue: endX,
          duration: _duration,
          useNativeDriver: false,
        }),
        Animated.timing(topAnim, {
          toValue: endY,
          duration: _duration,
          useNativeDriver: false,
        }),
      ]).start();
    },
    [scaleAnim, leftAnim, topAnim, _duration],
  );

  return {scaleAnim, leftAnim, topAnim, from};
};
