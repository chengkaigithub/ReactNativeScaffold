/**
 * Created by chengkai on 2017/11/28.
 */
import React, { Component } from 'react';
import { Image, ImageBackground, Text, TextInput, TouchableOpacity, View } from 'react-native'
import PropTypes from 'prop-types';
import { px } from '../../utils/ScreenUtil';
import * as theme from '../../config/theme.conf';
import VerifyCodeButton from '../verify-code-button';
import Line from '../interval-line';
import { PHONE_IMEI } from "../../config/app.conf";
import styles from './styles';

const emptyMethod = () => {
};
const styleTypeEnum = {
  LIGHT: 'LIGHT',
  DARK: 'DARK'
}

export default class TextInputItem extends Component {

  static propTypes = {
    hintTitle: PropTypes.string,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    onChangeText: PropTypes.func,
    containerStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.number, PropTypes.array]), /* 整体样式 */
    inputStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.number]), /* 输入框样式 */
    titleStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.number]), /* 输入框前 提示文本样式 */
    isShowExpress: PropTypes.bool, /* 是否显示 明文/密文 显隐控制器 */
    isShowVerifiyCode: PropTypes.bool, /* 是否显示 验证码 控制器 */
    isShowPicVerifiyCode: PropTypes.bool, /* 是否显示 图形验证码 控制器 */
    picVerifyCodeUrl: PropTypes.string, /* 图形验证码地址 */
    picVerifyCodeStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.number]), /* 图形验证码样式(可选) */
    picVerifyCodeClick: PropTypes.func, /* 图形验证码点击事件 */
    verifyCodeUrl: PropTypes.string, /* 获取验证码的接口地址(后续传值使用,如果isShowVerifiyCode==true, 此项需填写) */
    smsType: PropTypes.string, /* 验证码类型(后续传值使用,如果isShowVerifiyCode==true, 此项需填写) */
    isSendOnRender: PropTypes.bool, /* 是否在渲染之后立即获取验证码 */
    onVerifyButtonClick: PropTypes.func, /* 点击验证码按钮回调 */
    onVerifySendSuccess: PropTypes.func, /* 验证码发送成功后回调 */
    isAutoHandleSendSMS: PropTypes.bool, /* 是否自动处理发送短信验证码事件 */
    styleType: PropTypes.string, /* [ DARK / LIGHT ] */
  }

  static defaultProps = {
    hintTitle: '',
    placeholder: '',
    type: 'default',
    onChangeText: emptyMethod,
    containerStyle: {},
    inputStyle: {},
    titleStyle: {},
    isShowExpress: false,
    isShowVerifiyCode: false,
    isShowPicVerifiyCode: false,

    picVerifyCodeUrl: '',
    picVerifyCodeClick: emptyMethod,
    picVerifyCodeStyle: styles.picVerifyCodeStyle,

    phoneNo: '',
    verifyCodeUrl: '',
    smsType: '',
    isSendOnRender: false,
    onVerifyButtonClick: emptyMethod,
    onVerifySendSuccess: emptyMethod,
    isAutoHandleSendSMS: true,

    styleType: styleTypeEnum.LIGHT
  }

  state = {
    isExpress: true, /* 密码是否显示明文 */
  }

  /**
   * 设置输入框内容显影
   */
  setInputVisible = () => this.setState({
    isExpress: !this.state.isExpress
  });

  /**
   * 渲染明文显示控件
   */
  renderExpress = () => {
    /* 密码显影控制图片 */
    let secureIcon = this.state.isExpress ?
      require('../../assets/images/common/eye_close.png') :
      require('../../assets/images/common/eye_show.png');
    return (
      <TouchableOpacity style={{ padding: px(20) }} onPress={this.setInputVisible}>
        <Image style={styles.expressStyle} resizeMode="contain" source={secureIcon}/>
      </TouchableOpacity>
    );
  }

  /**
   *  渲染 验证码组件
   */
  renderVerifiyCode = () => {
    let {
      isShowVerifiyCode,
      phoneNo,
      verifyCodeUrl,
      smsType,
      isSendOnRender,
      onVerifyButtonClick,
      onVerifySendSuccess,
      isAutoHandleSendSMS = true,
    } = this.props;

    if (!isShowVerifiyCode) return null;

    return (
      <VerifyCodeButton
        style={styles.verifyButtonStyle}
        _ref={ref => this.verifyCodeBtn = ref}
        onButtonClick={onVerifyButtonClick}
        onVerifySendSuccess={onVerifySendSuccess}
        isSendOnRender={isSendOnRender}
        verifyCodeUrl={verifyCodeUrl}
        isAutoHandleSendSMS={isAutoHandleSendSMS}
        phoneNo={phoneNo}
        smsType={smsType}/>
    )
  }

  /**
   *  渲染 图形验证码组件
   */
  renderPicVerifiyCode = () => {
    const { isShowPicVerifiyCode, picVerifyCodeUrl, picVerifyCodeClick, picVerifyCodeStyle, styleType } = this.props;

    if (!isShowPicVerifiyCode) return null;

    return (
      <TouchableOpacity activeOpacity={0.5} onPress={picVerifyCodeClick}>
        <ImageBackground resizeMode="contain" style={styles.picVerifyCodeContainerStyle}
                         source={require('../../assets/images/common/refresh.png')}>
          <Line direction={Line.vertical}
                backgroundColor={styleType === styleTypeEnum.LIGHT ? theme.LINE_COLOR : theme.COLOR_WHITE}/>
          <Image resizeMode="cover" style={picVerifyCodeStyle}
                 source={{ uri: picVerifyCodeUrl, headers: { 'imei': PHONE_IMEI } }}/>
        </ImageBackground>
      </TouchableOpacity>
    );
  }
  /**
   * 发送短信验证码
   * @private
   */
  _sendSMSVerifyCode = () => {
    this.verifyCodeBtn.sendSMSVerifyCode();
  }
  /**
   * 主动获取焦点
   */
  focus = () => {
    this.textInput.focus()
  }

  componentDidMount() {
    const {
      _ref = emptyMethod
    } = this.props;
    _ref({
      focus: () => this.focus(),
      sendSMSVerifyCode: this._sendSMSVerifyCode
    });
  }

  render() {
    const {
      styleType,
      hintTitle,
      placeholder,
      type,
      onChangeText,
      containerStyle,
      inputStyle,
      titleStyle,
      isShowExpress,
      isShowVerifiyCode,
      isShowPicVerifiyCode,
      ...otherProps
    } = this.props;

    const isExproess = this.state.isExpress;
    const ExpressComponent = isShowExpress ? this.renderExpress() : null;
    const VerifiyCodeComponent = isShowVerifiyCode ? this.renderVerifiyCode() : null;
    const picVerifiyCodeComponent = isShowPicVerifiyCode ? this.renderPicVerifiyCode() : null;
    const inputItemDarkStyle = styleType === styleTypeEnum.LIGHT ? null : styles.inputItemDarkStyle;

    return (
      <View style={[styles.inputItemStyle, inputItemDarkStyle, containerStyle]}>
        <View style={{ paddingLeft: px(31), width: px(hintTitle ? px(452) : 0) }}>
          <Text style={[styles.hintTitleStyle, titleStyle]}>{hintTitle}</Text>
        </View>
        <TextInput
          ref={ref => this.textInput = ref}
          style={[styles.textInputStyle, { marginLeft: hintTitle === '' ? 0 : px(30) }, inputStyle]}
          onChangeText={(text) => onChangeText(text)}
          clearButtonMode="while-editing"
          underlineColorAndroid='transparent'
          placeholderTextColor={theme.TAB_TINT_COLOR}
          placeholder={placeholder}
          keyboardType={type}
          secureTextEntry={isShowExpress && isExproess}
          {...otherProps}
        />
        {ExpressComponent}
        {VerifiyCodeComponent}
        {picVerifiyCodeComponent}
      </View>
    );
  }
}

TextInputItem.styleType = styleTypeEnum;