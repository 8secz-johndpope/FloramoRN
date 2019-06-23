/*
* @format
* @flow
*/
import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import * as RNLocalize from "react-native-localize";
import { library } from '@fortawesome/fontawesome-svg-core'
import { createDrawerNavigator, createAppContainer } from 'react-navigation';
import { ThemeProvider } from 'react-native-elements';
import colors from '../styles/colors';
import i18n from '../i18n';
import appNavigation from './Routes';
import NthDrawer from '../components/_common/NthDrawer/NthDrawer';

import {
  faBars as farBars,
  faLongArrowLeft as farLongArrowLeft,
  faTimes as farTimes,
  faBrowser as farBrowser,
  faInfoCircle as farInfoCircle,
  faPaperPlane as farPaperPlane,

  faBookOpen as farBookOpen,
  faSearch as farSearch,
  faMountains as farMountains,
  faBadge as farBadge,
  faFlower as farFlower,
  faWindowAlt as farWindowAlt,
  faSpiderBlackWidow as farSpiderBlackWidow,
  faUserFriends as farUserFriends
} from '@fortawesome/pro-regular-svg-icons'

import {
  faLeaf as fasLeaf,
  faArrowSquareLeft as fasArrowSquareLeft,
  faArrowSquareRight as fasArrowSquareRight,

  faBookOpen as fasBookOpen,
  faSearch as fasSearch,
  faMountains as fasMountains,
  faBadge as fasBadge,
  faFlower as fasFlower,
  faWindowAlt as fasWindowAlt,
  faSpiderBlackWidow as fasSpiderBlackWidow,
  faUserFriends as fasUserFriends
} from '@fortawesome/pro-solid-svg-icons'

library.add(
  fasLeaf,
  fasArrowSquareLeft,
  fasArrowSquareRight,
  farBars,
  farLongArrowLeft,
  farTimes,
  farBrowser,
  farInfoCircle,
  farPaperPlane,

  farBookOpen, fasBookOpen,
  farSearch, fasSearch,
  farMountains, fasMountains,
  farBadge, fasBadge,
  farFlower, fasFlower,
  farWindowAlt, fasWindowAlt,
  farSpiderBlackWidow, fasSpiderBlackWidow,
  farUserFriends, fasUserFriends
);

const theme = {
  colors: {
    primary: colors.primary400,
    secondary: colors.secondary200,
  },
};
const DrawerNavigation = createAppContainer(
  createDrawerNavigator(appNavigation.routes,
    {
      initialRouteName: appNavigation.initialScreen,
      contentComponent: NthDrawer,
    }),
);

class AppWithNavigation extends Component<{}, {}> {
  componentWillMount() {
    RNLocalize.addEventListener('change', this.onLanguagesChange);
  }

  componentWillUnmount() {
    RNLocalize.removeEventListener('change', this.onLanguagesChange);
  }

  onLanguagesChange = ({language}: Object) => {
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
        <View
          style={{
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
