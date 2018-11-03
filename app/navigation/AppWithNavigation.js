/*
* @format
* @flow
*/
import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import RNLanguages from 'react-native-languages';
import { createDrawerNavigator } from 'react-navigation';
import { ThemeProvider } from 'react-native-elements';
import colors from '../styles/colors';
import i18n from '../i18n';
import appNavigation from './Routes';
import NthDrawer from '../components/_common/NthDrawer/NthDrawer';

const theme = {
  colors: {
    primary: colors.primary400,
    secondary: colors.secondary200,
  },
};
const DrawerNavigation = createDrawerNavigator(appNavigation.routes,
  {
    initialRouteName: appNavigation.initialScreen,
    contentComponent: NthDrawer,
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
        <StatusBar
          barStyle="light-content"
          hidden={false}
          backgroundColor={colors.primary900}
          translucent
        />
        <View style={{
          flex: 1,
          backgroundColor: colors.primary50,
        }}
        >
          <DrawerNavigation />
        </View>
      </ThemeProvider>
    );
  }
}

export default AppWithNavigation;
