/* @flow */
import React, { Component } from 'react';
import { Linking, ScrollView } from 'react-native';
import NthContainer from '../_common/NthHeader/NthContainer';
import NthTitledCardView from '../_common/NthCardView/NthTitledCardView';
import I18n from '../../i18n';
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

class CreditsScreen extends Component<Props, State> {
  render() {
    const { navigation } = this.props;
    const cards = I18n.t('credits.cards');
    return (
      <NthContainer onPress={() => navigation.openDrawer()} i18nHeader="navigation.title.credits">
        <ScrollView>
          {cards.map(card => (
            <NthTitledCardView key={card.title} title={card.title}>
              <NthTextWithLinks
                text={card.text}
                onPress={(type, tag) => onPress(type, tag)}
              />
            </NthTitledCardView>
          ))}
        </ScrollView>
      </NthContainer>
    );
  }
}

export default CreditsScreen;
