/* @flow */
import React, { Component } from 'react';
import { View } from 'react-native';
import FontAwesome5Pro from 'react-native-vector-icons/FontAwesome5Pro';
import NthText from '../_common/NthText/NthText';
import NthContainer from '../_common/NthHeader/NthContainer';
import colors from '../../styles/colors';
import NthInput from '../_common/NthInput/NthInput';
import NthButton from '../_common/NthButton/NthButton';
import appConfig from '../../appConfig';
import TropicosSearchForm from './TropicosSearchForm';
import TropicosResults from './TropicosResults';

const axios = require('axios');

type Props = {
  navigation: Object
};
type State = {
  name: string,
  commonName: string,
  family: string,
  hasError: boolean,
  results: any
};

const getParams = (name: string, commonName: string, family: string) => {
  const params = {};
  if (name !== '') {
    params.name = name;
  }
  if (commonName !== '') {
    params.commonName = commonName;
  }
  if (family !== '') {
    params.family = family;
  }
  return params;
};

class TropicosSearchScreen extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      name: '',
      commonName: '',
      family: '',
      hasError: false,
      results: undefined,
    };
  }

  onChange(field: string, value: string) {
    const newState = {};
    newState[field] = value;
    this.setState(newState);
  }

  onSearchPressed() {
    const { name, commonName, family } = this.state;
    const trimmedName = name.trim();
    const trimmedCommonName = commonName.trim();
    const trimmedFamily = family.trim();
    if (trimmedName === '' && trimmedCommonName === '' && trimmedFamily === '') {
      this.setState({ hasError: true });
    } else {
      const url = appConfig.search_url;
      const key = appConfig.tropicos;

      axios.get(url, {
        params: {
          ...getParams(trimmedName, trimmedCommonName, trimmedFamily),
          type: 'wildcard',
          format: 'json',
          apikey: key,
          pagesize: 100,
        },
      })
        .then((response) => {
          this.setState({
            results: response.data,
          });
        })
        .catch((error) => {
          this.resetResults();
        })
        .then(() => {
          // always executed
        });
    }
  }

  resetResults() {
    this.setState({
      results: undefined,
    });
  }

  render() {
    const { navigation } = this.props;
    const {
      name, commonName, family, hasError, results,
    } = this.state;
    const headerProps = {};
    let component;
    if (results) {
      component = <TropicosResults results={results} />;
      headerProps.onPress = () => this.resetResults();
      headerProps.i18nHeader = 'navigation.title.tropicosResults';
      headerProps.type = 'back';
    } else {
      headerProps.onPress = () => navigation.openDrawer();
      headerProps.i18nHeader = 'navigation.title.tropicos';
      headerProps.type = 'hamburger';
      component = (
        <TropicosSearchForm
          name={name}
          commonName={commonName}
          family={family}
          onChange={(field, value) => this.onChange(field, value)}
          onSearchPressed={() => this.onSearchPressed()}
          hasError={hasError}
        />
      );
    }
    return (
      <NthContainer {...headerProps}>
        {component}
      </NthContainer>
    );
  }
}

export default TropicosSearchScreen;
