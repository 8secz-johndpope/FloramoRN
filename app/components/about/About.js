/* @flow */
import React, { Component } from 'react';
import { ScrollView, Image, View } from 'react-native';
import { verticalScale } from 'react-native-size-matters';
import { Card } from 'react-native-elements';
import I18n from '../../i18n';
import NthTextWithLinks from '../_common/NthText/NthTextWithLinks';
import NthContainer from '../_common/NthHeader/NthContainer';
import DetailImage from '../_common/DetailImage/DetailImage';

type Props = {
  type: 'app' | 'cajas' | 'dmq' | 'paramo',
  image: number,
  navigation: Object
};
type State = {};

class About extends Component<Props, State> {
  render() {
    const { type, image, navigation } = this.props;
    const paragraphs = I18n.t(`about.${type}`);
    return (
      <NthContainer onPress={() => navigation.openDrawer()} i18nHeader={`navigation.title.${type}`} noPadding>
        <View style={{ flex: 1, marginBottom: 20 }}>
          <ScrollView>
            <View>
              <DetailImage image={image} />
              <Card style={{ padding: 20 }}>
                {paragraphs.map(paragraph => (
                  <NthTextWithLinks
                    key={paragraph}
                    paragraph={paragraph}
                    style={{ marginBottom: verticalScale(16) }}
                  />
                ))}
              </Card>
            </View>
          </ScrollView>
        </View>
      </NthContainer>
    );
  }
}

export default About;
