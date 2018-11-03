/* @flow */
import React, { Component } from 'react';
import NthText from './_common/NthText/NthText';
import NthContainer from './_common/NthHeader/NthContainer';

type Props = {
  navigation: Object
};
type State = {};

class EncyclopediaScreen extends Component<Props, State> {
  render() {
    const { navigation } = this.props;
    return (
      <NthContainer onPress={() => navigation.openDrawer()} i18nHeader="navigation.title.encyclopedia">
        <NthText text="Encyclopedia list goes here" />
      </NthContainer>
    );
  }
}

export default EncyclopediaScreen;
