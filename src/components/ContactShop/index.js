import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {scaleSize, setSpText} from '../../utils/calc';

const ContactShop = () => {
  return (
    <View style={style.contactShopContainer}>
      <View>
        <Image
          style={style.iconLocation}
          source={require('../../assets/images/icon-shape.png')}
        />
      </View>
      <View>
        <Text style={style.text}>
          Dongcheng District Metro Cultural Building
        </Text>
      </View>
      <View>
        <Image
          style={style.iconPhone}
          source={require('../../assets/images/icon-phone.png')}
        />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  contactShopContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: '#FFEDED',
    paddingTop: scaleSize(30),
    paddingBottom: scaleSize(50),
  },
  iconLocation: {
    width: scaleSize(50),
    height: scaleSize(68),
  },
  text: {
    width: scaleSize(456),
    fontSize: setSpText(28),
    fontWeight: '600',
    fontFamily: 'PingFang SC',
    color: '#606060',
  },
  iconPhone: {
    width: scaleSize(66),
    height: scaleSize(66),
  },
});

export default ContactShop;
