/* @flow */
import React, { Component } from 'react';
import About from './About';

const image = require('../../../assets/images/about/quito.jpg');

type Props = {
  navigation: Object
};
type State = {};

class AboutDMQScreen extends Component<Props, State> {
  render() {
    const { navigation } = this.props;
    return (
      <About
        image={image}
        type="dmq"
        navigation={navigation}
      />
    );
  }
}

export default AboutDMQScreen;
