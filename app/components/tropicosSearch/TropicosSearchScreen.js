/* @flow */
import React, { Component } from 'react';
import NthText from '../_common/NthText/NthText';
import NthContainer from '../_common/NthHeader/NthContainer';

type Props = {
  navigation: Object
};
type State = {};

class TropicosSearchScreen extends Component<Props, State> {
  render() {
    const { navigation } = this.props;
    return (
      <NthContainer onPress={() => navigation.openDrawer()} i18nHeader="navigation.title.tropicos">
        <NthText text="Tropicos Search screen" />
      </NthContainer>
    );
  }
}

export default TropicosSearchScreen;
