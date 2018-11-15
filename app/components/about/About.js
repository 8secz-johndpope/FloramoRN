/* eslint-disable global-require */
/* @flow */
import React, { Component } from 'react';
import {
  Dimensions, Image, Linking, ScrollView, View,
} from 'react-native';
import { verticalScale } from 'react-native-size-matters';
import { Button, Overlay } from 'react-native-elements';
import I18n from '../../i18n';
import NthTextWithLinks from '../_common/NthText/NthTextWithLinks';
import NthContainer from '../_common/NthHeader/NthContainer';
import DetailImage from '../_common/DetailImage/DetailImage';
import NthText from '../_common/NthText/NthText';
import colors from '../../styles/colors';
import NthCardView from '../_common/NthCardView/NthCardView';

const images = {
  cushion: require('../../../assets/images/about/cushion.jpg'),
  hairs: require('../../../assets/images/about/hairs.jpg'),
  leaves: require('../../../assets/images/about/leaves.jpg'),
  rosette: require('../../../assets/images/about/rosette.jpg'),
};

const { width } = Dimensions.get('window');

type Props = {
  type: 'app' | 'cajas' | 'dmq' | 'paramo',
  image: number,
  navigation: Object
};
type State = {
  modalOpen: boolean,
  modalTitle: string,
  modalImage: ?number
};

class About extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      modalOpen: false,
      modalTitle: '',
      modalImage: null,
    };
  }

  onPress(type: string, data: string) {
    if (type === 'link') {
      Linking.openURL(data);
    } else {
      this.setState({
        modalOpen: true,
        modalTitle: `about.moreInfo.${data}`,
        modalImage: images[data],
      });
    }
  }

  infoOverlay() {
    const imageSize = width * 0.7;
    const { modalOpen, modalImage, modalTitle } = this.state;
    return (
      <Overlay
        isVisible={modalOpen}
        windowBackgroundColor="rgba(0, 0, 0, .75)"
        overlayBackgroundColor={colors.primary100}
        height="auto"
        width="auto"
        onBackdropPress={() => this.setState({ modalOpen: false })}
      >
        <View style={{ justifyContent: 'center' }}>
          <NthText i18n={modalTitle} size="title" multiline />
          <Image source={modalImage} style={{ marginVertical: 20, width: imageSize, height: imageSize }} resizeMode="cover" />
          <Button
            title={I18n.t('about.moreInfo.button')}
            buttonStyle={{
              borderRadius: 5,
            }}
            titleStyle={{
              color: colors.secondary50,
            }}
            onPress={() => {
              this.setState({ modalOpen: false });
            }}
          />
        </View>
      </Overlay>
    );
  }

  render() {
    const { type, image, navigation } = this.props;
    const paragraphs = I18n.t(`about.${type}`);
    return (
      <NthContainer onPress={() => navigation.openDrawer()} i18nHeader={`navigation.title.${type}`} noPadding>
        <View style={{ flex: 1, marginBottom: 20 }}>
          <ScrollView>
            <View>
              <DetailImage image={image} />
              <NthCardView>
                {paragraphs.map(paragraph => (
                  <NthTextWithLinks
                    key={paragraph}
                    paragraph={paragraph}
                    onPress={(linkType, data) => this.onPress(linkType, data)}
                    style={{ marginBottom: verticalScale(16) }}
                  />
                ))}
              </NthCardView>
            </View>
          </ScrollView>
          {this.infoOverlay()}
        </View>
      </NthContainer>
    );
  }
}

export default About;
