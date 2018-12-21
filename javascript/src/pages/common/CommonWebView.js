import React, { Component } from 'react';
import { StyleSheet, Text, WebView } from 'react-native';
import { EMPTY_STRING, H5_LOAD_ERROR_HINT } from '../../config/string.conf';
import * as theme from "../../config/theme.conf";
// import { hideToast, showLoading } from "../../utils/ToastUtil";
import { px } from "../../utils/ScreenUtil";
import fontUri from "../../utils/FontUtil";
import { event } from '../../components'

/**
 * 通用WebView(可层级返回)
 * @author chengkai
 *  this.props.navigator.push('CommonWebView', {link: 'https://www.baidu.com'}, { titleItem: { title: 'The Passing Title' } });
 */
@event()
export default class CommonWebView extends Component {
  static navigationItem = {
    titleItem: {
      title: EMPTY_STRING,
    },
    leftBarButtonItem: {
      icon: { uri: fontUri('FontAwesome', 'arrow-left', 21) },
      // 图片位置调整，仅对 iOS 生效
      insetsIOS: { top: -1, left: -8, bottom: 0, right: 0 },
      // 按钮点击事件处理
      action: navigator => navigator.state.params.onBackPage(),
      // 按钮是否可以点击
      enabled: true,
      // 按钮颜色
      // tintColor: '#FFFF00', // 默认取 topBarTintColor 的值
      renderOriginal: true, // 是否保留图片原来的颜色，默认为 false，如果该值为 true，tintColor 将失效
    },
  }

  state = {
    canGoBack: false,
  }
  onBackPage = () => {
    if (this.state.canGoBack) {
      this.mWebView.goBack();
      return true;
    } else {
      this.props.navigator.pop();
      return true;
    }
  }
  onShouldStartLoadWithRequest = (event) => {
    this.setState({ canGoBack: event.canGoBack });
    return true;
  };
  handlerOnNavigationStateChange = (navState) => {
    this.setState({ canGoBack: navState.canGoBack });
  }
  /**
   * 加载开始
   */
  onLoadStart = () => {
    // showLoading();
  }
  /**
   * 加载结束
   */
  onLoadEnd = () => {
    // hideToast();
  }
  /**
   * 加载成功
   */
  onLoadSuccess = () => {

  }
  /**
   * 加载失败
   */
  onError = () => {

  }
  onLoadErrorClick = () => {
    this.mWebView.reload();
  }
  renderErrorView = () => {
    return (
      <Text style={styles.errorViewText} onPress={this.onLoadErrorClick}>{H5_LOAD_ERROR_HINT}</Text>
    )
  }

  getUrlFromParams = () => {
    const { link } = this.props;
    return link;
  }

  componentDidMount() {
    const { navigator: { setParams } } = this.props;
    setParams({
      onBackPage: this.onBackPage,
    });
    // BackHandler.addEventListener('hardwareBackPress', this.onBackPage);
    this.props.event.on('androidBack', this.onBackPage);
  }

  componentWillUnmount() {
    // hideToast();
    // BackHandler.removeEventListener('hardwareBackPress', this.onBackPage);
  }

  componentDidDisappear() {
    // hideToast();
  }

  render() {

    let uri = this.getUrlFromParams();
    return (
      <WebView
        ref={ref => this.mWebView = ref}
        automaticallyAdjustContentInsets={false}
        style={styles.webViewStyle}
        source={{ uri }}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        decelerationRate="normal"
        onNavigationStateChange={this.handlerOnNavigationStateChange}
        onShouldStartLoadWithRequest={this.onShouldStartLoadWithRequest}
        startInLoadingState={true}
        scalesPageToFit={true}
        onLoadStart={this.onLoadStart}
        onLoadEnd={this.onLoadEnd}
        onLoad={this.onLoadSuccess}
        onError={this.onError}
        renderError={this.renderErrorView}
      />
    );
  }
}

const styles = StyleSheet.create({
  webViewStyle: {
    flex: 1,
    backgroundColor: '#fff',
  },
  errorViewText: {
    color: theme.DARK_COLOR_LEVEL_3,
    fontSize: px(30),
    textAlign: 'center',
    marginTop: 30
  }
})