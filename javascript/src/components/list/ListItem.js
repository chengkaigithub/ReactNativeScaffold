/**
 * 列表子组件
 */
import React, { Component } from 'react';
import { View } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import TouchableOpacity from '../touchable';
import { px } from '../../utils/ScreenUtil';
import styles from './styles';

const ARROW_MAP = {
  horizontal: 'chevron-thin-right',
  up: 'chevron-thin-up',
  down: 'chevron-thin-down',
};

export default class ListItem extends Component {
  static defaultProps = {
    lineFill: false,
    lineColor: '#ddd',
    showLine: true,
    extra: null,
    arrow: null,
    arrowSize: px(30),
    arrowColor: '#A9AEB6',
    onPress: null,
    interval: TouchableOpacity.defaultProps.interval
  }

  render() {
    const {
      children,
      lineFill,
      lineColor,
      index,
      length,
      extra,
      arrow,
      arrowSize,
      arrowColor,
      onPress,
      interval,
    } = this.props;

    const BoxView = onPress ? TouchableOpacity : View;

    const boxProps = onPress ? {
      onPress,
      interval,
      activeOpacity: 0.6,
    } : {};

    return (
      <BoxView {...boxProps}>
        <View style={styles.itemChildren}>
          <View style={styles.itemContent}>
            {children}
          </View>
          {extra}
          {
            arrow ?
              <Entypo
                name={ARROW_MAP[arrow]}
                style={[styles.itemArrow, { color: arrowColor, fontSize: arrowSize }]}
              />
              : null
          }
        </View>
        {
          index === length - 1 ? null :
            <View style={[styles.itemLine, {
              marginLeft: lineFill ? 0 : px(30),
              backgroundColor: lineColor,
            }]}/>
        }
      </BoxView>
    );
  }
}