/* @flow */
import React, { Component } from 'react';
import About from './About';

const image = require('../../../assets/images/about/paramo.jpg');

type Props = {
  navigation: Object
};
type State = {};

class AboutAppScreen extends Component<Props, State> {
  render() {
    const { navigation } = this.props;
    return (
      <About
        image={image}
        type="app"
        navigation={navigation}
      />
    );
  }
}

export default AboutAppScreen;
