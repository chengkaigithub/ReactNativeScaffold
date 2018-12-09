import React, { Component } from 'react';
import { Button, StyleSheet, View } from 'react-native';

import { px } from '../../utils/ScreenUtil';
import { Image } from "../../components";
import * as theme from '../../config/theme.conf';
import { COUPON, } from '../../config/string.conf';


export default class CouponMainPage extends Component {
  static navigationItem = {
    titleItem: {
      title: COUPON,
    },
  }

  clickButton = () => {
    this.props.navigator.push('CouponSearchResult');
  }

  render() {
    return (
      <View style={styles.containerStyle}>
        <Button style={styles.btnStyle} onPress={this.clickButton} title="跳转结果界面" color="#841584"/>
        <Image
          style={styles.imgStyle}
          source={{ uri: 'https://gaopin-preview.bj.bcebos.com/133101093973.jpg' }}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    backgroundColor: theme.PAGE_BG_COLOR,
    flexDirection: 'column',
    alignItems: 'center'
  },
  imgStyle: { width: px(692), height: px(364) },
  btnStyle: { margin: px(30) }
});
