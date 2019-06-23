/* @flow */
import React, { Component } from 'react';
import { Linking, ScrollView, View } from 'react-native';
import I18n from '../../i18n';
import colors from "../../styles/colors";
import NthTitledCardView from '../_common/NthCardView/NthTitledCardView';
import NthContainer from '../_common/NthHeader/NthContainer';
import NthIcon from "../_common/NthIcon/NthIcon";
import NthTextWithLinks from '../_common/NthText/NthTextWithLinks';

type Props = {
  navigation: Object
};
type State = {};

const onPress = (type: string, data: string) => {
  if (type === 'link') {
    Linking.openURL(data);
  } else {
    Linking.openURL(`mailto:${data}`);
  }
};

const textCardContent = text => (
  <NthTextWithLinks
    text={text}
    onPress={(type, tag) => onPress(type, tag)}
  />
);

const listCardContent = items => items.map(item => (
  <View key={item} style={{flexDirection: 'row'}}>
    <NthIcon name="leaf" solid style={{marginRight: 6}} color={colors.secondary400} />
    <NthTextWithLinks
      text={item}
      onPress={(type, tag) => onPress(type, tag)}
      style={{marginBottom: 10}}
    />
  </View>
));

const getCardContent = card => card.type === 'text' ? textCardContent(card.text) : listCardContent(card.text);

const getCard = card => {
  return (
    <NthTitledCardView key={card.title} title={card.title}>
      {getCardContent(card)}
    </NthTitledCardView>
  )
};

class CreditsScreen extends Component<Props, State> {
  render() {
    const {navigation} = this.props;
    const cards = I18n.t('credits.cards');
    return (
      <NthContainer onPress={() => navigation.openDrawer()} i18nHeader="navigation.title.credits">
        <ScrollView>
          {cards.map(card => getCard(card))}
        </ScrollView>
      </NthContainer>
    );
  }
}

export default CreditsScreen;
