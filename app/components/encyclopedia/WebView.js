/* @flow */
import React from 'react';
import { WebView } from 'react-native-webview';
import NthContainer from '../_common/NthHeader/NthContainer';
import appNavigation from '../../navigation/Routes';

type Props = {
  navigation: Object
};

const DetailWebView = (props: Props) => {
  const { navigation } = props;
  const { url } = navigation.state.params;
  return (
    <NthContainer
      onPress={() => navigation.navigate(appNavigation.navigationTree.tropicos)}
      i18nHeader="navigation.title.tropicosResults"
      type="back"
      noPadding
    >
      <WebView
        source={{ uri: url }}
        onLoadProgress={e => console.log(e.nativeEvent.progress)}
      />
    </NthContainer>
  );
};
export default DetailWebView;
