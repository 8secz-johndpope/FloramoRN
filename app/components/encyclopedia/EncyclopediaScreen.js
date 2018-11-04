/* @flow */
import React, { Component } from 'react';
import { FlatList, View } from 'react-native';
import NthContainer from '../_common/NthHeader/NthContainer';
import species from '../../../data/species';
import EncyclopediaItem from './EncyclopediaItem';
import colors from '../../styles/colors';

type Props = {
  navigation: Object
};
type State = {};

class EncyclopediaScreen extends Component<Props, State> {
  render() {
    const { navigation } = this.props;
    return (
      <NthContainer onPress={() => navigation.openDrawer()} i18nHeader="navigation.title.encyclopedia" noPadding>
        <View style={{ flex: 1 }}>
          <FlatList
            data={species}
            renderItem={({ item }) => <EncyclopediaItem plant={item} />}
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
