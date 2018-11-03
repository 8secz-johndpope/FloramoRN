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

class EncyclopediaScreen extends Component<Props, State> {
  render() {
    const { navigation } = this.props;
    return (
      <View>
        <NthHeader
          i18n="navigation.title.encyclopedia"
          onPress={() => navigation.openDrawer()}
        />
        <NthContainer>
          <NthText text="Encyclopedia list goes here" />
        </NthContainer>
      </View>
    );
  }
}

export default EncyclopediaScreen;
