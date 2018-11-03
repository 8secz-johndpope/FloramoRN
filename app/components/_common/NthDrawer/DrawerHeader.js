/* @flow */
import React, { Component } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { verticalScale } from 'react-native-size-matters';
import NthText from '../NthText/NthText';
import colors from '../../../styles/colors';

class DrawerHeader extends Component<{}, {}> {
  render() {
    return (
      <LinearGradient
        colors={[colors.primary700, colors.primary500, colors.primary300, colors.primary100]}
        style={{
          paddingBottom: verticalScale(15),
          height: verticalScale(150),
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}
      >
        <NthText i18n="title" weight="bold" />
      </LinearGradient>
    );
  }
}

export default DrawerHeader;
