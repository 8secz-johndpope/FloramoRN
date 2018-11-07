/* @flow */
import React, { Component } from 'react';
import About from './About';

const image = require('../../../assets/images/about/paramo.jpg');

type Props = {
  navigation: Object
};
type State = {};

class AboutParamoScreen extends Component<Props, State> {
  render() {
    const { navigation } = this.props;
    return (
      <About
        image={image}
        type="paramo"
        navigation={navigation}
      />
    );
  }
}

export default AboutParamoScreen;
