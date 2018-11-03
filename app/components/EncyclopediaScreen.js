/* @flow */
import React, { Component } from 'react';
import { View, Button } from 'react-native';
import FontAwesome5Pro from 'react-native-vector-icons/FontAwesome5Pro';
import NthText from './_common/NthText/NthText';
import NthHeader from './_common/NthHeader/NthHeader';
import NthContainer from './_common/NthHeader/NthContainer';

type Props = {};
type State = {};

class EncyclopediaScreen extends Component<Props, State> {
  render() {
    return (
      <View>
        <NthHeader i18n="navigation.title.encyclopedia" />
        <NthContainer>
          <NthText text="Encyclopedia list goes here" />
          <Button
            onPress={() => this.props.navigation.navigate('Search')}
            title="Go to Search"
          />
          <Button
            onPress={() => this.props.navigation.openDrawer()}
            title="Open drawer"
          />
          <FontAwesome5Pro name="comments" light />
        </NthContainer>
      </View>
    );
  }
}

export default EncyclopediaScreen;
