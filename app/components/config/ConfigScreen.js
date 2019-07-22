/* @flow */
import AsyncStorage from '@react-native-community/async-storage';
import i18n from 'i18n-js';
import React, { Component } from 'react';
import { View } from 'react-native';
import * as RNLocalize from 'react-native-localize';
import RNRestart from 'react-native-restart';
import NthButton from '../_common/NthButton/NthButton';
import NthTitledCardView from '../_common/NthCardView/NthTitledCardView';
import NthContainer from '../_common/NthHeader/NthContainer';
import NthText from '../_common/NthText/NthText';

type Props = {};
type State = {};

const getDefaultLanguage = () => {
  const fallback = { languageTag: 'en', isRTL: false };
  const languageTags = Object.keys(i18n.translations);
  return RNLocalize.findBestAvailableLanguage(languageTags).languageTag || fallback;
};

class ConfigScreen extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      language: 'de',
    };
  }

  onLanguageChanged(lang) {
    let languageTag = lang;
    if (lang === 'best') {
      languageTag = getDefaultLanguage();
    }
    AsyncStorage.setItem('lang', languageTag)
      .then(() => {
        RNRestart.Restart();
      })
      .catch((err) => {
        console.warn('err', err);
      });
  }

  languageButton(tag) {
    const i18nParams = {};
    if (tag === 'best') {
      i18nParams.lang = getDefaultLanguage();
    }
    return (
      <NthButton
        i18nParams={i18nParams}
        marginBottom={16}
        i18nTitle={`languages.${tag}`}
        onPress={() => this.onLanguageChanged(tag)}
      />
    );
  }

  render() {
    const { navigation } = this.props;
    return (
      <NthContainer
        onPress={() => navigation.openDrawer()}
        i18nHeader="navigation.title.config"
      >
        <View>
          <NthTitledCardView i18nTitle="config.language">
            <View>
              <NthText
                i18n="config.current"
                i18nParams={{ lang: i18n.t(`languages.${i18n.currentLocale()}`) }}
                style={{ marginBottom: 24 }}
              />
              {this.languageButton('best')}
              {this.languageButton('en')}
              {this.languageButton('es')}
            </View>
          </NthTitledCardView>
        </View>
      </NthContainer>
    );
  }
}

export default ConfigScreen;
