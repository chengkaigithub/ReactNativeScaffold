import React from "react";
import { ActivityIndicator, Text, View } from "react-native";
import { px } from "../../utils/ScreenUtil";

/**
 * Create by chengkai on 2018/12/9.
 * Describe:
 */

export default () => (
  <View style={{ paddingTop: 50 }}>
    <ActivityIndicator/>
    <Text style={{ textAlign: 'center', color: '#ccc', marginTop: px(10) }}>正在加载中，请耐心等候...</Text>
  </View>
)