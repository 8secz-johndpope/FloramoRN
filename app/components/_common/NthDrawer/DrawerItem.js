/* @flow */
import React, { Component } from 'react';
import { TouchableOpacity, Image } from 'react-native';
import FontAwesome5Pro from 'react-native-vector-icons/FontAwesome5Pro';
import NthText from '../NthText/NthText';
import colors from '../../../styles/colors';

export type DrawerItemConfig = {
  key: string,
  icon?: string,
  imageLight?: any,
  imageSolid?: any,
}

type Props = {
  item: DrawerItemConfig,
  selected: boolean,
  onPress: () => void
};

const selectedColor = colors.primary700;
const nonSelectedColor = colors.primary900;

const getFontAwesomeIcon = (icon: string, selected: boolean) => (
  <FontAwesome5Pro
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
      return <Image resizeMode="center" source={item.imageSolid} style={style} />;
    }
    return <Image resizeMode="center" source={item.imageLight} style={style} />;
  }

  render() {
    const { item, selected, onPress } = this.props;
    return (
      <TouchableOpacity
        key={item.key}
        onPress={onPress}
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          padding: 10,
          paddingLeft: 20,
          backgroundColor: selected ? colors.primary200 : colors.white,
        }}
      >
        {this.getIcon()}
        <NthText
          i18n={`navigation.drawer.${item.key}`}
          font="barlow"
          color={selected ? selectedColor : nonSelectedColor}
        />
      </TouchableOpacity>
    );
  }
}

export default DrawerItem;
