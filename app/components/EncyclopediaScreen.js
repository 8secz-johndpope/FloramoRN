/* @flow */
import React, { Component } from 'react';
import {
  View, Button,
} from 'react-native';
import NthText from './_common/NthText/NthText';

type Props = {};
type State = {};

class EncyclopediaScreen extends Component<Props, State> {
  render() {
    return (
      <View style={{ marginTop: 50 }}>
        <NthText text="Encyclopedia list goes here" />
        <Button
          onPress={() => this.props.navigation.navigate('Search')}
          title="Go to Search"
        />
        <Button
          onPress={() => this.props.navigation.openDrawer()}
          title="Open drawer"
        />
      </View>
    );
  }
}

export default EncyclopediaScreen;
