/* @flow */
import React, { Component } from 'react';
import {
  View, Text, Image, Button,
} from 'react-native';

type Props = {};
type State = {};

class EncyclopediaScreen extends Component<Props, State> {
  render() {
    return (
      <View style={{ marginTop: 50 }}>
        <Text>Encyclopedia here</Text>
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
