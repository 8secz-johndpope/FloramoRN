/* @flow */
import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { verticalScale } from 'react-native-size-matters';
import NthText from '../NthText/NthText';
import colors from '../../../styles/colors';

type Props = {
  image: number,
  imageTitle?: string,
  onPress: ()=>void,
};

const DetailImage = (props: Props) => {
  const { image, imageTitle, onPress } = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{ height: verticalScale(200), justifyContent: 'flex-end' }}
    >
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
    </TouchableOpacity>
  );
};

DetailImage.defaultProps = {
  imageTitle: '',
};

export default DetailImage;
