/* @flow */
import React, { Component } from 'react';
import _ from 'lodash';
import { ButtonGroup } from 'react-native-elements';
import NthContainer from '../_common/NthHeader/NthContainer';
import ButtonSelector from './ButtonSelector';
import plantTypes from '../../../data/plantTypes';

type Props = {
  navigation: Object
};
type State = {
  selectedIndex: number,
  selectedColors: Array<string>,
  selectedLifeForms: Array<string>
};

class SearchScreen extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      selectedIndex: 0,
      selectedColors: [],
      selectedLifeForms: [],
    };
  }

  onColorSelected(selected: string) {
    const { selectedColors } = this.state;
    let newSelectedColors = _.cloneDeep(selectedColors);
    const indexOf = newSelectedColors.indexOf(selected);
    if (indexOf === -1) {
      newSelectedColors.push(selected);
    } else {
      newSelectedColors = _.without(selectedColors, selected);
    }
    this.setState({ selectedColors: newSelectedColors });
  }

  onLifeFormSelected(selected: string) {
    const { selectedLifeForms } = this.state;
    let newSelectedLifeForms = _.cloneDeep(selectedLifeForms);
    const indexOf = newSelectedLifeForms.indexOf(selected);
    if (indexOf === -1) {
      newSelectedLifeForms.push(selected);
    } else {
      newSelectedLifeForms = _.without(selectedLifeForms, selected);
    }
    this.setState({ selectedLifeForms: newSelectedLifeForms });
  }

  render() {
    const { navigation } = this.props;
    const { selectedIndex, selectedColors, selectedLifeForms } = this.state;
    const buttons = ['AND search', 'OR search'];
    return (
      <NthContainer onPress={() => navigation.openDrawer()} i18nHeader="navigation.title.search">
        <ButtonSelector
          elements={plantTypes.allColors}
          selected={selectedColors}
          type="colors"
          onPress={selected => this.onColorSelected(selected)}
        />
        <ButtonSelector
          elements={plantTypes.allLifeForms}
          selected={selectedLifeForms}
          type="lifeForms"
          onPress={selected => this.onLifeFormSelected(selected)}
        />
        <ButtonGroup
          onPress={selected => this.setState({ selectedIndex: selected })}
          selectedIndex={selectedIndex}
          buttons={buttons}
        />
      </NthContainer>
    );
  }
}

export default SearchScreen;
