/* @flow */
import React from 'react';
import { Button } from 'react-native-elements';
import I18n from '../../../i18n';
import colors from '../../../styles/colors';
import NthIcon from '../NthIcon/NthIcon';

type Props = {
  icon?: ?string,
  i18nTitle: string,
  onPress: ()=>void
};

const NthButton = (props: Props) => {
  const {icon, i18nTitle, onPress} = props;

  const iconObj = {};
  if (icon) {
    iconObj.icon = (
      <NthIcon
        name={icon}
        color={colors.secondary50}
        size={20}
        light
      />
    )
  }

  return (
    <Button
      iconRight
      {...iconObj}
      title={I18n.t(i18nTitle)}
      buttonStyle={{
        height: 50,
        borderRadius: 5,
      }}
      titleStyle={{
        color: colors.secondary50,
      }}
      onPress={() => onPress()}
    />
  );
};
NthButton.defaultProps = {
  icon: undefined,
};
export default NthButton;
