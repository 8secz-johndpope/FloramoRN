/* @flow */
import React from 'react';
import { View } from 'react-native';
import NthHeader from './NthHeader';

type Props = {
  i18nHeader: string,
  onPress: () => void,
  children: any,
  noPadding?: boolean
};

const NthContainer = (props: Props) => {
  const {
    children, i18nHeader, onPress, noPadding,
  } = props;
  const padding = noPadding ? 0 : 20;
  return (
    <View style={{ flex: 1 }}>
      <NthHeader
        i18n={i18nHeader}
        onPress={onPress}
      />
      <View style={{ padding, flex: 1 }}>
        {children}
      </View>
    </View>
  );
};

NthContainer.defaultProps = {
  noPadding: false,
};

export default NthContainer;
