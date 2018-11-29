/* @flow */
import React, { Component } from 'react';
import { SectionList, View } from 'react-native';
import NthText from '../_common/NthText/NthText';
import colors from '../../styles/colors';
import EncyclopediaItem from './EncyclopediaItem';

type Props = {
  plantList: Array<Object>,
  onPlantPressed: (Object) => void
};

type State = {};

class EncyclopediaList extends Component<Props, State> {
  render() {
    const { plantList, onPlantPressed } = this.props;
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
        sections={plantList}
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
