/* @flow */
import React, { Component } from 'react';
import { View } from 'react-native';
import NthContainer from '../_common/NthHeader/NthContainer';
import species from '../../../data/species';
import type { Plant } from '../../../data/plantTypes';
import appNavigation from '../../navigation/Routes';
import EncyclopediaList from './EncyclopediaList';

type Props = {
  navigation: Object
};
type State = {
  sortedSpecies: Array<Object>
};

class EncyclopediaScreen extends Component<Props, State> {
  onPlantPress(plant: Plant) {
    const { navigation } = this.props;
    navigation.navigate({
      ...appNavigation.navigationTree.detail,
      ...{ params: { plant, from: 'encyclopedia' } },
    });
  }

  render() {
    const { navigation } = this.props;
    return (
      <NthContainer
        onPress={() => navigation.openDrawer()}
        i18nHeader="navigation.title.encyclopedia"
        noPadding
      >
        <View style={{ flex: 1 }}>
          <EncyclopediaList
            plantList={species}
            onPlantPressed={plant => this.onPlantPress(plant)}
          />
        </View>
      </NthContainer>
    );
  }
}

export default EncyclopediaScreen;
