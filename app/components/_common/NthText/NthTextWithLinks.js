/* @flow */
import React, { Component } from 'react';
import { View } from 'react-native';
import NthText from './NthText';
import colors from '../../../styles/colors';

type Props = {
  paragraph: string
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

const createInfoLinkText = (text: string, tag: string) => {
  const onPress = () => {
    console.warn('Info: ', tag);
  };
  return createGenericLinkText(text, tag, onPress);
};

const createUrlLinkText = (text: string, url: string) => {
  const onPress = () => {
    console.warn('Url: ', url);
  };
  return createGenericLinkText(text, url, onPress);
};

const createLinkText = (type: string, text: string, tag: string) => {
  if (type === 'info') {
    return createInfoLinkText(text, tag);
  }
  if (type === 'link') {
    return createUrlLinkText(text, tag);
  }
  return null;
};

export default class NthTextWithLinks extends Component<Props, {}> {
  static defaultProps = {
  };

  createContent() {
    const { paragraph } = this.props;
    const content = [];
    const parts = paragraph.split('<a');
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
        content.push(createLinkText(type, linkText, key));
        content.push(rest);
      }
    });
    return content;
  }

  render() {
    const { paragraph, ...attributes } = this.props;
    return (
      <View {...attributes}>
        <NthText font="barlow" multiline>
          {this.createContent().map(part => part)}
        </NthText>
      </View>
    );
  }
}
