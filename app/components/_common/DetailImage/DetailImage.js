/* @flow */
import React from 'react';
import { Image, View } from 'react-native';
import { verticalScale } from 'react-native-size-matters';
import NthText from '../NthText/NthText';
import colors from '../../../styles/colors';

type Props = {
  image: number,
  imageTitle?: string,
};

const DetailImage = (props: Props) => {
  const { image, imageTitle } = props;
  return (
    <View style={{ height: verticalScale(200), justifyContent: 'flex-end' }}>
      <Image
        resizeMode="cover"
        source={image}
        style={{
          height: verticalScale(200),
          width: '100%',
        }}
      />
      <NthText
        shadow
        text={imageTitle}
        color={colors.primary50}
        size="title"
        font="barlow"
        style={{
          position: 'absolute',
          bottom: 10,
          right: 10,
        }}
      />
    </View>
  );
};

DetailImage.defaultProps = {
  imageTitle: '',
};

export default DetailImage;
