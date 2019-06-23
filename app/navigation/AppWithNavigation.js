/*
* @format
* @flow
*/
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faBadge as farBadge,
  faBars as farBars,
  faBookOpen as farBookOpen,
  faBrowser as farBrowser,
  faCogs as farCogs,
  faFlower as farFlower,
  faInfoCircle as farInfoCircle,
  faLongArrowLeft as farLongArrowLeft,
  faMountains as farMountains,
  faPaperPlane as farPaperPlane,
  faSearch as farSearch,
  faSpiderBlackWidow as farSpiderBlackWidow,
  faTimes as farTimes,
  faUserFriends as farUserFriends,
  faWindowAlt as farWindowAlt,
} from '@fortawesome/pro-regular-svg-icons'
import {
  faArrowSquareLeft as fasArrowSquareLeft,
  faArrowSquareRight as fasArrowSquareRight,
  faBadge as fasBadge,
  faBookOpen as fasBookOpen,
  faCogs as fasCogs,
  faFlower as fasFlower,
  faLeaf as fasLeaf,
  faMountains as fasMountains,
  faSearch as fasSearch,
  faSpiderBlackWidow as fasSpiderBlackWidow,
  faUserFriends as fasUserFriends,
  faWindowAlt as fasWindowAlt,
} from '@fortawesome/pro-solid-svg-icons'

import React, { Component } from 'react';
import { StatusBar, View } from 'react-native';
import { ThemeProvider } from 'react-native-elements';
import * as RNLocalize from "react-native-localize";
import { createAppContainer, createDrawerNavigator } from 'react-navigation';
import NthDrawer from '../components/_common/NthDrawer/NthDrawer';
import i18n from '../i18n';
import colors from '../styles/colors';
import appNavigation from './Routes';

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
  farUserFriends, fasUserFriends,
  farCogs, fasCogs,
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
