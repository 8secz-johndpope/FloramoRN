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
  let headerComponent;
  if (i18nHeader) {
    headerComponent = <NthHeader i18n={i18nHeader} onPress={onPress} type={type} />;
  }
  if (header) {
    headerComponent = <NthHeader text={header} onPress={onPress} type={type} />;
  }
  return (
    <View style={{ flex: 1 }}>
      {headerComponent}
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
