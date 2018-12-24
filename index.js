import React from 'react';
import PropTypes from 'prop-types';
import { Image, TouchableOpacity } from 'react-native';
import * as flags from './src';

const Flag = props => {
  const flag = flags[props.type][`icons${props.size}`][props.code];
  const unknownFlag = flags[props.type][`icons${props.size}`]['unknown'];
  if (!flag) return null;
  return (
    <TouchableOpacity onPress={props.onFlagPress}>
      <Image
        source={flag || unknownFlag}
        style={[{ width: props.size, height: props.size }, props.style]}
      />
    </TouchableOpacity>
  );
};

Flag.propTypes = {
  size: PropTypes.number,
  type: PropTypes.string,
  onFlagPress: PropTypes.func,
};

Flag.defaultProps = {
  size: 64,
  type: "shiny",
  onFlagPress: () => {},
};

export default Flag;
