/* @flow */
import React, { Component } from 'react';
import { Linking, View } from 'react-native';
import FontAwesome5Pro from 'react-native-vector-icons/FontAwesome5Pro';
import NthText from '../_common/NthText/NthText';
import NthContainer from '../_common/NthHeader/NthContainer';
import colors from '../../styles/colors';
import NthInput from '../_common/NthInput/NthInput';
import NthButton from '../_common/NthButton/NthButton';
import I18n from '../../i18n';

type Props = {
  navigation: Object
};
type State = {
  name: string,
  commonName: string,
  family: string
};

class TropicosSearchScreen extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      name: '',
      commonName: '',
      family: '',
    };
  }

  onChange(field: string, value: string) {
    const newState = {};
    newState[field] = value;
    this.setState(newState);
  }

  render() {
    const { navigation } = this.props;
    const { name, commonName, family } = this.state;
    return (
      <NthContainer onPress={() => navigation.openDrawer()} i18nHeader="navigation.title.tropicos">
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
            onChangeText={value => this.onChange('name', value)}
          />
          <View style={{ marginTop: 16 }}>
            <NthInput
              i18nLabel="tropicosSearch.commonName"
              value={commonName}
              onChangeText={value => this.onChange('commonName', value)}
            />
          </View>
          <View style={{ marginVertical: 16 }}>
            <NthInput
              i18nLabel="tropicosSearch.family"
              value={family}
              onChangeText={value => this.onChange('family', value)}
            />
          </View>
        </View>
        <NthButton
          i18nTitle="tropicosSearch.button"
          onPress={() => {}}
        />
      </NthContainer>
    );
  }
}

export default TropicosSearchScreen;
