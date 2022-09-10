import React from 'react';
import {View, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {BoxShadow} from 'react-native-shadow';
import {getShadowOpt} from '../../mock/shadowOpts';
import style from './style';

const NavHeader = ({navList}) => {
  const shadowOpt = getShadowOpt({width: 750, height: 146});
  return (
    <BoxShadow setting={shadowOpt}>
      <View style={style.headerWrapper}>
        <LinearGradient
          colors={['#FF5D79', '#FD003C']}
          style={style.linearGradient}>
          {navList.length
            ? navList.map(item => (
                <View style={style.iconWrapper} key={item.id}>
                  <Image style={style[item.styleName]} source={item.source} />
                  {item.isActive ? <View style={style.bar} /> : null}
                </View>
              ))
            : null}
        </LinearGradient>
      </View>
    </BoxShadow>
  );
};

NavHeader.defaultProps = {
  navList: [],
};

export default NavHeader;
