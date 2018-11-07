/* @flow */
import React, { Component } from 'react';
import About from './About';

const image = require('../../../assets/images/about/cajas.jpg');

type Props = {
  navigation: Object
};
type State = {};

class AboutCajasScreen extends Component<Props, State> {
  render() {
    const { navigation } = this.props;
    return (
      <About
        image={image}
        type="cajas"
        navigation={navigation}
      />
    );
  }
}

export default AboutCajasScreen;
