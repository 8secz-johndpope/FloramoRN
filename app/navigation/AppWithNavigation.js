/*
* @format
* @flow
*/
import React, { Component } from 'react';
import { TouchableOpacity, View } from 'react-native';
import RNLanguages from 'react-native-languages';
import { DrawerNavigator, StackNavigator } from 'react-navigation';
import { ThemeProvider } from 'react-native-elements';
import colors from '../styles/colors';
import i18n from '../i18n';
import appNavigation from './Routes';
import CustomDrawer from './CustomDrawer';
import NthText from '../components/_common/NthText/NthText';

const theme = {
  colors: {
    primary: colors.primary400,
    secondary: colors.secondary200,
  },
};
const DrawerNavigation = DrawerNavigator(appNavigation.routes,
  {
    initialRouteName: appNavigation.initialScreen,
    contentComponent: CustomDrawer,
  });

const Navigation = StackNavigator({
  DrawerStack: {
    screen: DrawerNavigation,
    navigationOptions: ({ navigation }) => {
      const selectedIndex = navigation.state.index;
      const selectedRoute = navigation.state.routes[selectedIndex];
      const title = selectedRoute.key;
      return ({
        headerStyle: { backgroundColor: colors.primary700 },
        headerTintColor: 'white',
        headerTitle: <NthText text={title} color={colors.primary50} size="small" font="barlow" weight="bold" />,
        headerLeft: (
          <TouchableOpacity
            onPress={() => navigation.toggleDrawer()}
            style={{ marginLeft: 20 }}
          >
            <NthText text="menu" size="small" color={colors.primary50} />
          </TouchableOpacity>
        ),
      });
    },
  },
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
        <View style={{
          flex: 1,
          backgroundColor: colors.primary50,
        }}
        >
          <Navigation />
        </View>
      </ThemeProvider>
    );
  }
}

export default AppWithNavigation;
