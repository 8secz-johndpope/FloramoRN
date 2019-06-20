/* @flow */
import React, { Component } from 'react';
import { View } from 'react-native';
import colors from '../../styles/colors';
import NthButton from '../_common/NthButton/NthButton';
import NthIcon from '../_common/NthIcon/NthIcon';
import NthInput from '../_common/NthInput/NthInput';
import NthText from '../_common/NthText/NthText';

type Props = {
  name: string,
  commonName: string,
  family: string,
  // noinspection JSDuplicatedDeclaration
  onChange: (string, string)=>void,
  onSearchPressed: ()=>void,
  hasError: boolean
};
type State = {};

class TropicosSearchForm extends Component<Props, State> {
  render() {
    const {
      name, commonName, family, onChange, onSearchPressed, hasError,
    } = this.props;
    return (
      <View>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 8 }}>
          <NthIcon
            name="info-circle"
            color={colors.primary800}
            size={20}
            light
            style={{ marginRight: 6 }}
          />
          <NthText i18n="tropicosSearch.warning" font="barlow" weight="semiBold" italic multiline size="small" />
        </View>
        <NthText i18n="tropicosSearch.info" i18nParams={{ max: 100 }} font="barlow" multiline size="small" />
        <View style={{ marginTop: 16 }}>
          <NthInput
            i18nLabel="tropicosSearch.name"
            value={name}
            onChangeText={value => onChange('name', value)}
          />
          <View style={{ marginTop: 16 }}>
            <NthInput
              i18nLabel="tropicosSearch.commonName"
              value={commonName}
              onChangeText={value => onChange('commonName', value)}
            />
          </View>
          <View style={{ marginVertical: 16 }}>
            <NthInput
              i18nLabel="tropicosSearch.family"
              value={family}
              onChangeText={value => onChange('family', value)}
            />
          </View>
        </View>
        {hasError
          ? (<NthText text="Please fill at least one input" color={colors.error} style={{ marginVertical: 16 }} />)
          : null}
        <NthButton
          i18nTitle="tropicosSearch.button"
          onPress={() => onSearchPressed()}
        />
      </View>
    );
  }
}

export default TropicosSearchForm;
