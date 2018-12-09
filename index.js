/** @format */
import React from 'react';
import { Garden, Navigator, ReactRegistry, TitleAlignmentCenter } from 'react-native-navigation-hybrid';
import { HOME_PAGE_LOGIN_REQUEST_CODE } from './javascript/global-config';
import pages from './javascript/src/pages';
import fontUri from "./javascript/src/utils/FontUtil";
import HomePage from "./javascript/src/pages/home/HomePage";
import CouponMainPage from "./javascript/src/pages/coupon/CouponMainPage";
import LoginPage from "./javascript/src/pages/auth/LoginPage";
import ScreenWrapper from "./javascript/src/redux-source/ScreenWrapper";
import * as theme from "./javascript/src/config/theme.conf";
import { BarStyleLightContent } from "react-native-navigation-hybrid/build/index";
import { store } from './javascript/src/redux-source';

// 配置全局样式
Garden.setStyle({
  topBarStyle: BarStyleLightContent,
  topBarColor: theme.BASE_COLOR,
  screenBackgroundColor: '#f8f8f8', // 默认页面的背景色, 自定义路由界面的背景色需要自行界面设置
  // statusBarColorAndroid: '#00fff0', // android 5.0
  hideBackTitleIOS: true,
  elevationAndroid: 0,
  // shadowImage: {},
  titleTextColor: '#ffffff',
  // backIcon: Image.resolveAssetSource(require('./src/assets/images/home/account-on.png')),
  backIcon: { uri: fontUri('FontAwesome', 'arrow-left', 21) },
  titleAlignmentAndroid: TitleAlignmentCenter,
  topBarTintColor: '#ffffff',
  swipeBackEnabledAndroid: true,
  topBarShadowHidden: true,
  tabBarItemColor: theme.TAB_TINT_COLOR,
  tabBarSelectedItemColor: theme.BASE_COLOR
});

// 重要必须
ReactRegistry.startRegisterComponent(ScreenWrapper);

// 每一个页面都需要注册
Object.keys(pages).forEach((key) => {
  ReactRegistry.registerComponent(key, () => pages[key]);
});

// 重要必须
ReactRegistry.endRegisterComponent();

Navigator.setRoot({
  tabs: {
    children: [
      {
        stack: {
          children: [{ screen: { moduleName: 'HomePage' } }],
        },
      },
      {
        stack: {
          children: [{ screen: { moduleName: 'AccountPage' } }],
        },
      },
    ],
    options: {
      selectedIndex: 0, // 默认选中的 tab
    },
  },
});

const CHECK_LOGIN_COMPONENTS = ['CouponMainPage'];

// 路由拦截器
Navigator.setInterceptor((action, from, to, extras) => {
  // 当返回 true 时，表示你要拦截该操作
  const needCheck = CHECK_LOGIN_COMPONENTS.some(componentName => componentName === to);
  if (store.getState().userInfo.name === 'default' && needCheck) {
    Navigator.current().then(navigator => navigator.present('LoginPage', HOME_PAGE_LOGIN_REQUEST_CODE));
    return true;
  }
  return false;
});
