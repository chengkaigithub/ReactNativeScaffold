import React, { Component } from 'react';
import { SegmentedControlIOS } from 'react-native';
import Theme from '../theme';
import propTypes from './PropsType';

export default class SegmentedControl extends Component {
  static propTypes = propTypes;

  static defaultProps = {
    tintColor: Theme.themeColor,
    selectedIndex: 0,
    disabled: false,
  }

  render() {
    const { disabled, ...restProps } = this.props;

    return (
      <SegmentedControlIOS
        {...restProps}
        enabled={!disabled}
      />
    );
  }
}