/**
 * Create by chengkai on 2018/12/17.
 * Describe: 间隔线条
 */

import React from 'react';
import { StyleSheet, View } from "react-native";
import PropTypes from 'prop-types';
import * as theme from "../../config/theme.conf";
import { px } from "../../utils/ScreenUtil";

const Line = (props) => {
  const { direction, marginBottom, marginTop, marginRight, marginLeft, backgroundColor } = props;
  let width, height;
  if (direction === Line.horizontal) {
    height = props.height || px(2) || StyleSheet.hairlineWidth;
    width = props.width || '100%';
  } else {
    height = props.height || '100%';
    width = props.width || px(2) || StyleSheet.hairlineWidth;
  }
  return (
    <View
      style={{
        backgroundColor, marginLeft, marginRight, marginTop, marginBottom, height, width
      }}
    />
  )
}

Line.horizontal = 'horizontal';
Line.vertical = 'vertical';

Line.propTypes = {
  backgroundColor: PropTypes.string,
  marginLeft: PropTypes.number,
  marginRight: PropTypes.number,
  marginTop: PropTypes.number,
  marginBottom: PropTypes.number,
  direction: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number
}

Line.defaultProps = {
  backgroundColor: theme.LINE_COLOR,
  marginLeft: 0,
  marginRight: 0,
  marginTop: 0,
  marginBottom: 0,
  direction: Line.horizontal
}

export default Line;