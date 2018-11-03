/* @flow */
import React, { Component } from 'react';
import {
  Image, TouchableOpacity,
} from 'react-native';
import NthText from '../../components/_common/NthText/NthText';
import colors from '../../styles/colors';

type Props = {
  item: any,
  selected: boolean,
  onPress: () => void
};

const selectedColor = colors.primary700;
const nonSelectedColor = colors.primary900;

class DrawerItem extends Component<Props, {}> {
  render() {
    const { item, selected, onPress } = this.props;
    return (
      <TouchableOpacity
        key={item.key}
        onPress={onPress}
        style={{
          marginTop: 2,
          flexDirection: 'row',
          alignItems: 'center',
          padding: 10,
          paddingLeft: 20,
          backgroundColor: selected ? colors.primary200 : colors.white,
        }}
      >
        <Image
          source={item.icon}
          style={{
            width: 24,
            height: 24,
            marginRight: 20,
            tintColor: selected ? selectedColor : nonSelectedColor,
          }}
        />
        <NthText
          text={item.label}
          font="barlow"
          color={selected ? selectedColor : nonSelectedColor}
        />
      </TouchableOpacity>
    );
  }
}

export default DrawerItem;
