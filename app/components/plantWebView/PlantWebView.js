/* @flow */
import React, { Component } from 'react';
import { BackHandler, Linking, TouchableOpacity } from 'react-native';
import { WebView } from 'react-native-webview';
import appNavigation from "../../navigation/Routes";
import colors from '../../styles/colors';
import NthContainer from '../_common/NthHeader/NthContainer';
import NthIcon from '../_common/NthIcon/NthIcon';
import NthText from '../_common/NthText/NthText';
import TropicosLoading from '../tropicosLoading/TropicosLoading';

type Props = {
  navigation: Object
};

type State = {
  isLoading: boolean,
  loaded: number,
  loadedOnce: boolean
}

const renderTopMessage = url => (
  <TouchableOpacity
    onPress={() => Linking.openURL(url)}
    style={{
      padding: 20, flexDirection: 'row', alignItems: 'center',
    }}
  >
    <NthIcon
      name="browser"
      color={colors.secondary500}
      size={20}
      light
      style={{marginRight: 8}}
    />
    <NthText
      text="Open this page in my browser"
      color={colors.secondary500}
    />
  </TouchableOpacity>
);

class PlantWebView extends Component<Props, State> {
  _didFocusSubscription;
  _willBlurSubscription;

  constructor(props: Props) {
    super(props);
    this.state = {
      isLoading: false,
      loadedOnce: false,
      loaded: 0,
    };

    this._didFocusSubscription = props.navigation.addListener('didFocus', () =>
      BackHandler.addEventListener('hardwareBackPress', this.onBackButtonPressAndroid)
    );
  }

  componentDidMount() {
    this._willBlurSubscription = this.props.navigation.addListener('willBlur', () =>
      BackHandler.removeEventListener('hardwareBackPress', this.onBackButtonPressAndroid)
    );
  }

  onBackButtonPressAndroid = () => {
    this.onBackPressed();
    return true;
  };

  componentWillUnmount() {
    this._didFocusSubscription && this._didFocusSubscription.remove();
    this._willBlurSubscription && this._willBlurSubscription.remove();
  }


  renderProgress(loaded: number) {
    return <TropicosLoading />;
  }

  renderWebView(url: string) {
    return (
      <WebView
        source={{uri: url}}
        onLoadStart={() => this.setState({isLoading: true, loadedOnce: true})}
        onLoadEnd={() => this.setState({isLoading: false})}
        onLoadProgress={(e) => {
          const loaded = e.nativeEvent.progress;
          this.setState({loaded, isLoading: loaded < 1});
        }}
      />
    );
  }

  onBackPressed() {
    const {navigation} = this.props;
    const {plant, from} = navigation.state.params;
    if (from === 'tropicos') {
      navigation.navigate(appNavigation.navigationTree.tropicos);
      return;
    }
    navigation.navigate({
      ...appNavigation.navigationTree.detail,
      ...{params: {plant, from}},
    });
  }

  render() {
    const {navigation} = this.props;
    const {url} = navigation.state.params;
    const {isLoading, loaded, loadedOnce} = this.state;
    return (
      <NthContainer
        onPress={() => this.onBackPressed()}
        i18nHeader="navigation.title.tropicosResults"
        type="back"
        noPadding
      >
        {renderTopMessage(url)}
        {this.renderWebView(url)}
        {isLoading && !loadedOnce ? this.renderProgress(loaded) : null}
      </NthContainer>
    );
  }
}

export default PlantWebView;
