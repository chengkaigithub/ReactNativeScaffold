import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { COUPON, } from '../../config/string.conf';
import { px } from "../../utils/ScreenUtil";

export default class CouponSearchResult extends Component {
  static navigationItem = {
    titleItem: {
      title: COUPON,
    }
  }

  render() {
    return (
      <View style={styles.containerStyle}>
        <Text style={{ fontSize: px(30) }}>优惠券搜索结果</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
