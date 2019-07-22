import { I18nManager } from 'react-native';
import * as RNLocalize from 'react-native-localize';
import i18n from 'i18n-js';
import AsyncStorage from '@react-native-community/async-storage';

import en from '../assets/translations/en';
import es from '../assets/translations/es';

i18n.translations = { en, es };
i18n.fallbacks = false;

const fallback = { languageTag: 'en', isRTL: false };
const languageTags = Object.keys(i18n.translations);
const { languageTag, isRTL } = RNLocalize.findBestAvailableLanguage(languageTags) || fallback;
I18nManager.forceRTL(isRTL); // optional, you might not want to handle RTL
i18n.locale = languageTag;
AsyncStorage.getItem('lang')
  .then((language) => {
    I18nManager.forceRTL(false);
    if (language !== undefined && language !== null && language !== '') {
      i18n.locale = language;
    }
  });

export default i18n;
