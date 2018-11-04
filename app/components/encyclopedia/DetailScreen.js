/* @flow */
import React from 'react';
import NthText from '../_common/NthText/NthText';
import NthContainer from '../_common/NthHeader/NthContainer';

type Props = {
  navigation: Object
};

const DetailScreen = (props: Props) => {
  const { navigation } = props;
  const { plant } = navigation.state.params;
  return (
    <NthContainer onPress={() => navigation.goBack()} i18nHeader="title" type="back">
      <NthText text={plant.name} />
    </NthContainer>
  );
};

export default DetailScreen;
