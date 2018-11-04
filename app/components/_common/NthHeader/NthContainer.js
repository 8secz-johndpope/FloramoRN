/* @flow */
import React from 'react';
import { View } from 'react-native';
import NthHeader from './NthHeader';
import type { HeaderType } from './NthHeaderButton';

type Props = {
  i18nHeader: string,
  onPress: () => void,
  children: any,
  noPadding?: boolean,
  type?: HeaderType
};

const NthContainer = (props: Props) => {
  const {
    children, i18nHeader, onPress, noPadding, type,
  } = props;
  const padding = noPadding ? 0 : 20;
  return (
    <View style={{ flex: 1 }}>
      <NthHeader
        i18n={i18nHeader}
        onPress={onPress}
        type={type}
      />
      <View style={{ padding, flex: 1 }}>
        {children}
      </View>
    </View>
  );
};

NthContainer.defaultProps = {
  noPadding: false,
  type: 'hamburger',
};

export default NthContainer;
