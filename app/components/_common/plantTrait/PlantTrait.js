/* @flow */
import React from 'react';
import { Image, View } from 'react-native';
import NthText from '../NthText/NthText';
import styles from './plantTraitStyles';
import plantTypes from '../../../../data/plantTypes';

export type PlantTraits = 'colors' | 'lifeForms';

type Props = {
  type: PlantTraits,
  trait: string,
  withLabel?: boolean,
  withBorder?: boolean,
  multiline?: boolean
};

const PlantTrait = (props: Props) => {
  const {
    trait, withLabel, withBorder, type, multiline,
  } = props;
  const multilineStyle = multiline ? { flexDirection: 'column' } : {};
  const sizeProps = { size: multiline ? 'small' : 'regular' };
  const label = (
    <NthText
      {...sizeProps}
      i18n={`${type}.${trait}`}
      font="barlow"
      style={{ marginLeft: 8 }}
    />
  );
  const border = withBorder ? styles.withBorder : {};
  return (
    <View style={[styles.detailRow, styles.noMargin, multilineStyle]}>
      <Image
        source={plantTypes[type][trait].image}
        style={[styles.icon, border]}
      />
      {withLabel ? label : null}
    </View>
  );
};

PlantTrait.defaultProps = {
  withLabel: false,
  withBorder: false,
  multiline: false,
};

export default PlantTrait;
