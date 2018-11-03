/* @flow */
import React from 'react';
import { View } from 'react-native';
import NthHeader from './NthHeader';

type Props = {
  i18nHeader: string,
  onPress: () => void,
  children: any
};

const NthContainer = (props: Props) => {
  const { children, i18nHeader, onPress } = props;
  return (
    <View>
      <NthHeader
        i18n={i18nHeader}
        onPress={onPress}
      />
      <View style={{ padding: 20 }}>
        {children}
      </View>
    </View>
  );
};

export default NthContainer;
