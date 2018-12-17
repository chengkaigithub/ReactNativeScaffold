import React, { Component } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { deviceHeight, deviceWidth, isIphoneX, isLessThanAndroid6, px } from '../../utils/ScreenUtil';
import { HOME_PAGE } from '../../config/string.conf';
import * as theme from "../../config/theme.conf";
import { showLoading, showToast } from "../../utils/ToastUtil";
import fontUri from "../../utils/FontUtil";
import CommonWebView from "../common/CommonWebView";
import { BarStyleDarkContent, RESULT_OK } from "react-native-navigation-hybrid";
import { IS_ANDROID_OS } from "../../utils/PlatformUtil";
import { connect } from "react-redux";
import fetch from '../../sx-fetch';
import { HOME_PAGE_LOGIN_REQUEST_CODE } from "../../../global-config";
import { event } from '../../components';
import LottieAnimatedExample from "./test-lottie/LottieAnimatedExample";


const ON_COMPONENT_RESULT = 'ON_COMPONENT_RESULT';
/**
 * 主界面
 * @author chengkai
 */
@event()
@connect(state => ({ userInfo: state.userInfo }), dispatch => ({ dispatch: action => dispatch(action) }))
@fetch.inject()
export default class HomePage extends Component {
  static navigationItem = {
    topBarStyle: BarStyleDarkContent,
    topBarHidden: true,
    tabItem: {
      title: HOME_PAGE,
      icon: { uri: fontUri('FontAwesome', 'location-arrow', 24) },
      hideTabBarWhenPush: true,
    },
  };

  state = {
    bindMerchantName: '',
  };

  /**
   * 跳转到商户认证
   */
  jumpToMerchantAuth = () => {
    showToast('跳转到商户认证');
  };

  /**
   * 跳转到装机
   */
  jumpToInstallMachine = () => {
    this.props.navigator.push(
      'CommonWebView',
      { link: 'https://www.baidu.com' },
      { titleItem: { title: '有事儿没事儿找度娘!' } }
    );
  };

  /**
   * 跳转到额度管理
   */
  jumpToQuotaManager = () => {
    showLoading();
    this.props.$fetch.get('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        showToast('请求成功');
      })
      .catch((err) => {
        showToast('请求异常');
      })
      .done();
  };

  /**
   * 跳转到额度管理
   */
  jumpToCoupon = () => {
    this.props.navigator.push('CouponMainPage');
  };

  /**
   * 跳转绑定商户
   */
  jumpToBindMerchant = () => {
    showToast('跳转到绑定商户');
  };

  onComponentResultFunc = ({ requestCode, resultCode, data }) => {
    if (requestCode === HOME_PAGE_LOGIN_REQUEST_CODE && resultCode === RESULT_OK) {
      console.log('手动注册监听回调', requestCode, resultCode, data);
      if (data.loginStatus === 'success') {
        this.jumpToCoupon();
      }
    }
  }

  componentDidMount() {
    console.log('加载了Home界面', this.props.userInfo);
    this.props.event.on(ON_COMPONENT_RESULT, this.onComponentResultFunc);
  }

  // 使用高阶组件后回调失效, 需要手动添加监听, 手动移除
  onComponentResult(requestCode, resultCode, data) {
    console.log('HomePage onComponentResult', requestCode, resultCode, data);
  }

  render() {
    return (
      <ScrollView contentContainerStyle={styles.headerStyle}>
        <View>
        {/*<View style={styles.bannerContainerStyle}>*/}
          {/*<View style={styles.statusBarPlaceHolderStyle}/>*/}
          {/*<View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>*/}
            {/*<Text style={styles.bindMerchantTextStyle}*/}
                  {/*onPress={this.jumpToBindMerchant}>{BIND_MERCHANT}</Text>*/}
            {/*<Text numberOfLines={1}*/}
                  {/*style={styles.bindMerchantNameTextStyle}>{!!this.state.bindMerchantName ? this.state.bindMerchantName : NOT_BIND_MERCHANT_HINT}</Text>*/}
          {/*</View>*/}
          {/*<Image source={require('../../assets/images/home/home_bannner.png')}*/}
                 {/*style={styles.bannerImageStyle}/>*/}
        {/*</View>*/}
        {/*<View style={styles.funListContainerStyle}>*/}
          {/*<TouchableOpacity activeOpacity={0.7} style={styles.funListItemStyle} onPress={this.jumpToCoupon}>*/}
            {/*<Image source={require('../../assets/images/home/home_coupon.png')}*/}
                   {/*style={styles.funIconStyle}/>*/}
            {/*<Text style={styles.funTextStyle}>{COUPON}</Text>*/}
          {/*</TouchableOpacity>*/}
          {/*<TouchableOpacity activeOpacity={0.7} style={styles.funListItemStyle} onPress={this.jumpToQuotaManager}>*/}
            {/*<Image source={require('../../assets/images/home/home_quota_manage.png')}*/}
                   {/*style={styles.funIconStyle}/>*/}
            {/*<Text style={styles.funTextStyle}>{QUOTA_MANAGER}</Text>*/}
          {/*</TouchableOpacity>*/}
          {/*<TouchableOpacity activeOpacity={0.7} style={styles.funListItemStyle} onPress={this.jumpToMerchantAuth}>*/}
            {/*<Image source={require('../../assets/images/home/home_merchant_auth.png')}*/}
                   {/*style={styles.funIconStyle}/>*/}
            {/*<Text style={styles.funTextStyle}>{MERCHANT_AUTH}</Text>*/}
          {/*</TouchableOpacity>*/}
          {/*<TouchableOpacity activeOpacity={0.7} style={styles.funListItemStyle} onPress={this.jumpToInstallMachine}>*/}
            {/*<Image source={require('../../assets/images/home/home_install_machine.png')}*/}
                   {/*style={styles.funIconStyle}/>*/}
            {/*<Text style={styles.funTextStyle}>{INSTALL_MACHINE}</Text>*/}
          {/*</TouchableOpacity>*/}
        {/*</View>*/}
          <LottieAnimatedExample/>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  headerStyle: {
    width: deviceWidth,
    height: deviceHeight,
    alignItems: 'center',
    backgroundColor: theme.PAGE_BG_COLOR,
  },
  bannerContainerStyle: {
    backgroundColor: theme.COLOR_WHITE,
    paddingTop: isIphoneX() || IS_ANDROID_OS ? px(40) : 0,
  },
  statusBarPlaceHolderStyle: {
    backgroundColor: theme.COLOR_WHITE,
    width: deviceWidth,
    height: isLessThanAndroid6 ? 0 : px(40)
  },
  bannerImageStyle: {
    height: px(323),
    width: px(691),
    margin: px(30),
    marginTop: 0,
    backgroundColor: theme.COLOR_WHITE
  },
  funListContainerStyle: {
    width: deviceWidth,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.COLOR_WHITE
  },
  funListItemStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: px(23),
    flex: 1,
    marginBottom: px(20)
  },
  funIconStyle: {
    width: px(94),
    height: px(94)
  },
  funTextStyle: {
    fontSize: px(23),
    marginTop: px(17),
    color: theme.BASE_FONT_COLOR
  },
  todayTradeContainerStyle: {
    flexDirection: 'column',
    height: px(268),
    width: deviceWidth,
    backgroundColor: theme.COLOR_WHITE,
    marginTop: px(20)
  },
  todayTradeHeaderContainerStyle: {
    width: deviceWidth,
    flexDirection: 'row',
    alignItems: 'center'
  },
  blueIconStyle: {
    width: px(7),
    height: px(23),
    backgroundColor: theme.COLOR_TAB_BAR_BLUE,
    margin: px(30),
    marginRight: px(15)
  },
  todayTradeTextStyle: {
    fontSize: px(30),
    color: theme.COLOR_LIGHT_BLACK,
    fontWeight: 'bold'
  },
  todayTradeInfoContainerStyle: {
    flexDirection: 'row',
    marginLeft: px(32),
    marginRight: px(32),
    marginTop: px(20),
    height: px(138),
    backgroundColor: '#CFE1FF'
  },
  dateContainerStyle: {
    width: px(138),
    height: px(138),
    justifyContent: 'center',
    alignItems: 'center'
  },
  dateWeekTextStyle: {
    fontSize: px(26),
    color: theme.COLOR_WHITE,
    marginBottom: px(14)
  },
  dateTextStyle: {
    fontSize: px(22),
    color: theme.COLOR_WHITE
  },
  tradeMoneyContainerStyle: {
    marginRight: 1
  },
  tradeInfoContainerStyle: {
    flex: 1,
    backgroundColor: theme.COLOR_BLUE_GRAY,
    justifyContent: 'center',
    alignItems: 'center'
  },
  tradeInfoTextStyle: {
    fontSize: px(24),
    color: theme.COLOR_DEEP_BLUE,
    marginBottom: px(14)
  },
  detailTextStyle: {
    fontSize: px(48),
    color: theme.COLOR_DEEP_BLUE,
    fontWeight: 'bold'
  },
  cornerTextStyle: {
    fontSize: px(20),
    color: theme.COLOR_DEEP_BLUE
  },
  bindMerchantTextStyle: {
    margin: px(30),
    color: theme.COLOR_TAB_BAR_BLUE,
    fontSize: px(30)
  },
  bindMerchantNameTextStyle: {
    margin: px(30),
    color: theme.FONT_LIGHT_COLOR,
    fontSize: px(30),
    maxWidth: px(500)
  },

});
