/* @flow */
/* eslint-disable react/no-array-index-key */
import React, { Component } from 'react';
import {
  Dimensions, Image, ScrollView, TouchableOpacity, View,
} from 'react-native';
import FontAwesome5Pro from 'react-native-vector-icons/FontAwesome5Pro';
import { scale } from 'react-native-size-matters';
import NthText from '../_common/NthText/NthText';
import NthContainer from '../_common/NthHeader/NthContainer';
import colors from '../../styles/colors';
import type { Plant } from '../../../data/plantTypes';
import styles from './encyclopediaStyles';
import PlantColor from './PlantColor';
import PlantLifeForm from './PlantLifeForm';
import DetailImage from '../_common/DetailImage/DetailImage';
import NthCardView from '../_common/NthCardView/NthCardView';
import appConfig from '../../appConfig';
import appNavigation from '../../navigation/Routes';

type Props = {
  navigation: Object
};
type State = {
  overlayShown: boolean,
  index: number
}

const { width } = Dimensions.get('window');
const labelWidth = 95;

const getFullName = (plant: Plant) => `${plant.genus} ${plant.species}`;

const getLabel = label => (
  <NthText
    i18n={`plantDetails.${label}`}
    weight="semiBold"
    font="barlow"
    style={{ width: labelWidth }}
  />
);

const textRow = (label: string, value: string) => (
  <View key={`${label}_${value}`} style={styles.detailRow}>
    {getLabel(label)}
    <NthText text={value} font="barlow" />
  </View>
);

const i18nRow = (label: string, value: string) => (
  <View key={`${label}_${value}`} style={[styles.detailRow, styles.noMargin]}>
    {getLabel(label)}
    <NthText
      i18n={value}
      font="barlow"
      style={{ flex: 1 }}
      multiline
    />
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


class DetailScreen extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      overlayShown: false,
      index: 0,
    };
  }

  detailGallery(photos: Array<number>) {
    return (
      <NthCardView margin={{ bottom: scale(20) }}>
        <View style={{ flexDirection: 'row' }}>
          {photos.map((photo, i) => (
            <TouchableOpacity
              key={`photo_${i}`}
              onPress={() => this.openOverlay(i)}
            >
              <Image
                source={photo}
                style={{
                  width: 128,
                  height: 128,
                  marginRight: 16,
                }}
              />
            </TouchableOpacity>
          ))}
        </View>
      </NthCardView>
    );
  }

  closeOverlay() {
    this.setState({
      overlayShown: false,
    });
  }

  onPlantPressed() {
    const { navigation } = this.props;
    const { plant } = navigation.state.params;
    const url = `${appConfig.base_url}${plant.tropicosId}`;
    navigation.navigate({
      ...appNavigation.navigationTree.plantWebView,
      ...{ params: { url } },
    });
  }

  openOverlay(index: number) {
    this.setState({
      overlayShown: true,
      index,
    });
  }

  renderOverlay(plant: Plant) {
    const { index } = this.state;
    const imageSize = width - 20;
    return (
      <View style={{
        backgroundColor: colors.overlayBackground,
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        zIndex: 100,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      >
        <TouchableOpacity
          style={{ position: 'absolute', right: 15, top: 15 }}
          onPress={() => this.closeOverlay()}
        >
          <FontAwesome5Pro
            name="times"
            color={colors.primary300}
            size={60}
            light
          />
        </TouchableOpacity>
        <Image
          resizeMode="cover"
          source={plant.photos[index]}
          style={{ width: imageSize, height: imageSize }}
        />
      </View>
    );
  }

  render() {
    const { navigation } = this.props;
    const { overlayShown } = this.state;
    const { plant } = navigation.state.params;
    return (
      <NthContainer onPress={() => navigation.goBack()} header={getFullName(plant)} type="back" noPadding>
        {overlayShown ? this.renderOverlay(plant) : null}
        <View style={{ flex: 1 }}>
          <ScrollView>
            <DetailImage
              image={plant.detailImage}
              imageTitle={getFullName(plant)}
              onPress={() => this.onPlantPressed()}
            />
            <NthCardView margin={{ bottom: 0 }}>
              {textRow('family', plant.family)}
              {textRow('genus', plant.genus)}
              {textRow('species', plant.species)}
              {colorRow(plant.colors)}
              {lifeFormRow(plant.lifeForms)}
              {i18nRow('distribution', `plants.${plant.key}.distribution`)}
            </NthCardView>
            <NthCardView margin={{ bottom: 0 }}>
              <NthText i18n={`plants.${plant.key}.description`} multiline lineHeight={1.4} font="barlow" />
            </NthCardView>
            {this.detailGallery(plant.photos)}
          </ScrollView>
        </View>
      </NthContainer>
    );
  }
}

export default DetailScreen;
