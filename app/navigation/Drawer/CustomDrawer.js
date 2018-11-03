/* @flow */
import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import { View } from 'react-native';
import NthText from '../../components/_common/NthText/NthText';
import DrawerHeader from './DrawerHeader';
import DrawerItem from './DrawerItem';

const encyclopediaIcon = require('../../../assets/images/drawer/address.png');
const searchIcon = require('../../../assets/images/drawer/ambulance.png');

type Props = {
  navigation: Object
};

const navigationItems = [
  {
    key: 'Encyclopedia',
    label: 'Encyclopedia',
    icon: encyclopediaIcon,
  },
  {
    key: 'Search',
    label: 'Search',
    icon: searchIcon,
  },
];

class CustomDrawer extends Component<Props, {}> {
  navigateToScreen = route => (
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
        <NthText text="Footer" font="barlow" size="tiny" align="right" style={{ padding: 15 }} />
      </View>
    );
  }
}

export default CustomDrawer;
