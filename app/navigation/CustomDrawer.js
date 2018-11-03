/* @flow */
import React, { Component } from 'react';
import { DrawerItems, NavigationActions } from 'react-navigation';
import { ImageBackground, Text, View } from 'react-native';

type Props = {
  navigation: Object
};
type State = {};

class CustomDrawer extends Component<Props, State> {
  navigateToScreen = route => (
    () => {
      const navigateAction = NavigationActions.navigate({
        routeName: route,
      });
      const { navigation } = this.props;
      navigation.dispatch(navigateAction);
    });

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ height: 150 }}>
          <ImageBackground
            resizeMode="contain"
            source={require('../../assets/images/drawer/drawer-cover.png')}
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
          <DrawerItems {...this.props} />
        </View>
        <Text>Your Own Footer Area After</Text>
      </View>
    );
  }
}

export default CustomDrawer;
