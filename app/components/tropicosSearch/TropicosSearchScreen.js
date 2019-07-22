/* @flow */
import React, { Component } from 'react';
import { BackHandler } from 'react-native';
import NthContainer from '../_common/NthHeader/NthContainer';
import appConfig from '../../appConfig';
import TropicosSearchForm from './TropicosSearchForm';
import TropicosResults from './TropicosResults';
import appNavigation from '../../navigation/Routes';
import TropicosLoading from '../tropicosLoading/TropicosLoading';

const axios = require('axios');

const maxResults = 100;

type Props = {
  navigation: Object
};
type State = {
  name: string,
  family: string,
  hasError: boolean,
  isLoading: boolean,
  results: any
};

const getParams = (name: string, family: string) => {
  const params = {};
  if (name !== '') {
    params.name = name;
  }
  if (family !== '') {
    params.family = family;
  }
  return params;
};

class TropicosSearchScreen extends Component<Props, State> {
  _didFocusSubscription;

  _willBlurSubscription;

  constructor(props: Props) {
    super(props);
    this.state = {
      name: '',
      family: '',
      hasError: false,
      isLoading: false,
      results: undefined,
    };

    this._didFocusSubscription = props.navigation.addListener('didFocus', () => BackHandler.addEventListener('hardwareBackPress', this.onBackButtonPressAndroid));
  }

  componentDidMount() {
    this._willBlurSubscription = this.props.navigation.addListener('willBlur', () => BackHandler.removeEventListener('hardwareBackPress', this.onBackButtonPressAndroid));
  }

  onBackButtonPressAndroid = () => {
    this.onBackPressed();
    return true;
  };

  componentWillUnmount() {
    this._didFocusSubscription && this._didFocusSubscription.remove();
    this._willBlurSubscription && this._willBlurSubscription.remove();
  }

  onBackPressed() {
    const { results } = this.state;
    if (results === undefined) {
      const { navigation } = this.props;
      navigation.goBack();
    }
    this.resetResults();
  }

  onChange(field: string, value: string) {
    const newState = {};
    newState[field] = value;
    this.setState(newState);
  }

  onSearchPressed() {
    const { name, family } = this.state;
    const trimmedName = name.trim();
    const trimmedFamily = family.trim();
    if (trimmedName === '' && trimmedFamily === '') {
      this.setState({ hasError: true });
    } else {
      const url = appConfig.search_url;
      const key = appConfig.tropicos;
      this.setState({
        isLoading: true,
      });
      axios.get(url, {
        params: {
          ...getParams(trimmedName, trimmedFamily),
          type: 'wildcard',
          format: 'json',
          apikey: key,
          pagesize: maxResults,
        },
      })
        .then((response) => {
          this.setState({
            results: response.data,
            isLoading: false,
            name: '',
            family: '',
          });
        })
        .catch(() => {
          this.resetResults();
        })
        .then(() => {
          // always executed
        });
    }
  }

  onPlantPressed(nameId: string) {
    const { navigation } = this.props;
    const url = `${appConfig.base_url}${nameId}`;
    navigation.navigate({
      ...appNavigation.navigationTree.plantWebView,
      ...{ params: { url, from: 'tropicos' } },
    });
  }

  resetResults() {
    this.setState({
      results: undefined,
      isLoading: false,
    });
  }

  render() {
    const { navigation } = this.props;
    const {
      name, family, hasError, results, isLoading,
    } = this.state;
    const headerProps = {};
    let component;
    if (results) {
      component = (
        <TropicosResults
          results={results}
          onPress={nameId => this.onPlantPressed(nameId)}
        />
      );
      headerProps.onPress = () => this.onBackPressed();
      headerProps.i18nHeader = 'navigation.title.tropicosResults';
      headerProps.type = 'back';
      headerProps.noPadding = true;
    } else {
      headerProps.onPress = () => navigation.openDrawer();
      headerProps.i18nHeader = 'navigation.title.tropicos';
      headerProps.type = 'hamburger';
      headerProps.noPadding = false;
      component = (
        <TropicosSearchForm
          name={name}
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
        {isLoading ? <TropicosLoading /> : null}
      </NthContainer>
    );
  }
}

export default TropicosSearchScreen;
