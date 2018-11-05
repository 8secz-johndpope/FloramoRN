/* @flow */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Image, View } from 'react-native';
import { Card } from 'react-native-elements';

type Props = {
  photos: Array<number>
};

const DetailGallery = (props: Props) => {
  const { photos } = props;
  return (
    <Card containerStyle={{ marginBottom: 24 }}>
      <View style={{ flexDirection: 'row' }}>
        {photos.map((photo, i) => (
          <Image
            key={`photo_${i}`}
            source={photo}
            style={{
              width: 128,
              height: 128,
              marginRight: 16,
            }}
          />
        ))}
      </View>
    </Card>
  );
};
export default DetailGallery;
