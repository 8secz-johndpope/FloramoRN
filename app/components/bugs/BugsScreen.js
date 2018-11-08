/* @flow */
import React, { Component } from 'react';
import {
  View, TextInput, Keyboard, Linking,
} from 'react-native';
import { Button } from 'react-native-elements';
import FontAwesome5Pro from 'react-native-vector-icons/FontAwesome5Pro';
import NthContainer from '../_common/NthHeader/NthContainer';
import I18n from '../../i18n';
import colors from '../../styles/colors';
import NthText from '../_common/NthText/NthText';
import fonts from '../../styles/fonts';

type Props = {
  navigation: Object
};
type State = {
  text: string
};

class BugsScreen extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      text: '',
    };
  }

  render() {
    const { navigation } = this.props;
    const { text } = this.state;
    return (
      <NthContainer onPress={() => navigation.openDrawer()} i18nHeader="navigation.title.bugs">
        <NthText
          i18n="bugs.intro"
          multiline
          onPress={() => Keyboard.dismiss()}
        />
        <View style={{
          borderColor: colors.primary500,
          marginVertical: 20,
          borderWidth: 1,
          padding: 5,
          flex: 1,
        }}
        >
          <TextInput
            multiline
            autoFocus
            value={text}
            numberOfLines={10}
            placeholder={I18n.t('bugs.fieldHint')}
            onChangeText={input => this.setState({ text: input })}
            style={{ flex: 1, textAlignVertical: 'top', fontFamily: fonts.montserrat.regular }}
          />
        </View>
        <Button
          iconRight
          icon={(
            <FontAwesome5Pro
              name="paper-plane"
              color={colors.secondary50}
              size={30}
              light
            />
          )}
          title="Send"
          buttonStyle={{
            height: 70,
            borderRadius: 5,
          }}
          titleStyle={{
            color: colors.secondary50,
          }}
          onPress={() => {
            const subject = I18n.t('bugs.subject');
            const email = I18n.t('bugs.email');
            Linking.openURL(`mailto:${email}?subject=${subject}&body=${text}`);
          }}
        />
      </NthContainer>
    );
  }
}

export default BugsScreen;
