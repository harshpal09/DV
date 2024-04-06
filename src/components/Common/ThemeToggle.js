import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import Animated, { useAnimatedStyle, useSharedValue, withTiming, withDelay } from 'react-native-reanimated';
import { globalStyles } from './Styles';
import { useMMKV } from '../../context/MMKVContext.js';
import { useDispatch, useSelector } from 'react-redux';
import { setTranslateX } from '../../store/modules/UserDetailsSlice.js';

export default function ThemeToggle() {
  const [parentWidth, setParentWidth] = useState(0);
  const translateX = useSelector((s)=> s.user.translateX)
  const toggleDimensions = 20;
  const {theme, updateTheme} = useMMKV();
  const dispatch = useDispatch();
  // console.log("transhhhhh redux =>",transX)
  const handlePress = () => {
    const handleTheme = () => {
        let obj = {
            isDark: !theme.isDark,
        }
        updateTheme(obj)
    
      };
      handleTheme();
      let tempX = translateX
      tempX == 0 ? (tempX += parentWidth) : (tempX -= parentWidth);
    dispatch(setTranslateX(tempX));
  };

  const animatedStyles = useAnimatedStyle(() => {
    const backgroundColor = translateX > parentWidth / 2 ? 'gray' : '#FDB813';
    return {
      transform: [{ translateX: withTiming(translateX, { duration: 500 }) }],
      backgroundColor,
    };
  });

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onLayout={(e) => setParentWidth(e.nativeEvent.layout.width - 30)}
      onPress={handlePress}
      style={[{
        
        width: '100%',
        backgroundColor: 'white',
        marginTop: 20,
        paddingHorizontal: 5,
        paddingVertical: 2.5,
        borderRadius: 40,
      },
      ]}>
      <Animated.View
        style={[
          { width: toggleDimensions, height: toggleDimensions, borderRadius: 50 },
          animatedStyles,
        ]}>
      </Animated.View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});
