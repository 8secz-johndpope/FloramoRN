/* @flow */
import React from 'react';
import { View, Image } from 'react-native';
import { scale } from 'react-native-size-matters';
import NthText from '../_common/NthText/NthText';
import colors from '../../styles/colors';
import type { Plant } from '../../../data/plantTypes';
import plantTypes from '../../../data/plantTypes';

type Props = {
  plant: Plant
};

const EncyclopediaItem = (props: Props) => {
  const { plant } = props;
  return (
    <View style={{
      borderBottomWidth: 1,
      borderBottomColor: colors.primary100,
      padding: 15,
      flexDirection: 'row',
    }}
    >
      <Image
        source={plant.thumbnail}
        style={{
          borderRadius: 10,
          borderWidth: 2,
          borderColor: colors.primary500,
          width: scale(56),
          height: scale(56),
        }}
      />
      <View style={{ marginLeft: 10 }}>
        <NthText text={`${plant.gender} ${plant.name}`} weight="semiBold" italic size="small" />
        <NthText text={plant.family} weight="light" italic size="small" />
        <View style={{ flexDirection: 'row' }}>
          {plant.colors.map((color, i) => (<Image key={`color_${i}_${plant.id}`} source={plantTypes.colors[color].image} />))}
          {plant.lifeForms.map((lifeForm, i) => (<Image key={`lifeForm${i}_${plant.id}`} source={plantTypes.lifeForms[lifeForm].image} />))}
        </View>
      </View>
    </View>
  );
};

export default EncyclopediaItem;
