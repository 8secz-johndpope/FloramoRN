/* @flow */
import React, { Component } from 'react';
import { View } from 'react-native';
import FontAwesome5Pro from 'react-native-vector-icons/FontAwesome5Pro';
import colors from '../../styles/colors';
import NthText from '../_common/NthText/NthText';
import NthInput from '../_common/NthInput/NthInput';
import NthButton from '../_common/NthButton/NthButton';

type Props = {
  name: string,
  commonName: string,
  family: string,
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
          <FontAwesome5Pro
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
