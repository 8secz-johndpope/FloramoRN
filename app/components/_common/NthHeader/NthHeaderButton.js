/* @flow */
import React from 'react';
import { TouchableOpacity } from 'react-native';
import FontAwesome5Pro from 'react-native-vector-icons/FontAwesome5Pro';
import styles from './nthHeaderStyles';
import colors from '../../../styles/colors';
import deviceHelper from '../../../util/deviceHelper';

export type HeaderType = 'back' | 'hamburger';

type Props = {
  onPress: any,
  type?: HeaderType
};

const NthHeaderButton = (props: Props) => {
  const { type } = props;
  const paddingTop = deviceHelper.isiPhoneX() ? 20 : 0;
  const icon = type === 'back' ? 'long-arrow-left' : 'bars';
  return (
    <TouchableOpacity
      style={[styles.backButton, { paddingTop }]}
      onPress={() => props.onPress()}
    >
      <FontAwesome5Pro
        name={icon}
        color={colors.secondary500}
        size={30}
        light
      />
    </TouchableOpacity>
  );
};

NthHeaderButton.defaultProps = {
  type: 'back',
};

export default NthHeaderButton;
