/* eslint-disable react/prop-types */
/* @flow */
import React from 'react';
import { SectionList, View } from 'react-native';
import _ from 'lodash';
import { verticalScale } from 'react-native-size-matters';
import NthText from '../_common/NthText/NthText';
import colors from '../../styles/colors';
import EncyclopediaItem from './EncyclopediaItem';

type Props = {
  plantList: Array<Object>,
  i18nHeader?: string,
  i18nHeaderParams?: Object,
  onPlantPressed: (Object) => void
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

const makeAlphabeticalSections = (species) => {
  const sortedSpecies = _.cloneDeep(species);
  sortedSpecies.sort((a, b) => sortPlantByName(a, b));
  const tempSections = getAlphabeticalObject(sortedSpecies);
  return getAlphabeticalSections(tempSections);
};

const getSectionHeader = ({ section: { title } }) => (
  <NthText
    text={title}
    weight="black"
    size="title"
    style={{ backgroundColor: colors.primary200, padding: 12 }}
  />
);

const getItemSeparator = ({ highlighted }) => (
  <View
    style={[{ backgroundColor: colors.primary100, width: '100%', height: 1 }, highlighted && { marginLeft: 0 }]}
  />
);

const EncyclopediaList = (props: Props) => {
  const {
    plantList, onPlantPressed, i18nHeader, i18nHeaderParams,
  } = props;
  const sortedPlantList = makeAlphabeticalSections(plantList);
  const listHeaderProps = i18nHeader && plantList.length > 0 ? {
    ListHeaderComponent: (<NthText
      i18n={i18nHeader}
      i18nParams={i18nHeaderParams}
      style={{ padding: 16 }}
    />),
  } : {};
  return (
    <SectionList
      {...listHeaderProps}
      renderSectionHeader={getSectionHeader}
      ListEmptyComponent={(
        <View style={{ paddingVertical: verticalScale(100), paddingHorizontal: '10%' }}>
          <NthText i18n="search.noResults" weight="extraBold" align="center" />
        </View>
      )}
      sections={sortedPlantList}
      renderItem={({ item }) => (
        <EncyclopediaItem
          plant={item}
          onPress={plant => onPlantPressed(plant)}
        />
      )}
      ItemSeparatorComponent={getItemSeparator}
    />
  );
};

EncyclopediaList.defaultProps = {
  i18nHeader: undefined,
  i18nHeaderParams: {},
};

export default EncyclopediaList;
