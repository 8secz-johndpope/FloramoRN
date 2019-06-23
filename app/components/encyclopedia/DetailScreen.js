/* @flow */
/* eslint-disable react/no-array-index-key */
import React, { Component } from 'react';
import { Dimensions, Image, ScrollView, TouchableOpacity, View, } from 'react-native';
import { scale } from 'react-native-size-matters';
import type { Plant } from '../../../data/plantTypes';
import appConfig from '../../appConfig';
import appNavigation from '../../navigation/Routes';
import colors from '../../styles/colors';
import DetailImage from '../_common/DetailImage/DetailImage';
import NthCardView from '../_common/NthCardView/NthCardView';
import NthContainer from '../_common/NthHeader/NthContainer';
import NthIcon from '../_common/NthIcon/NthIcon';
import NthText from '../_common/NthText/NthText';
import PlantTrait from '../_common/plantTrait/PlantTrait';
import styles from './encyclopediaStyles';

const tropicosLogo = require('../../../assets/images/drawer/solid/tropicos.png');

type Props = {
  navigation: Object
};
type State = {
  overlayShown: boolean,
  index: number
}

const {width} = Dimensions.get('window');
const labelWidth = 95;

const getFullName = (plant: Plant) => `${plant.genus} ${plant.species}`;

const getLabel = label => (
  <NthText
    i18n={`plantDetails.${label}`}
    weight="semiBold"
    font="barlow"
    style={{width: labelWidth}}
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
      style={styles.flex1}
      multiline
    />
  </View>
);

const colorRow = plantColors => plantColors.length > 0 ? (
  <View key="colors" style={styles.detailRow}>
    {getLabel('color')}
    {plantColors.map(color => (
      <PlantTrait type="colors" trait={color} key={`color_${color}`} />
    ))}
  </View>
) : null;

const lifeFormRow = plantLifeForms => (
  <View key="lifeForms" style={styles.detailRow}>
    {getLabel('lifeForm')}
    {plantLifeForms.map(lifeForm => (
      <PlantTrait type="lifeForms" trait={lifeForm} withLabel key={`lifeForm_${lifeForm}`} />
    ))}
  </View>
);

class DetailScreen extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    const {navigation} = this.props;
    const {plant} = navigation.state.params;
    this.state = {
      overlayShown: false,
      index: 0,
      totalPhotos: plant.photos.length
    };
  }

  static getDerivedStateFromProps(nextProps) {
    const {navigation} = nextProps;
    const {plant} = navigation.state.params;
    return {
      totalPhotos: plant.photos.length
    };
  }

  closeOverlay() {
    this.setState({
      overlayShown: false,
    });
  }

  onPlantPressed() {
    const {navigation} = this.props;
    const {plant} = navigation.state.params;
    const url = `${appConfig.base_url}${plant.tropicosId}`;
    navigation.navigate({
      ...appNavigation.navigationTree.plantWebView,
      ...{params: {url, plant}},
    });
  }

  openOverlay(index: number) {
    this.setState({
      overlayShown: true,
      index,
    });
  }

  galleryPhoto(i, photo) {
    return (
      <TouchableOpacity
        key={`photo_${i}`}
        onPress={() => this.openOverlay(i)}
      >
        <Image source={photo} style={styles.galleryPhoto} />
      </TouchableOpacity>
    )
  }

  detailGallery(photos: Array<number>) {
    return (
      <NthCardView margin={{bottom: scale(20)}}>
        <ScrollView horizontal style={styles.flexRow}>
          {photos.map((photo, i) => this.galleryPhoto(i, photo))}
        </ScrollView>
      </NthCardView>
    );
  };

  closeOverlayButton() {
    return (
      <TouchableOpacity
        style={[styles.overlayButton, styles.overlayButtonTop, styles.overlayButtonRight]}
        onPress={() => this.closeOverlay()}
      >
        <NthIcon
          name="times"
          color={colors.primary300}
          size={60}
          light
        />
      </TouchableOpacity>
    );
  }

  nextPhotoButton(index, totalPhotos) {
    return index < totalPhotos - 1 ? (
      <TouchableOpacity
        style={[styles.overlayButton, styles.overlayButtonBottom, styles.overlayButtonRight]}
        onPress={() => this.openOverlay(index + 1)}
      >
        <NthIcon
          name="arrow-square-right"
          color={colors.primary300}
          size={50}
          solid
        />
      </TouchableOpacity>
    ) : null;
  }

  prevPhotoButton(index) {
    return index > 0 ? (
      <TouchableOpacity
        style={[styles.overlayButton, styles.overlayButtonBottom, styles.overlayButtonLeft]}
        onPress={() => this.openOverlay(index - 1)}
      >
        <NthIcon
          name="arrow-square-left"
          color={colors.primary300}
          size={50}
          solid
        />
      </TouchableOpacity>
    ) : null;
  }

  renderOverlay(plant: Plant) {
    const {index, totalPhotos} = this.state;
    const imageSize = width - 20;

    return (
      <View style={styles.overlay}>
        {this.closeOverlayButton()}
        <NthText
          i18n="plantDetails.photoIndex"
          weight="semiBold"
          color={colors.secondary100}
          i18nParams={{current: index + 1, total: totalPhotos}}
          style={{marginBottom: 8}}
        />
        <Image
          resizeMode="cover"
          source={plant.photos[index]}
          style={{width: imageSize, height: imageSize}}
        />
        {this.prevPhotoButton(index)}
        {this.nextPhotoButton(index, totalPhotos)}
      </View>
    );
  }

  render() {
    const {navigation} = this.props;
    const {overlayShown} = this.state;
    const {plant} = navigation.state.params;
    return (
      <NthContainer onPress={() => navigation.goBack()} header={getFullName(plant)} type="back" noPadding>
        {overlayShown ? this.renderOverlay(plant) : null}
        <View style={styles.flex1}>
          <ScrollView>
            <DetailImage
              image={plant.detailImage}
              imageTitle={getFullName(plant)}
            />
            <TouchableOpacity
              onPress={() => this.onPlantPressed(plant)}
              style={styles.tropicosButton}
            >
              <Image source={tropicosLogo} style={styles.tropicosLogo} />
              <NthText i18n="plantDetails.tropicos" />
            </TouchableOpacity>
            <NthCardView margin={{bottom: 0}}>
              {textRow('family', plant.family)}
              {textRow('genus', plant.genus)}
              {textRow('species', plant.species)}
              {colorRow(plant.colors)}
              {lifeFormRow(plant.lifeForms)}
              {i18nRow('distribution', `plants.${plant.key}.distribution`)}
            </NthCardView>
            <NthCardView margin={{bottom: 0}}>
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
