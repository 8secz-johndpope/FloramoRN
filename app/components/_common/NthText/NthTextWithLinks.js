/* @flow */
import React, { Component } from 'react';
import { View } from 'react-native';
import NthText from './NthText';
import colors from '../../../styles/colors';

type Props = {
  text: string,
  onPress: (string, string) => void
};

const createGenericLinkText = (text: string, tag: string, onPress: any) => (
  <NthText
    key={tag}
    color={colors.primary500}
    font="barlow"
    onPress={onPress}
    style={{ textDecorationLine: 'underline' }}
    text={text}
  />
);

export default class NthTextWithLinks extends Component<Props, {}> {
  static defaultProps = {
  };

  createLinkText(type: string, text: string, tag: string) {
    const { onPress } = this.props;
    const onPressLink = () => {
      onPress(type, tag);
    };
    return createGenericLinkText(text, tag, onPressLink);
  }

  createContent() {
    const { text } = this.props;
    const content = [];
    const parts = text.split('<a');
    parts.forEach((part, index) => {
      if (index === 0) {
        content.push(part);
      } else {
        const parts2 = part.split('</a>');
        const parts3 = parts2[0].split('>');
        const keyPart = parts3[0];
        const keyParts = keyPart.split('=');
        const type = keyParts[0].trim();
        const key = keyParts[1];
        const linkText = parts3[1];
        const rest = parts2[1];
        content.push(this.createLinkText(type, linkText, key));
        content.push(rest);
      }
    });
    return content;
  }

  render() {
    const { text, onPress, ...attributes } = this.props;
    return (
      <View {...attributes}>
        <NthText font="barlow" multiline>
          {this.createContent().map(part => part)}
        </NthText>
      </View>
    );
  }
}
