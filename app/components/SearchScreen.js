/* @flow */
import React, { Component } from 'react';
import { View } from 'react-native';
import NthText from './_common/NthText/NthText';
import NthHeader from './_common/NthHeader/NthHeader';
import NthContainer from './_common/NthHeader/NthContainer';

type Props = {
  navigation: Object
};
type State = {};

class SearchScreen extends Component<Props, State> {
  render() {
    const { navigation } = this.props;
    return (
      <View>
        <NthHeader
          i18n="navigation.title.search"
          onPress={() => navigation.openDrawer()}
        />
        <NthContainer>
          <NthText text="Search screen" />
        </NthContainer>
      </View>
    );
  }
}

export default SearchScreen;
