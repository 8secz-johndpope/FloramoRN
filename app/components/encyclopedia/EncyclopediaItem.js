/* eslint-disable react/no-array-index-key */
/* @flow */
import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { scale } from 'react-native-size-matters';
import NthText from '../_common/NthText/NthText';
import colors from '../../styles/colors';
import type { Plant } from '../../../data/plantTypes';
import PlantColor from './PlantColor';
import PlantLifeForm from './PlantLifeForm';

type Props = {
  plant: Plant,
  onPress: (Plant) => void
};

const EncyclopediaItem = (props: Props) => {
  const { plant, onPress } = props;
  return (
    <TouchableOpacity onPress={() => onPress(plant)}>
      <View style={{
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
            width: scale(72),
            height: scale(72),
          }}
        />
        <View style={{ marginLeft: 10 }}>
          <NthText text={`${plant.genus} ${plant.species}`} weight="semiBold" italic />
          <NthText text={plant.family} weight="light" italic />
          <View style={{ flexDirection: 'row', marginTop: 8 }}>
            {plant.lifeForms.map((lifeForm, i) => (
              <PlantLifeForm lifeForm={lifeForm} key={`lifeForm_${i}_${plant.id}`} />
            ))}
            {plant.colors.map((color, i) => (
              <PlantColor color={color} key={`color_${i}_${plant.id}`} />
            ))}
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default EncyclopediaItem;
