/* @flow */
import React, { Component } from 'react';
import { Platform, Text } from 'react-native';
import { scale } from 'react-native-size-matters';
import colors from '../../../styles/colors';
import fonts from '../../../styles/fonts';
import I18n from '../../../i18n';

export type fontSizes = 'big' | 'title' | 'regular' | 'smallish' | 'small' | 'tiny';

type Props = {
  font?: 'barlow' | 'montserrat',
  weight?: 'thin' | 'extraLight' | 'light' | 'regular' | 'medium' | 'semiBold' | 'bold' | 'extraBold' | 'black',
  size?: fontSizes,
  color?: string,
  align?: 'left' | 'center' | 'right' | 'justify',
  i18n?: ?string,
  i18nParams?: Object,
  text?: string,
  lineHeight?: number,
  uppercase?: boolean,
  italic?: boolean,
  shadow?: boolean,
  style?: any,
  multiline?: boolean,
  children?: any
};

const baseFontSize = Platform.OS === 'ios' ? 14 : 13;

const transformToScale = (factor) => {
  const total = Math.round(baseFontSize * factor);
  return scale(total);
};

const getFontSize = (size) => {
  switch (size) {
    case 'big':
      return transformToScale(2.5);
    case 'title':
      return transformToScale(1.3);
    case 'regular':
      return transformToScale(1);
    case 'smallish':
      return transformToScale(0.9);
    case 'small':
      return transformToScale(0.7);
    case 'tiny':
      return transformToScale(0.6);
    default:
      return transformToScale(1);
  }
};

const getFontFamily = (font, weight, italic) => {
  if (italic) {
    return fonts[font].italic[weight];
  }
  return fonts[font][weight];
};

export default class NthText extends Component<Props, {}> {
  static defaultProps = {
    font: 'montserrat',
    weight: 'regular',
    size: 'regular',
    color: colors.primary800,
    align: 'left',
    lineHeight: 1,
    text: undefined,
    i18n: null,
    i18nParams: {},
    style: null,
    italic: false,
    shadow: false,
    uppercase: false,
    multiline: true,
    children: null,
  };

  render() {
    const {
      font,
      weight,
      size,
      color,
      align,
      text,
      i18n,
      i18nParams,
      lineHeight,
      style,
      italic,
      uppercase,
      shadow,
      multiline,
      children,
      ...attributes
    } = this.props;

    let shownText = '';
    if (i18n) {
      shownText = I18n.t(i18n, i18nParams);
    } else if (text && text !== null && text !== undefined) {
      shownText = text;
    }
    if (uppercase) {
      shownText = shownText.toUpperCase();
    }
    if (children) {
      shownText = children;
    }

    let usableLineHeight = 1;
    const fontSize = getFontSize(size);
    let usableFont: string = 'montserrat';
    if (font) {
      usableFont = font;
    }
    if (lineHeight) {
      usableLineHeight = lineHeight * fontSize;
    }
    let shadowStyle = {};
    if (shadow) {
      shadowStyle = {
        textShadowColor: colors.textShadow,
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 3,
      };
    }
    const numberOfLines = multiline ? {} : { numberOfLines: 1 };
    return (
      <Text
        style={[
          {
            fontFamily: getFontFamily(usableFont, weight, italic),
            fontSize,
            lineHeight: usableLineHeight,
            color,
            textAlign: align,
          }, style, shadowStyle]}
        {...attributes}
        {...numberOfLines}
      >
        {shownText}
      </Text>
    );
  }
}
