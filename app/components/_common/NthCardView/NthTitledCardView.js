/* @flow */
import React from 'react';
import { scale } from 'react-native-size-matters';
import { View } from 'react-native';
import colors from '../../../styles/colors';
import NthText from '../NthText/NthText';
import NthCardView from './NthCardView';
import type { Margin } from './nthCardViewHelper';

type Props = {
  i18nTitle?: ?string,
  title?: ?string,
  children: any,
  margin?: ?Margin,
  padding?: ?number
};

const defaultMargins = {
  top: 0,
  left: 0,
  bottom: scale(15),
  right: 0,
};

const NthTitledCardView = (props: Props) => {
  const {
    children, margin, padding, i18nTitle, title,
  } = props;
  let textProps = { text: '' };
  if (i18nTitle) {
    textProps = { i18n: i18nTitle };
  }
  if (title) {
    textProps = { text: title };
  }
  return (
    <NthCardView margin={{ ...defaultMargins, ...margin }} padding={0}>
      <View style={{
        backgroundColor: colors.primary100,
        padding: scale(15),
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
      }}
      >
        <NthText {...textProps} weight="bold" color={colors.primary600} />
      </View>
      <View style={{ padding }}>
        {children}
      </View>
    </NthCardView>
  );
};

NthTitledCardView.defaultProps = {
  margin: defaultMargins,
  padding: 20,
  i18nTitle: undefined,
  title: undefined,
};

export default NthTitledCardView;
