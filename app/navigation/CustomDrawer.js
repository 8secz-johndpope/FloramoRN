/* @flow */
import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import {
  Image, ImageBackground, View, TouchableOpacity,
} from 'react-native';
import NthText from '../components/_common/NthText/NthText';

const coverImage = require('../../assets/images/drawer/drawer-cover.png');

const encyclopediaIcon = require('../../assets/images/drawer/address.png');
const searchIcon = require('../../assets/images/drawer/ambulance.png');

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
        <View style={{ height: 150 }}>
          <ImageBackground
            resizeMode="contain"
            source={coverImage}
            style={{
              flex: 1,
              width: '100%',
              height: '100%',
              justifyContent: 'center',
            }}
          >
            <NthText text="Header" font="barlow" />
            <NthText text="Something" font="barlow" weight="black" />
          </ImageBackground>
        </View>
        <View style={{ flex: 1 }}>
          {navigationItems.map((item, index) => (
            <TouchableOpacity
              key={item.key}
              onPress={this.navigateToScreen(item.key)}
              style={{
                marginTop: 2,
                flexDirection: 'row',
                alignItems: 'center',
                padding: 10,
                paddingLeft: 20,
                backgroundColor: index === selectedIndex ? 'gray' : 'white',
              }}
            >
              <Image
                source={item.icon}
                style={{
                  width: 24, height: 24, marginRight: 20, tintColor: index === selectedIndex ? 'blue' : 'pink',
                }}
              />
              <NthText
                text={item.label}
                font="barlow"
                color={index === selectedIndex ? 'blue' : 'pink'}
              />
            </TouchableOpacity>
          ))}
        </View>
        <NthText text="Footer" font="barlow" size="tiny" align="right" style={{ padding: 15 }} />
      </View>
    );
  }
}

export default CustomDrawer;
