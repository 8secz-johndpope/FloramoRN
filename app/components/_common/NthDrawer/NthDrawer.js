/* eslint-disable global-require,import/no-unresolved */
/* @flow */
import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import { NavigationActions } from 'react-navigation';
import colors from '../../../styles/colors';
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
    after: 'separator',
  },
  {
    key: 'paramo',
    icon: 'mountains',
  },
  {
    key: 'cajas',
    icon: 'badge',
  },
  {
    key: 'dmq',
    icon: 'flower',
  },
  {
    key: 'app',
    icon: 'window-alt',
    after: 'separator2',
  },
  {
    key: 'bugs',
    icon: 'spider-black-widow',
  },
  {
    key: 'credits',
    icon: 'user-friends',
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
    const selectedIndex = navigation.state.index > 0
      ? navigation.state.index - 1
      : navigation.state.index;
    return (
      <View style={{ flex: 1, backgroundColor: colors.primary50 }}>
        <DrawerHeader />
        <ScrollView>
          <View style={{ flex: 1 }}>
            {navigationItems.map((item, index) => (
              <DrawerItem
                key={`drawer_${item.key}`}
                item={item}
                selected={index === selectedIndex}
                onPress={this.navigateToScreen(item.key)}
              />
            ))}
          </View>
        </ScrollView>
        <NthText text="v.0.1-beta" font="barlow" size="tiny" align="right" style={{ padding: 15 }} />
      </View>
    );
  }
}

export default NthDrawer;
