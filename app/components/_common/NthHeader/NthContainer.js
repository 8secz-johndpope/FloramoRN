/* @flow */
import React from 'react';
import { View } from 'react-native';
import NthHeader from './NthHeader';
import type { HeaderType } from './NthHeaderButton';

type Props = {
  i18nHeader?: ?string,
  header?: ?string,
  onPress: () => void,
  children: any,
  noPadding?: boolean,
  type?: HeaderType
};

const NthContainer = (props: Props) => {
  const {
    children, i18nHeader, header, onPress, noPadding, type,
  } = props;
  const padding = noPadding ? 0 : 20;
  const headerProps = {
    onPress,
    type,
    i18n: undefined,
    text: undefined,
  };
  if (i18nHeader) {
    headerProps.i18n = i18nHeader;
  }
  if (header) {
    headerProps.text = header;
  }
  return (
    <View style={{ flex: 1 }}>
      <NthHeader {...headerProps} />
      <View style={{ padding, flex: 1 }}>
        {children}
      </View>
    </View>
  );
};

NthContainer.defaultProps = {
  i18nHeader: null,
  header: null,
  noPadding: false,
  type: 'hamburger',
};

export default NthContainer;
