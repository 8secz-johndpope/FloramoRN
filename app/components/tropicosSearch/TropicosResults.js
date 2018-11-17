/* @flow */
import _ from 'lodash';
import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import NthText from '../_common/NthText/NthText';
import colors from '../../styles/colors';

type Props = {
  results: any
};
type State = {};

class TropicosResults extends Component<Props, State> {
  getItem(plant: Object) {
    return (
      <View style={{ padding: 20 }}>
        <View style={{ flexDirection: 'row', marginBottom: 4 }}>
          <NthText weight="bold" text={plant.ScientificName} font="barlow" />
          <NthText text={plant.Author} font="barlow" style={{ marginLeft: 8 }} />
        </View>
        <NthText text={plant.Family} font="barlow" />
      </View>
    );
  }

  render() {
    const { results } = this.props;
    let fixedResults = _.cloneDeep(results);
    let totalRows = 0;
    let i18n = 'tropicosSearch.results';
    if (fixedResults.length === 1 && fixedResults[0].Error) {
      fixedResults = [];
    } else {
      totalRows = fixedResults[0].TotalRows;
      if (totalRows === fixedResults.length) {
        i18n = 'tropicosSearch.results.all';
      }
    }
    return (
      <View style={{ flex: 1 }}>
        <NthText
          i18n={i18n}
          i18nParams={{ count: totalRows, max: fixedResults.length }}
          style={{ padding: 20 }}
          multiline
        />
        <FlatList
          data={fixedResults}
          renderItem={({ item }) => this.getItem(item)}
          keyExtractor={item => item.NameId}
          ItemSeparatorComponent={({ highlighted }) => (
            <View style={[{ backgroundColor: colors.primary200, width: '100%', height: 1 }, highlighted && { marginLeft: 0 }]} />
          )}
        />
      </View>
    );
  }
}

export default TropicosResults;
