/* @flow */
import React, { Component } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import NthText from '../NthText/NthText';
import colors from '../../../styles/colors';

class DrawerHeader extends Component<{}, {}> {
  render() {
    return (
      <LinearGradient
        colors={[colors.primary500, colors.primary300, colors.primary100]}
        style={{
          padding: 15,
          height: 150,
          justifyContent: 'flex-end',
        }}
      >
        <NthText text="Whatever" />
      </LinearGradient>
    );
  }
}

export default DrawerHeader;
