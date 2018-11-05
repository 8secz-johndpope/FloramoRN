/* @flow */
import React from 'react';
import { Image } from 'react-native';
import plantTypes from '../../../data/plantTypes';
import styles from './encyclopediaStyles';

type Props = {
  color: string,
};

const PlantColor = (props: Props) => {
  const { color } = props;
  return (
    <Image
      source={plantTypes.colors[color].image}
      style={styles.icon}
    />
  );
};
export default PlantColor;
