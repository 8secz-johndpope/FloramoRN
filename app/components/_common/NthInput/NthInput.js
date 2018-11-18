/* @flow */
import React from 'react';
import { Input } from 'react-native-elements';
import fonts from '../../../styles/fonts';
import I18n from '../../../i18n';

type Props = {
  i18nLabel: string,
  onChangeText: (string)=>void,
  value?: ?string
};

const NthInput = (props: Props) => {
  const { i18nLabel, onChangeText, value } = props;
  const label = I18n.t(i18nLabel);
  return (
    <Input
      label={label}
      labelStyle={{ fontFamily: fonts.barlow.semiBold }}
      inputStyle={{ fontFamily: fonts.barlow.regular }}
      onChangeText={input => onChangeText(input)}
      value={value}
    />
  );
};

NthInput.defaultProps = {
  value: '',
};

export default NthInput;
