/* @flow */
import React from 'react';
import { TouchableOpacity } from 'react-native';
import colors from '../../../styles/colors';
import deviceHelper from '../../../util/deviceHelper';
import NthIcon from '../NthIcon/NthIcon';
import styles from './nthHeaderStyles';

export type HeaderType = 'back' | 'hamburger';

type Props = {
  onPress: any,
  type?: HeaderType
};

const NthHeaderButton = (props: Props) => {
  const { type } = props;
  const paddingTop = deviceHelper.isiPhone() ? 15 : 20;
  const icon = type === 'back' ? 'long-arrow-left' : 'bars';
  return (
    <TouchableOpacity
      style={[styles.backButton, { paddingTop }]}
      onPress={() => props.onPress()}
    >
      <NthIcon
        name={icon}
        color={colors.secondary50}
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
