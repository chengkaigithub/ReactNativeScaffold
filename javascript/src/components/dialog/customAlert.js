import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { px } from "../../utils/ScreenUtil";
import { Line } from "../index";
import * as theme from "../../config/theme.conf";

/**
 * Create by chengkai on 2018/12/20.
 * Describe: 渲染自定义的弹窗
 */

export const customAlert = (props = {}) => {
  const {
    positiveBtnText = '确定',
    negativeBtnText = '取消',
    onPositiveBtnClick = () => {},
    negativeBtnClick = () => {},
    message = '',
    hintInfo = undefined,
    singleBtn = false
  } = props;
  const titleContainerStyle = hintInfo ? styles.hintTitleContainerStyle : styles.titleContainerStyle;
  return (
    <View style={styles.containerStyle}>
      <View style={titleContainerStyle}>
        <Text style={styles.titleStyle}>{message}</Text>
      </View>
      {renderHintInfo(hintInfo)}
      <Line/>
      {renderBtn({ singleBtn, positiveBtnText, negativeBtnText, onPositiveBtnClick, negativeBtnClick })}
    </View>
  )
};

const renderHintInfo = hintInfo => (
  hintInfo ? (
    <View style={styles.hintContainerStyle}>
      <Text style={styles.hintTextStyle}>{hintInfo}</Text>
    </View>
  ) : undefined
);

const renderBtn = ({ singleBtn, positiveBtnText, negativeBtnText, onPositiveBtnClick, negativeBtnClick }) => {
  return singleBtn ? (
    <View style={styles.buttonContainerStyle}>
      <TouchableOpacity style={styles.cancelContainerStyle} activeOpacity={0.5} onPress={negativeBtnClick}>
        <Text style={styles.cancelTextStyle}>{negativeBtnText}</Text>
      </TouchableOpacity>
    </View>
  ) : (
    <View style={styles.buttonContainerStyle}>
      <TouchableOpacity style={styles.confirmContainerStyle} activeOpacity={0.5} onPress={onPositiveBtnClick}>
        <Text style={styles.confirmTextStyle}>{positiveBtnText}</Text>
      </TouchableOpacity>
      <Line direction={Line.vertical}/>
      <TouchableOpacity style={styles.cancelContainerStyle} activeOpacity={0.5} onPress={negativeBtnClick}>
        <Text style={styles.cancelTextStyle}>{negativeBtnText}</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  containerStyle: { backgroundColor: theme.COLOR_WHITE, width: px(540), minHeight: px(270), borderRadius: px(14) },
  titleContainerStyle: { minHeight: px(168), paddingVertical: px(42), justifyContent: 'center', alignItems: 'center' },
  hintTitleContainerStyle: { paddingVertical: px(42), justifyContent: 'center', alignItems: 'center' },
  hintContainerStyle: { paddingBottom: px(42), justifyContent: 'center', alignItems: 'center' },
  titleStyle: {
    textAlign: 'center',
    color: theme.DARK_COLOR_LEVEL_1,
    fontWeight: 'bold',
    fontSize: px(theme.FONT_SIZE_SMALL),
    lineHeight: px(42),
    marginLeft: px(33),
    marginRight: px(33)
  },
  hintTextStyle: {
    textAlign: 'center',
    color: theme.TAB_TINT_COLOR,
    fontWeight: 'bold',
    fontSize: px(theme.FONT_SIZE_SMALL),
    lineHeight: px(52),
    marginLeft: px(33),
    marginRight: px(33)
  },
  buttonContainerStyle: {
    height: px(100),
    borderBottomLeftRadius: px(14),
    borderBottomRightRadius: px(14),
    flexDirection: 'row'
  },
  confirmContainerStyle: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  confirmTextStyle: { color: theme.DARK_COLOR_LEVEL_1, fontSize: px(theme.FONT_SIZE_LARGE), textAlign: 'center', },
  cancelContainerStyle: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  cancelTextStyle: { color: theme.COLOR_PRIMARY, fontSize: px(theme.FONT_SIZE_LARGE), textAlign: 'center' }
})