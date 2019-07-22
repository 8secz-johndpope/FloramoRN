/* @flow */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

type Props = {
  name: string,
  light?: boolean,
  solid?: boolean,
};

const NthIcon = (props: Props) => {
  const {
    name, solid, light, ...rest
  } = props;
  const icon = [];
  if (solid) {
    icon.push('fas');
  } else if (light) {
    icon.push('far');
  }
  if (!solid && !light) {
    console.warn('ICON WITH NO SOLID OR LIGHT!!', name);
    icon.push('far');
  }
  icon.push(name);
  return <FontAwesomeIcon icon={icon} {...rest} />;
};

NthIcon.defaultProps = {
  solid: false,
  light: false,
};

export default NthIcon;
