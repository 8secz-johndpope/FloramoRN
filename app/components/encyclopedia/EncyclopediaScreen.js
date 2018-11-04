/* @flow */
import React, { Component } from 'react';
import { FlatList, View } from 'react-native';
import _ from 'lodash';
import NthContainer from '../_common/NthHeader/NthContainer';
import species from '../../../data/species';
import EncyclopediaItem from './EncyclopediaItem';
import colors from '../../styles/colors';
import type { Plant } from '../../../data/plantTypes';
import appNavigation from '../../navigation/Routes';

type Props = {
  navigation: Object
};
type State = {
  sortedSpecies: Array<Plant>
};

class EncyclopediaScreen extends Component<Props, State> {
  constructor(props: any) {
    super(props);
    const sortedSpecies = _.cloneDeep(species);
    sortedSpecies.sort((a, b) => {
      const aFullName = `${a.gender} ${a.name}`;
      const bFullName = `${b.gender} ${b.name}`;
      if (aFullName > bFullName) {
        return 1;
      }
      if (aFullName < bFullName) {
        return -1;
      }
      return 0;
    });
    this.state = {
      sortedSpecies,
    };
  }

  onPlantPress(plant: Plant) {
    const { navigation } = this.props;
    navigation.navigate({
      ...appNavigation.navigationTree.detail,
      ...{ params: { plant } },
    });
  }

  render() {
    const { navigation } = this.props;
    const { sortedSpecies } = this.state;
    return (
      <NthContainer onPress={() => navigation.openDrawer()} i18nHeader="navigation.title.encyclopedia" noPadding>
        <View style={{ flex: 1 }}>
          <FlatList
            data={sortedSpecies}
            renderItem={({ item }) => (
              <EncyclopediaItem
                plant={item}
                onPress={plant => this.onPlantPress(plant)}
              />
            )}
            ItemSeparatorComponent={({ highlighted }) => (
              <View style={[{ backgroundColor: colors.primary200, width: '100%', height: 1 }, highlighted && { marginLeft: 0 }]} />
            )}
          />
        </View>
      </NthContainer>
    );
  }
}

export default EncyclopediaScreen;
