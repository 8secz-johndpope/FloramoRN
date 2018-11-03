/*
* @format
* @flow
*/
import React, { Component } from 'react';
import { SafeAreaView } from 'react-native';
import RNLanguages from 'react-native-languages';
import { createDrawerNavigator } from 'react-navigation';
import { ThemeProvider } from 'react-native-elements';
import colors from '../styles/colors';
import i18n from '../i18n';
import appNavigation from './Routes';
import CustomDrawer from './CustomDrawer';

const theme = {
  colors: {
    primary: colors.primary400,
    secondary: colors.secondary200,
  },
};
const RootStack = createDrawerNavigator(appNavigation.routes,
  {
    initialRouteName: appNavigation.initialScreen,
    contentComponent: CustomDrawer,
  });

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
        <SafeAreaView style={{
          flex: 1,
          backgroundColor: colors.primary50,
        }}
        >
          <RootStack />
        </SafeAreaView>
      </ThemeProvider>
    );
  }
}

export default AppWithNavigation;
