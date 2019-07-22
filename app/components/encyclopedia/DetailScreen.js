/* @flow */
/* eslint-disable react/no-array-index-key */
import React, { Component } from 'react';
import {
  BackHandler, Dimensions, Image, ScrollView, TouchableOpacity, View,
} from 'react-native';
import _ from 'lodash';
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
      style={styles.flex1}
      multiline
    />
  </View>
);

const colorRow = (plantColors, plantLifeForms) => {
  const shouldShowColor = plantColors.length > 0 && plantLifeForms.indexOf('fern') === -1;
  return shouldShowColor ? (
    <View key="colors" style={styles.detailRow}>
      {getLabel('color')}
      {plantColors.map(color => (
        <PlantTrait type="colors" trait={color} key={`color_${color}`} />
      ))}
    </View>
  ) : null;
};

const lifeFormRow = plantLifeForms => (
  <View key="lifeForms" style={styles.detailRow}>
    {getLabel('lifeForm')}
    {plantLifeForms.map(lifeForm => (
      <PlantTrait type="lifeForms" trait={lifeForm} withLabel key={`lifeForm_${lifeForm}`} />
    ))}
  </View>
);

class DetailScreen extends Component<Props, State> {
  _didFocusSubscription;

  _willBlurSubscription;

  constructor(props: Props) {
    super(props);
    const { navigation } = this.props;
    const { plant } = navigation.state.params;
    this.state = {
      overlayShown: false,
      index: 0,
      totalPhotos: _.get(plant.photos, 'length', 0),
    };

    this._didFocusSubscription = props.navigation.addListener('didFocus', () => BackHandler.addEventListener('hardwareBackPress', this.onBackButtonPressAndroid));
  }

  componentDidMount() {
    this._willBlurSubscription = this.props.navigation.addListener('willBlur', () => BackHandler.removeEventListener('hardwareBackPress', this.onBackButtonPressAndroid));
  }

  onBackButtonPressAndroid = () => {
    const { overlayShown } = this.state;
    if (overlayShown) {
      this.closeOverlay();
      return true;
    }
    this.onBackPressed();
    return true;
  };

  componentWillUnmount() {
    this._didFocusSubscription && this._didFocusSubscription.remove();
    this._willBlurSubscription && this._willBlurSubscription.remove();
  }

  static getDerivedStateFromProps(nextProps) {
    const { navigation } = nextProps;
    const { plant } = navigation.state.params;
    return {
      totalPhotos: _.get(plant.photos, 'length', 0),
    };
  }

  closeOverlay() {
    this.setState({
      overlayShown: false,
    });
  }

  onPlantPressed() {
    const { navigation } = this.props;
    const { plant, from } = navigation.state.params;
    const url = `${appConfig.base_url}${plant.tropicosId}`;
    navigation.navigate({
      ...appNavigation.navigationTree.plantWebView,
      ...{ params: { url, plant, from } },
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
        <Image resizeMode="contain" source={photo} style={styles.galleryPhoto} />
      </TouchableOpacity>
    );
  }

  detailGallery(photos: Array<number>) {
    return (
      <NthCardView margin={{ bottom: scale(20) }}>
        <ScrollView horizontal style={styles.flexRow}>
          {photos.map((photo, i) => this.galleryPhoto(i, photo))}
        </ScrollView>
      </NthCardView>
    );
  }

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
    const { index, totalPhotos } = this.state;
    const imageSize = width - 20;

    return (
      <View style={styles.overlay}>
        {this.closeOverlayButton()}
        <NthText
          i18n="plantDetails.photoIndex"
          weight="semiBold"
          color={colors.secondary100}
          i18nParams={{ current: index + 1, total: totalPhotos }}
          style={{ marginBottom: 8 }}
        />
        <Image
          resizeMode="contain"
          source={plant.photos[index]}
          style={{ width: imageSize, height: imageSize }}
        />
        {this.prevPhotoButton(index)}
        {this.nextPhotoButton(index, totalPhotos)}
      </View>
    );
  }

  onBackPressed() {
    const { navigation } = this.props;
    const { from } = navigation.state.params;
    if (from === 'search') {
      navigation.navigate(appNavigation.navigationTree.search);
      return;
    }
    if (from === 'encyclopedia') {
      navigation.navigate(appNavigation.navigationTree.encyclopedia);
    }
  }

  render() {
    const { navigation } = this.props;
    const { overlayShown } = this.state;
    const { plant } = navigation.state.params;
    return (
      <NthContainer onPress={() => this.onBackPressed()} header={getFullName(plant)} type="back" noPadding>
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
            <NthCardView margin={{ bottom: 0 }}>
              {textRow('family', plant.family)}
              {textRow('genus', plant.genus)}
              {textRow('species', plant.species)}
              {colorRow(plant.colors, plant.lifeForms)}
              {lifeFormRow(plant.lifeForms)}
              {i18nRow('distribution', `plants.${plant.key}.distribution`)}
            </NthCardView>
            <NthCardView margin={{ bottom: 0 }}>
              <NthText i18n={`plants.${plant.key}.description`} multiline lineHeight={1.4} font="barlow" />
            </NthCardView>
            {this.detailGallery(plant.photos)}
          </ScrollView>
        </View>
        {overlayShown ? this.renderOverlay(plant) : null}
      </NthContainer>
    );
  }
}

export default DetailScreen;
