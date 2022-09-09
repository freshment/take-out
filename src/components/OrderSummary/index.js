import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {scaleSize, setSpText} from '../../utils/calc';

const OrderSummary = ({totalPrice}) => {
  return (
    <View style={style.orderSummaryContainer}>
      <View style={style.priceWrapper}>
        <Text style={[style.price, style.totalPrice]}>{totalPrice}</Text>
        <Text style={[style.price, style.priceSymbol]}>$</Text>
      </View>
      <LinearGradient colors={['#FF5D79', '#FD003C']}>
        <View style={style.payButton}>
          <Text style={style.payText}>Pay</Text>
        </View>
      </LinearGradient>
    </View>
  );
};

const style = StyleSheet.create({
  orderSummaryContainer: {
    width: scaleSize(750),
    height: scaleSize(130),
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  priceWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: scaleSize(40),
  },
  price: {
    color: '#4F4F4F',
    fontWeight: '600',
  },
  totalPrice: {
    fontSize: setSpText(88),
  },
  priceSymbol: {
    fontSize: setSpText(54),
    marginTop: scaleSize(13),
  },
  payButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: scaleSize(286),
    height: scaleSize(130),
  },
  payText: {
    fontSize: setSpText(64),
    fontWeight: '600',
    color: '#fff',
  },
});

export default OrderSummary;
