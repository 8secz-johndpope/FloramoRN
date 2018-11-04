/* @flow */
import React, { Component } from 'react';
import NthContainer from '../_common/NthHeader/NthContainer';
import About from './About';

type Props = {
  navigation: Object
};
type State = {};

class AboutAppScreen extends Component<Props, State> {
  render() {
    const { navigation } = this.props;
    return (
      <NthContainer onPress={() => navigation.openDrawer()} i18nHeader="navigation.title.app">
        <About type="app" />
      </NthContainer>
    );
  }
}

export default AboutAppScreen;
