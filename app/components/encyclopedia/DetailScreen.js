/* @flow */
import React from 'react';
import { View, ImageBackground, Image } from 'react-native';
import { verticalScale } from 'react-native-size-matters';
import NthText from '../_common/NthText/NthText';
import NthContainer from '../_common/NthHeader/NthContainer';

type Props = {
  navigation: Object
};

const DetailScreen = (props: Props) => {
  const { navigation } = props;
  const { plant } = navigation.state.params;
  const fullName = `${plant.gender} ${plant.name}`;
  return (
    <NthContainer onPress={() => navigation.goBack()} header={fullName} type="back" noPadding>
      <View style={{ backgroundColor: 'red', flex: 1 }}>
        <View style={{ backgroundColor: 'blue', height: verticalScale(200), overflow: 'hidden' }}>
          <Image
            resizeMode="cover"
            source={plant.detailImage}
            style={{
              width: '100%', backgroundColor: 'pink', bottom: 0, position: 'absolute',
            }}
          />
        </View>
        {/* <ImageBackground */}
        {/* resizeMode="cover" */}
        {/* source={plant.photos[1]} */}
        {/* style={{ width: '100%', height: verticalScale(300) }} */}
        {/* > */}
        {/* <NthText text={fullName} /> */}
        {/* </ImageBackground> */}
      </View>
    </NthContainer>
  );
};

export default DetailScreen;
