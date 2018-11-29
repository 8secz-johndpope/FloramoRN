/* @flow */
import React, { Component } from 'react';
import { SectionList, View } from 'react-native';
import _ from 'lodash';
import NthText from '../_common/NthText/NthText';
import colors from '../../styles/colors';
import EncyclopediaItem from './EncyclopediaItem';

type Props = {
  plantList: Array<Object>,
  onPlantPressed: (Object) => void
};

type State = {};

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

const makeAlphabeticalSections = (species) => {
  const sortedSpecies = _.cloneDeep(species);
  sortedSpecies.sort((a, b) => sortPlantByName(a, b));
  const tempSections = getAlphabeticalObject(sortedSpecies);
  return getAlphabeticalSections(tempSections);
};

class EncyclopediaList extends Component<Props, State> {
  render() {
    const { plantList, onPlantPressed } = this.props;
    const sortedPlantList = makeAlphabeticalSections(plantList);
    return (
      <SectionList
        renderSectionHeader={({ section: { title } }) => (
          <NthText
            text={title}
            weight="black"
            size="title"
            style={{ backgroundColor: colors.primary200, padding: 12 }}
          />
        )}
        sections={sortedPlantList}
        renderItem={({ item }) => (
          <EncyclopediaItem
            plant={item}
            onPress={plant => onPlantPressed(plant)}
          />
        )}
        ItemSeparatorComponent={({ highlighted }) => (
          <View
            style={[{ backgroundColor: colors.primary200, width: '100%', height: 1 }, highlighted && { marginLeft: 0 }]}
          />
        )}
      />
    );
  }
}

export default EncyclopediaList;
