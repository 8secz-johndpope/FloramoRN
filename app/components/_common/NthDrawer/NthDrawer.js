/* eslint-disable global-require,import/no-unresolved */
/* @flow */
import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import { View } from 'react-native';
import NthText from '../NthText/NthText';
import DrawerHeader from './DrawerHeader';
import DrawerItem from './DrawerItem';
import type { DrawerItemConfig } from './DrawerItem';

type Props = {
  navigation: Object
};

const navigationItems: Array<DrawerItemConfig> = [
  {
    key: 'encyclopedia',
    icon: 'book-open',
  },
  {
    key: 'search',
    icon: 'search',
  },
  {
    key: 'tropicos',
    imageLight: require('../../../../assets/images/drawer/light/tropicos.png'),
    imageSolid: require('../../../../assets/images/drawer/solid/tropicos.png'),
  },
  {
    key: 'paramo',
    imageLight: require('../../../../assets/images/drawer/light/mountains.png'),
    imageSolid: require('../../../../assets/images/drawer/solid/mountains.png'),
  },
  {
    key: 'cajas',
    icon: 'tree-alt',
  },
  {
    key: 'dmq',
    icon: 'city',
  },
  {
    key: 'app',
    icon: 'window-alt',
  },
  {
    key: 'bugs',
    icon: 'bug',
  },
  {
    key: 'credits',
    icon: 'users',
  },
];

class NthDrawer extends Component<Props, {}> {
  navigateToScreen = (route: string) => (
    () => {
      const navigateAction = NavigationActions.navigate({
        routeName: route,
      });
      const { navigation } = this.props;
      navigation.dispatch(navigateAction);
    });

  render() {
    const { navigation } = this.props;
    const selectedIndex = navigation.state.index;
    return (
      <View style={{ flex: 1 }}>
        <DrawerHeader />
        <View style={{ flex: 1, paddingTop: 20 }}>
          {navigationItems.map((item, index) => (
            <DrawerItem
              key={`drawer_${item.key}`}
              item={item}
              selected={index === selectedIndex}
              onPress={this.navigateToScreen(item.key)}
            />
          ))}
        </View>
        <NthText text="Footer" font="barlow" size="tiny" align="right" style={{ padding: 15 }} />
      </View>
    );
  }
}

export default NthDrawer;
