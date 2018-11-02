/*
* @format
* @flow
*/
import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import RNLanguages from 'react-native-languages';
import { createDrawerNavigator } from 'react-navigation';
import { ThemeProvider } from 'react-native-elements';
import colors from '../styles/colors';
import i18n from '../i18n';
import appNavigation from './Routes';

const theme = {
  colors: {
    primary: colors.primary400,
    secondary: colors.secondary200,
  },
};

const RootStack = createDrawerNavigator(appNavigation.routes,
  { initialRouteName: appNavigation.initialScreen });

class AppWithNavigation extends Component<{}, {}> {
  componentWillMount() {
    RNLanguages.addEventListener('change', this.onLanguagesChange);
  }

  componentWillUnmount() {
    RNLanguages.removeEventListener('change', this.onLanguagesChange);
  }

  onLanguagesChange = ({ language }: Object) => {
    i18n.locale = language;
  };

  render() {
    return (
      <ThemeProvider theme={theme}>
        <StatusBar
          backgroundColor={colors.primary900}
          barStyle="light-content"
        />
        <RootStack />
      </ThemeProvider>
    );
  }
}

export default AppWithNavigation;
