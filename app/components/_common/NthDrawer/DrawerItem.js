/* @flow */
import React, { Component } from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import colors from '../../../styles/colors';
import NthIcon from '../NthIcon/NthIcon';
import NthText from '../NthText/NthText';

export type DrawerItemConfig = {
  key: string,
  icon?: string,
  imageLight?: any,
  imageSolid?: any,
  after?: string
}

type Props = {
  item: DrawerItemConfig,
  selected: boolean,
  onPress: () => void
};

const selectedColor = colors.primary700;
const nonSelectedColor = colors.primary900;

const getFontAwesomeIcon = (icon: string, selected: boolean) => (
  <NthIcon
    name={icon}
    color={selected ? selectedColor : nonSelectedColor}
    size={24}
    solid={selected}
    light={!selected}
    style={{ marginRight: 20 }}
  />
);

class DrawerItem extends Component<Props, {}> {
  getIcon() {
    const { item, selected } = this.props;
    if (item.icon) {
      return getFontAwesomeIcon(item.icon, selected);
    }
    const style = { width: 24, height: 24, marginRight: 20 };
    if (selected) {
      return <Image resizeMode="contain" source={item.imageSolid} style={style} />;
    }
    return <Image resizeMode="contain" source={item.imageLight} style={style} />;
  }

  render() {
    const {
      item, selected, onPress,
    } = this.props;
    let separator = null;
    if (item.after && item.after.startsWith('separator')) {
      separator = (
        <View style={{
          borderTopWidth: 1,
          borderTopColor: colors.primary100,
          marginTop: 10,
        }}
        >
          <NthText
            i18n={`navigation.drawer.${item.after}`}
            font="barlow"
            size="small"
            color={colors.primary600}
            style={{ marginLeft: 15, marginTop: 10 }}
          />
        </View>
      );
    }
    return (
      <View>
        <TouchableOpacity
          key={item.key}
          onPress={onPress}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            padding: 10,
            paddingLeft: 20,
            backgroundColor: selected ? colors.primary200 : colors.primary50,
          }}
        >
          {this.getIcon()}
          <NthText
            i18n={`navigation.drawer.${item.key}`}
            font="barlow"
            color={selected ? selectedColor : nonSelectedColor}
          />
        </TouchableOpacity>
        {separator}
      </View>
    );
  }
}

export default DrawerItem;
