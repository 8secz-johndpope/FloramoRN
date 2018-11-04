/* @flow */
import React, { Component } from 'react';
import NthContainer from '../_common/NthHeader/NthContainer';
import About from './About';

type Props = {
  navigation: Object
};
type State = {};

class AboutParamoScreen extends Component<Props, State> {
  render() {
    const { navigation } = this.props;
    return (
      <NthContainer onPress={() => navigation.openDrawer()} i18nHeader="navigation.title.paramo">
        <About type="paramo" />
      </NthContainer>
    );
  }
}

export default AboutParamoScreen;
