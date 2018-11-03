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
  i18n: string,
  onPress?: ?() => void,
  type?: HeaderType
};

const NthHeader = (props: Props) => {
  const { onPress, i18n, type } = props;
  const hasBackButton = onPress !== null;
  const otherStyles = hasBackButton ? styles.containerWithBackButton : {};
  const height = deviceHelper.isiPhoneX() ? 95 : 75;
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
      <NthText
        i18n={i18n}
        style={{ paddingTop: 20 }}
        uppercase
        weight="bold"
        font="barlow"
        size="regular"
        color={colors.secondary500}
      />
      {hasBackButton ? <View style={{ width: 35 }} /> : null}
    </View>
  );
};

NthHeader.defaultProps = {
  onPress: null,
  type: 'hamburger',
};

export default NthHeader;
