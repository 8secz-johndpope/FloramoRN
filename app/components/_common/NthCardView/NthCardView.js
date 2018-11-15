/* @flow */
import React from 'react';
import CardView from 'react-native-cardview';
import { scale } from 'react-native-size-matters';
import colors from '../../../styles/colors';
import nthCardViewHelper from './nthCardViewHelper';

type Margin = {
  top?: number,
  left?: number,
  bottom?: number,
  right?: number
}

type Props = {
  children: any,
  margin?: ?Margin,
  padding?: ?number
};

const defaultMargins = {
  top: scale(15),
  left: scale(15),
  bottom: scale(15),
  right: scale(15),
};

const NthCardView = (props: Props) => {
  const { children, margin, padding } = props;
  return (
    <CardView
      cardElevation={2}
      cardMaxElevation={2}
      cornerRadius={5}
      style={[
        { backgroundColor: colors.white, padding },
        nthCardViewHelper.getMargin(defaultMargins, margin)]
      }
    >
      {children}
    </CardView>
  );
};

NthCardView.defaultProps = {
  margin: defaultMargins,
  padding: 20,
};

export default NthCardView;
