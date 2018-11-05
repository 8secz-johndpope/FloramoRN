/* @flow */
import React from 'react';
import {
  View, Image, ScrollView,
} from 'react-native';
import { verticalScale } from 'react-native-size-matters';
import { Card, Text } from 'react-native-elements';
import NthText from '../_common/NthText/NthText';
import NthContainer from '../_common/NthHeader/NthContainer';
import colors from '../../styles/colors';
import type { Plant } from '../../../data/plantTypes';
import styles from './encyclopediaStyles';
import PlantColor from './PlantColor';
import PlantLifeForm from './PlantLifeForm';

type Props = {
  navigation: Object
};

const labelWidth = 90;

const getFullName = (plant: Plant) => `${plant.gender} ${plant.name}`;

const getDetailImage = (plant: Plant) => (
  <View style={{ height: verticalScale(200), overflow: 'hidden' }}>
    <Image
      resizeMode="cover"
      source={plant.detailImage}
      style={{
        width: '100%', backgroundColor: 'pink', bottom: 0, position: 'absolute',
      }}
    />
    <NthText
      shadow
      text={getFullName(plant)}
      color={colors.primary50}
      size="title"
      font="barlow"
      style={{
        position: 'absolute',
        bottom: 10,
        right: 10,
      }}
    />
  </View>
);

const getLabel = label => <NthText i18n={`plantDetails.${label}`} weight="semiBold" font="barlow" style={{ width: labelWidth }} />;

const textRow = (label: string, value: string) => (
  <View key={`${label}_${value}`} style={styles.detailRow}>
    {getLabel(label)}
    <NthText text={value} font="barlow" />
  </View>
);

const i18nRow = (label: string, value: string) => (
  <View key={`${label}_${value}`} style={[styles.detailRow, styles.noMargin]}>
    {getLabel(label)}
    <NthText i18n={value} style={{ flex: 1 }} font="barlow" />
  </View>
);

const colorRow = plantColors => (
  <View key="colors" style={styles.detailRow}>
    {getLabel('color')}
    {plantColors.map(color => (
      <PlantColor color={color} key={`color_${color}`} />
    ))}
  </View>
);

const lifeFormRow = plantLifeForms => (
  <View key="lifeForms" style={styles.detailRow}>
    {getLabel('lifeForm')}
    {plantLifeForms.map(lifeForm => (
      <PlantLifeForm lifeForm={lifeForm} withLabel key={`lifeForm_${lifeForm}`} />
    ))}
  </View>
);

const DetailScreen = (props: Props) => {
  const { navigation } = props;
  const { plant } = navigation.state.params;
  return (
    <NthContainer onPress={() => navigation.goBack()} header={getFullName(plant)} type="back" noPadding>
      <View style={{ flex: 1 }}>
        <ScrollView>
          {getDetailImage(plant)}
          <Card>
            {textRow('family', plant.family)}
            {textRow('genus', plant.gender)}
            {textRow('species', plant.name)}
            {colorRow(plant.colors)}
            {lifeFormRow(plant.lifeForms)}
            {i18nRow('distribution', `plants.${plant.key}.distribution`)}
          </Card>
          <Card>
            <NthText i18n={`plants.${plant.key}.description`} multiline lineHeight={1.4} />
          </Card>
        </ScrollView>
      </View>
    </NthContainer>
  );
};

export default DetailScreen;
