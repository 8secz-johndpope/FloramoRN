/* @flow */
import React, { Component } from 'react';
import NthText from '../_common/NthText/NthText';

type Props = {
  type: 'app' | 'cajas' | 'dmq' | 'paramo'
};
type State = {};

class About extends Component<Props, State> {
  render() {
    const { type } = this.props;
    return (
      <NthText text={`About ${type}`} />
    );
  }
}

export default About;
