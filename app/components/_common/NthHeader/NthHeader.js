/* @flow */
import React from 'react';
// import PropTypes from 'prop-types';
import { View } from 'react-native';
import styles from './nthHeaderStyles';
import NthHeaderButton from './NthHeaderButton';
import colors from '../../../styles/colors';
import NthText from '../NthText/NthText';
import deviceHelper from '../../../util/deviceHelper';
import type { HeaderType } from './NthHeaderButton';

type Props = {
  i18n?: ?string,
  text?: ?string,
  onPress?: ?() => void,
  type?: HeaderType
};

const NthHeader = (props: Props) => {
  const {
    onPress, i18n, text, type,
  } = props;
  const hasBackButton = onPress !== null;
  const otherStyles = hasBackButton ? styles.containerWithBackButton : {};
  const height = deviceHelper.isiPhoneX() ? 95 : 75;
  const textProps = {
    style: { paddingTop: 20 },
    size: 'title',
    weight: 'semiBold',
    font: 'barlow',
    color: colors.secondary50,
    i18n: undefined,
    text: undefined,
  };
  if (i18n) {
    textProps.i18n = i18n;
  }
  if (text) {
    textProps.text = text;
  }
  return (
    <View
      style={[
        { height, backgroundColor: colors.primary500 },
        styles.container,
        otherStyles,
      ]}
    >
      {hasBackButton ? <NthHeaderButton onPress={() => onPress && onPress()} type={type} /> : null}
      <NthText {...textProps} />
      {hasBackButton ? <View style={{ width: 35 }} /> : null}
    </View>
  );
};

NthHeader.defaultProps = {
  i18n: null,
  text: null,
  onPress: null,
  type: 'hamburger',
};

export default NthHeader;
