/* @flow */
import React, { Component } from 'react';
import _ from 'lodash';
import { Dimensions, TouchableOpacity, View } from 'react-native';
import { scale } from 'react-native-size-matters';
import CardView from 'react-native-cardview';
import colors from '../../styles/colors';
import PlantTrait from '../_common/plantTrait/PlantTrait';
import type { PlantTraits } from '../_common/plantTrait/PlantTrait';

type Props = {
  elements: Array<string>,
  selected: Array<string>,
  onPress: string=>void,
  type: PlantTraits
};

const buttonWidth = scale(100);
const buttonHeight = scale(50);
const padding = 10;

const getElement = (element, type) => (
  <PlantTrait
    key={`${type}_${element}`}
    trait={element}
    type={type}
    withLabel
    multiline
  />
);

class ButtonSelector extends Component<Props, {}> {
  getButton(element: string, type: PlantTraits) {
    const { selected, onPress } = this.props;
    const isSelected = selected.indexOf(element) > -1;
    return (
      <TouchableOpacity key={element} onPress={() => onPress(element)}>
        <CardView
          cardElevation={2}
          cardMaxElevation={2}
          style={{
            backgroundColor: isSelected ? colors.primary200 : colors.white,
            padding,
            width: buttonWidth,
            height: buttonHeight,
            justifyContent: 'center',
          }}
        >
          {getElement(element, type)}
        </CardView>
      </TouchableOpacity>
    );
  }

  render() {
    const { type, elements } = this.props;
    return (
      <View style={{
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: 10,
      }}
      >
        {elements.map(element => this.getButton(element, type))}
      </View>
    );
  }
}

export default ButtonSelector;
