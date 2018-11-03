/* @flow */
import React, { Component } from 'react';
import {
  View, Button,
} from 'react-native';
import NthText from './_common/NthText/NthText';

type Props = {};
type State = {};

class SearchScreen extends Component<Props, State> {
  render() {
    return (
      <View style={{ marginTop: 50 }}>
        <NthText text="Search screen" />
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Go back home"
        />
        <Button
          onPress={() => this.props.navigation.openDrawer()}
          title="Open drawer"
        />
      </View>
    );
  }
}

export default SearchScreen;
