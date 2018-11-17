/* @flow */
import React, { Component } from 'react';
import { WebView } from 'react-native-webview';
import FontAwesome5Pro from 'react-native-vector-icons/FontAwesome5Pro';
import { Linking, TouchableOpacity } from 'react-native';
import NthContainer from '../_common/NthHeader/NthContainer';
import appNavigation from '../../navigation/Routes';
import NthText from '../_common/NthText/NthText';
import colors from '../../styles/colors';
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
    <FontAwesome5Pro
      name="browser"
      color={colors.secondary500}
      size={20}
      light
      style={{ marginRight: 8 }}
    />
    <NthText
      text="Open this page in my browser"
      color={colors.secondary500}
    />
  </TouchableOpacity>
);

class PlantWebView extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isLoading: false,
      loadedOnce: false,
      loaded: 0,
    };
  }

  renderProgress(loaded: number) {
    return <TropicosLoading />;
  }

  renderWebView(url: string) {
    return (
      <WebView
        source={{ uri: url }}
        onLoadStart={() => this.setState({ isLoading: true, loadedOnce: true })}
        onLoadEnd={() => this.setState({ isLoading: false })}
        onLoadProgress={(e) => {
          const loaded = e.nativeEvent.progress;
          this.setState({ loaded, isLoading: loaded < 1 });
        }}
      />
    );
  }

  render() {
    const { navigation } = this.props;
    const { url } = navigation.state.params;
    const { isLoading, loaded, loadedOnce } = this.state;
    return (
      <NthContainer
        onPress={() => navigation.goBack()}
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
