/* @flow */
import React, { Component } from 'react';
import {
  View, Text, Image, Button,
} from 'react-native';

type Props = {};
type State = {};

class SearchScreen extends Component<Props, State> {
  render() {
    return (
      <View style={{ marginTop: 50 }}>
        <Text>Search here</Text>
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
