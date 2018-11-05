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
  let textComponent;
  if (i18n) {
    textComponent = (
      <NthText
        i18n={i18n}
        style={{ paddingTop: 20 }}
        size="title"
        uppercase
        weight="bold"
        font="barlow"
        color={colors.secondary500}
      />
    );
  }
  if (text) {
    textComponent = (
      <NthText
        text={text}
        style={{ paddingTop: 20 }}
        uppercase
        weight="bold"
        font="barlow"
        size="regular"
        color={colors.secondary500}
      />
    );
  }
  return (
    <View
      style={[
        {
          height,
          backgroundColor: colors.primary900,
        },
        styles.container,
        otherStyles,
      ]}
    >
      {hasBackButton ? <NthHeaderButton onPress={() => onPress && onPress()} type={type} /> : null}
      {textComponent}
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
