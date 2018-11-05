/* @flow */
import React from 'react';
import { Image, View } from 'react-native';
import plantTypes from '../../../data/plantTypes';
import styles from './encyclopediaStyles';
import NthText from '../_common/NthText/NthText';

type Props = {
  lifeForm: string,
  withLabel?: boolean
};

const PlantLifeForm = (props: Props) => {
  const { lifeForm, withLabel } = props;
  const border = withLabel ? {} : styles.lifeForm;
  const label = (<NthText i18n={`lifeForms.${lifeForm}`} font="barlow" style={{ marginLeft: 8 }} />);
  return (
    <View style={[styles.detailRow, styles.noMargin]}>
      <Image
        source={plantTypes.lifeForms[lifeForm].image}
        style={[styles.icon, border]}
      />
      {withLabel ? label : null}
    </View>
  );
};

PlantLifeForm.defaultProps = {
  withLabel: false,
};

export default PlantLifeForm;
