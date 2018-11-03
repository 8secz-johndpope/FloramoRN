/* @flow */
import React, { Component } from 'react';
import {
  View, Button,
} from 'react-native';
import NthText from './_common/NthText/NthText';
import NthHeader from './_common/NthHeader/NthHeader';
import NthContainer from './_common/NthHeader/NthContainer';

type Props = {};
type State = {};

class SearchScreen extends Component<Props, State> {
  render() {
    return (
      <View>
        <NthHeader i18n="navigation.title.search" />
        <NthContainer>
          <NthText text="Search screen" />
          <Button
            onPress={() => this.props.navigation.goBack()}
            title="Go back home"
          />
          <Button
            onPress={() => this.props.navigation.openDrawer()}
            title="Open drawer"
          />
        </NthContainer>
      </View>
    );
  }
}

export default SearchScreen;
