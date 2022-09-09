import React from 'react';
import {View, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import style from './style';

const NavHeader = ({navList}) => {
  return (
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
  );
};

NavHeader.defaultProps = {
  navList: [],
};

export default NavHeader;
