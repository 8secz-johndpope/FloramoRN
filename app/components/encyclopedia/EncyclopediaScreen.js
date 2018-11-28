/* @flow */
import React, { Component } from 'react';
import { SectionList, View } from 'react-native';
import _ from 'lodash';
import NthContainer from '../_common/NthHeader/NthContainer';
import species from '../../../data/species';
import EncyclopediaItem from './EncyclopediaItem';
import colors from '../../styles/colors';
import type { Plant } from '../../../data/plantTypes';
import appNavigation from '../../navigation/Routes';
import NthText from '../_common/NthText/NthText';

type Props = {
  navigation: Object
};
type State = {
  sortedSpecies: Array<Object>
};


const sortPlantByName = (a, b) => {
  const aFullName = `${a.genus} ${a.species}`;
  const bFullName = `${b.genus} ${b.species}`;
  if (aFullName > bFullName) {
    return 1;
  }
  if (aFullName < bFullName) {
    return -1;
  }
  return 0;
};

const getAlphabeticalObject = (sortedSpecies) => {
  const tempSections = {};
  sortedSpecies.forEach((plant) => {
    const firstLetter = plant.genus[0];
    if (!tempSections[firstLetter]) {
      tempSections[firstLetter] = [];
    }
    tempSections[firstLetter].push(plant);
  });
  return tempSections;
};

const getAlphabeticalSections = (tempSections) => {
  const sections = [];
  Object.keys(tempSections).forEach((key) => {
    const obj = {
      title: key,
      data: tempSections[key],
    };
    sections.push(obj);
  });
  return sections;
};

const makeAlphabeticalSections = () => {
  const sortedSpecies = _.cloneDeep(species);
  sortedSpecies.sort((a, b) => sortPlantByName(a, b));
  const tempSections = getAlphabeticalObject(sortedSpecies);
  return getAlphabeticalSections(tempSections);
};

class EncyclopediaScreen extends Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      sortedSpecies: makeAlphabeticalSections(),
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
          <SectionList
            renderSectionHeader={({ section: { title } }) => (
              <NthText
                text={title}
                weight="black"
                size="title"
                style={{ backgroundColor: colors.primary200, padding: 12 }}
              />
            )}
            sections={sortedSpecies}
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
