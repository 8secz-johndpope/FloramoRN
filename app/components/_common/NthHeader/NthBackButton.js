/* @flow */
import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import styles from './nthHeaderStyles';

// eslint-disable-next-line import/no-unresolved
const leftIcon = require('./images/btn_back.png');

type Props = { onPress: any };

const NthBackButton = (props: Props) => (
  <TouchableOpacity
    style={styles.backButton}
    onPress={() => props.onPress()}
  >
    <Image source={leftIcon} />
  </TouchableOpacity>
);

export default NthBackButton;
