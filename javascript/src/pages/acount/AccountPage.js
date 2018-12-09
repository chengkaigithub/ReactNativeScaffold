/**
 * Created by yangzishu
 */
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as theme from '../../config/theme.conf';
import { deviceHeight, deviceWidth } from '../../utils/ScreenUtil';
import fontUri from "../../utils/FontUtil";
import { BarStyleDarkContent } from "react-native-navigation-hybrid/build/index";
import { Button } from "../../components";
import Actions from "../../redux-source/actions";
import { showToast } from "../../utils/ToastUtil";
import { connect } from "react-redux";
import { px } from "../../components/screen-utils";

@connect(state => ({ userInfo: state.userInfo }), dispatch => ({ dispatch: action => dispatch(action) }))
export default class AccountPage extends Component {
  static navigationItem = {
    topBarStyle: BarStyleDarkContent,
    topBarHidden: true,
    // rightBarButtonItem: {
    //   // 导航栏右侧按钮
    //   // 可配置项同 leftBarButtonItem
    //   // 按钮文字，如果设置了 icon ，将会失效
    //   title: MINE,
    //   // icon 图片
    //   icon: Image.resolveAssetSource(require('../../assets/images/home/message-on.png')),
    //   // 图片位置调整，仅对 iOS 生效
    //   insetsIOS: { top: -1, left: -8, bottom: 0, right: 0 },
    //   // 按钮点击事件处理
    //   action: navigator => navigator.pop(),
    //   // 按钮是否可以点击
    //   enabled: true,
    //   // 按钮颜色
    //   // tintColor: '#FFFF00', // 默认取 topBarTintColor 的值
    //   renderOriginal: true, // 是否保留图片原来的颜色，默认为 false，如果该值为 true，tintColor 将失效
    // },
    // backInteractive: false,
    // swipeBackEnabled: false,
    tabItem: {
      title: '其他',
      icon: { uri: fontUri('FontAwesome', 'leaf', 24) },
      hideTabBarWhenPush: true,
    },
  }

  componentDidMount() {
    console.log('加载了Account界面');
  }

  logout = () => {
    this.props.dispatch(Actions.UserActions.fetchUserInfo({
      name: 'default',
      mobile: '180****0000'
    }));
    showToast('退出成功', 2, () => this.props.navigator.switchTab(0), false);
  }

  render() {
    return (
      <View style={styles.containerStyle}>
        <Text style={styles.titleStyle}>我的界面</Text>
        <Button style={styles.buttonStyle} onPress={this.logout}>
          退出
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: theme.PAGE_BG_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
    width: deviceWidth,
    height: deviceHeight,
  },
  titleStyle: {
    textAlign: 'center'
  },
  buttonStyle: {
    borderRadius: px(2),
    marginTop: px(112),
    marginLeft: px(36),
    marginRight: px(36),
    width: px(678),
    height: px(90)
  },
});