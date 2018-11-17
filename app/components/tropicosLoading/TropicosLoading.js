/* @flow */
import React from 'react';
import { View } from 'react-native';
import { scale } from 'react-native-size-matters';
import CardView from 'react-native-cardview';
import NthText from '../_common/NthText/NthText';
import colors from '../../styles/colors';

const TropicosLoading = () => (
  <View style={{
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: colors.overlayBackground,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9999,
  }}
  >
    <CardView
      cardElevation={8}
      cardMaxElevation={8}
      cornerRadius={5}
      style={{ backgroundColor: colors.white, padding: scale(40) }}
    >
      <NthText i18n="tropicosSearch.loading" multiline />
    </CardView>
  </View>
);
export default TropicosLoading;
