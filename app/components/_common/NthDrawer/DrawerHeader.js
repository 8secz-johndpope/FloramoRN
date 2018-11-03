/* @flow */
import React, { Component } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { verticalScale } from 'react-native-size-matters';
import { Avatar } from 'react-native-elements';
import NthText from '../NthText/NthText';
import colors from '../../../styles/colors';

// eslint-disable-next-line quotes,import/no-unresolved
const icon = require("../../../../assets/images/drawer/icon.png");

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
        <Avatar
          rounded
          size="large"
          source={icon}
        />
        <NthText i18n="title" weight="bold" style={{ marginTop: verticalScale(10) }} />
      </LinearGradient>
    );
  }
}

export default DrawerHeader;
