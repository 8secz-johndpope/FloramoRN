/* @flow */
import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import {
  Image, ImageBackground, Text, View,
} from 'react-native';

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
            <Text>
              Header Portion
            </Text>
            <Text>
              You can display here logo or profile image
            </Text>
          </ImageBackground>
        </View>
        <View style={{ flex: 1 }}>
          {navigationItems.map((item, index) => (
            <View
              key={item.key}
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
              <Text
                style={{
                  color: index === selectedIndex ? 'blue' : 'pink',
                }}
                onPress={this.navigateToScreen(item.key)}
              >
                {item.label}
              </Text>
            </View>
          ))}
        </View>
        <Text>Your Own Footer Area After</Text>
      </View>
    );
  }
}

export default CustomDrawer;
