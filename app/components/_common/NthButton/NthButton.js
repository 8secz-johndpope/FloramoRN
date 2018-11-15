/* @flow */
import React from 'react';
import FontAwesome5Pro from 'react-native-vector-icons/FontAwesome5Pro';
import { Button } from 'react-native-elements';
import colors from '../../../styles/colors';
import I18n from '../../../i18n';

type Props = {
  icon?: ?string,
  i18nTitle: string,
  onPress: ()=>void
};

const NthButton = (props: Props) => {
  const { icon, i18nTitle, onPress } = props;
  return (
    <Button
      iconRight
      icon={(
        <FontAwesome5Pro
          name={icon}
          color={colors.secondary50}
          size={20}
          light
        />
      )}
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
