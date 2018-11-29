/* @flow */
import React, { Component, Fragment } from 'react';
import _ from 'lodash';
import { ButtonGroup } from 'react-native-elements';
import { View } from 'react-native';
import NthContainer from '../_common/NthHeader/NthContainer';
import TraitSelector from './ButtonSelector';
import plantTypes from '../../../data/plantTypes';
import NthInput from '../_common/NthInput/NthInput';
import I18n from '../../i18n';
import NthText from '../_common/NthText/NthText';
import colors from '../../styles/colors';
import NthButton from '../_common/NthButton/NthButton';
import species from '../../../data/species';
import type { Plant } from '../../../data/plantTypes';
import appNavigation from '../../navigation/Routes';
import EncyclopediaList from '../encyclopedia/EncyclopediaList';

type Props = {
  navigation: Object
};
type State = {
  selectedIndex: number,
  selectedColors: Array<string>,
  selectedLifeForms: Array<string>,
  input: string,
  results: Array<Object>,
  hasSearched: boolean
};

const hintText = (props: Object) => (
  <NthText
    {...props}
    lineHeight={1.3}
    font="barlow"
    size="smallish"
  />
);

const containsAnySelectedColor = (specie: Object, selectedColors: Array<string>) => {
  let contains = false;
  selectedColors.forEach((color) => {
    if (specie.colors.indexOf(color) > -1) {
      contains = true;
    }
  });
  return contains;
};

const containsAllSelectedColors = (specie: Object, selectedColors: Array<string>) => {
  let contains = 0;
  selectedColors.forEach((color) => {
    if (specie.colors.indexOf(color) > -1) {
      contains += 1;
    }
  });
  return contains === selectedColors.length;
};

const containsAnySelectedLifeForm = (specie: Object, selectedLifeForms: Array<string>) => {
  let contains = false;
  selectedLifeForms.forEach((lifeForm) => {
    if (specie.lifeForms.indexOf(lifeForm) > -1) {
      contains = true;
    }
  });
  return contains;
};

const containsAllSelectedLifeForms = (specie: Object, selectedLifeForms: Array<string>) => {
  let contains = 0;
  selectedLifeForms.forEach((lifeForm) => {
    if (specie.lifeForms.indexOf(lifeForm) > -1) {
      contains += 1;
    }
  });
  return contains === selectedLifeForms.length;
};

const containsInput = (specie: Object, input: string) => {
  const containsInSpecies = specie.species.toLowerCase().includes(input);
  const containsInGenus = specie.genus.toLowerCase().includes(input);
  const containsInFamily = specie.family.toLowerCase().includes(input);
  return containsInSpecies || containsInGenus || containsInFamily;
};

const filterByColor = (list: Array<Object>, selectedColors: Array<string>, operation: 'and' | 'or') => {
  let returnList = _.cloneDeep(list);
  if (operation === 'or') {
    returnList = [];
  }
  if (selectedColors.length > 0) {
    if (operation === 'or') {
      returnList = list.filter(specie => containsAnySelectedColor(specie, selectedColors));
    } else {
      returnList = list.filter(specie => containsAllSelectedColors(specie, selectedColors));
    }
  }
  return returnList;
};

const filterByLifeForm = (list: Array<Object>, selectedLifeForms: Array<string>, operation: 'and' | 'or') => {
  let returnList = _.cloneDeep(list);
  if (operation === 'or') {
    returnList = [];
  }
  if (selectedLifeForms.length > 0) {
    if (operation === 'or') {
      returnList = list.filter(specie => containsAnySelectedLifeForm(specie, selectedLifeForms));
    } else {
      returnList = list.filter(specie => containsAllSelectedLifeForms(specie, selectedLifeForms));
    }
  }
  return returnList;
};

const filterByName = (list: Array<Object>, input: string, operation: 'and' | 'or') => {
  let returnList = _.cloneDeep(list);
  if (operation === 'or') {
    returnList = [];
  }
  const trimmedInput = input.trim().toLowerCase();
  if (trimmedInput.length > 0) {
    returnList = list.filter(specie => containsInput(specie, trimmedInput));
  }
  return returnList;
};

class SearchScreen extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      selectedIndex: 0,
      selectedColors: [],
      selectedLifeForms: [],
      input: '',
      results: [],
      hasSearched: false,
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

  onChange(value: string) {
    this.setState({ input: value });
  }

  onPlantPress(plant: Plant) {
    const { navigation } = this.props;
    navigation.navigate({
      ...appNavigation.navigationTree.detail,
      ...{ params: { plant } },
    });
  }

  onSearchPressed() {
    const {
      selectedLifeForms, selectedColors, selectedIndex, input,
    } = this.state;
    let filteredSpecies = _.cloneDeep(species);
    const operation = selectedIndex === 1 ? 'or' : 'and';
    if (operation === 'and') {
      filteredSpecies = filterByColor(filteredSpecies, selectedColors, operation);
      filteredSpecies = filterByLifeForm(filteredSpecies, selectedLifeForms, operation);
      filteredSpecies = filterByName(filteredSpecies, input, operation);
    } else {
      const colorSpecies = filterByColor(filteredSpecies, selectedColors, operation);
      const lifeFormSpecies = filterByLifeForm(filteredSpecies, selectedLifeForms, operation);
      const inputSpecies = filterByName(filteredSpecies, input, operation);
      filteredSpecies = [...colorSpecies, ...lifeFormSpecies, ...inputSpecies];
      filteredSpecies = _.uniq(filteredSpecies);
    }
    this.setState({
      results: filteredSpecies,
      hasSearched: true,
    });
  }

  traitsSelectors() {
    const { selectedColors, selectedLifeForms } = this.state;
    return (
      <Fragment>
        <TraitSelector
          elements={plantTypes.allColors}
          selected={selectedColors}
          type="colors"
          onPress={selected => this.onColorSelected(selected)}
        />
        <TraitSelector
          elements={plantTypes.allLifeForms}
          selected={selectedLifeForms}
          type="lifeForms"
          onPress={selected => this.onLifeFormSelected(selected)}
        />
      </Fragment>
    );
  }

  andOrToggle() {
    const { selectedIndex } = this.state;
    const element1 = () => <NthText i18n="search.andSearch" font="barlow" />;
    const element2 = () => <NthText i18n="search.orSearch" font="barlow" />;
    const buttons = [{ element: element1 }, { element: element2 }];
    return (
      <ButtonGroup
        onPress={selected => this.setState({ selectedIndex: selected })}
        selectedIndex={selectedIndex}
        selectedButtonStyle={{ backgroundColor: colors.primary200 }}
        buttons={buttons}
        containerStyle={{ marginTop: 20 }}
      />
    );
  }

  input() {
    const { input } = this.state;
    return (
      <NthInput
        i18nLabel="search.input"
        value={input}
        onChangeText={value => this.onChange(value)}
      />
    );
  }

  andOrHint() {
    const { selectedIndex } = this.state;
    let hint = 'and';
    if (selectedIndex === 1) {
      hint = 'or';
    }
    const props = {
      i18n: `search.hint.${hint}`,
      weight: 'semiBold',
    };
    return hintText(props);
  }

  colorHint() {
    const { selectedColors } = this.state;
    let props = {};
    if (selectedColors.length === 0) {
      props = {
        i18n: 'search.hint.noColor',
      };
    } else {
      const myColors = selectedColors.map(color => I18n.t(`colors.${color}`));
      props = {
        i18n: 'search.hint.color',
        i18nParams: { colors: _.join(myColors, ', ') },
      };
    }
    return hintText(props);
  }

  lifeFormHint() {
    const { selectedLifeForms } = this.state;
    let props = {};
    if (selectedLifeForms.length === 0) {
      props = {
        i18n: 'search.hint.noLifeForm',
      };
    } else {
      const myLifeForms = selectedLifeForms.map(lifeForm => I18n.t(`lifeForms.${lifeForm}`));
      props = {
        i18n: 'search.hint.lifeForm',
        i18nParams: { lifeForms: _.join(myLifeForms, ', ') },
      };
    }
    return hintText(props);
  }

  inputHint() {
    const { input } = this.state;
    const trimmedInput = input.trim(); let props = {};
    if (trimmedInput.length === 0) {
      props = {
        i18n: 'search.hint.noInput',
      };
    } else {
      props = {
        i18n: 'search.hint.input',
        i18nParams: { input: trimmedInput },
      };
    }
    return hintText(props);
  }

  resetResults() {
    this.setState({
      results: [],
      hasSearched: false,
    });
  }

  renderForm() {
    return (
      <Fragment>
        {this.traitsSelectors()}
        {this.input()}
        {this.andOrToggle()}

        {this.andOrHint()}
        {this.colorHint()}
        {this.lifeFormHint()}
        {this.inputHint()}
        <View style={{ marginTop: 20 }}>
          <NthButton i18nTitle="search.button" onPress={() => this.onSearchPressed()} />
        </View>
      </Fragment>
    );
  }

  renderResults() {
    const { results } = this.state;
    return (
      <EncyclopediaList
        i18nHeader="search.header"
        i18nHeaderParams={{ count: results.length }}
        plantList={results}
        onPlantPressed={plant => this.onPlantPress(plant)}
      />
    );
  }

  render() {
    const { navigation } = this.props;
    const { hasSearched } = this.state;
    const headerProps = {};
    let component = null;
    if (hasSearched) {
      headerProps.onPress = () => this.resetResults();
      headerProps.i18nHeader = 'navigation.title.search';
      headerProps.type = 'back';
      headerProps.noPadding = true;
      component = this.renderResults();
    } else {
      headerProps.onPress = () => navigation.openDrawer();
      headerProps.i18nHeader = 'navigation.title.tropicosResults';
      headerProps.type = 'hamburger';
      headerProps.noPadding = false;
      component = this.renderForm();
    }

    return (
      <NthContainer {...headerProps}>
        {component}
      </NthContainer>
    );
  }
}

export default SearchScreen;
