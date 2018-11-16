/* @flow */
import React, { Component } from 'react';
import { View } from 'react-native';
import NthText from '../_common/NthText/NthText';

type Props = {
  results: any
};
type State = {};

class TropicosResults extends Component<Props, State> {
  render() {
    const { results } = this.props;
    return (
      <View>
        <NthText text="Results here" />
        <NthText text={JSON.stringify(results)} multiline />
      </View>
    );
  }
}

export default TropicosResults;
