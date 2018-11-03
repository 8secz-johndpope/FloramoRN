/* @flow */
import React from 'react';
import { View } from 'react-native';

type Props = {
  children: any
};

const NthContainer = (props: Props) => {
  const { children } = props;
  return (
    <View style={{ padding: 20 }}>
      {children}
    </View>
  );
};

export default NthContainer;
