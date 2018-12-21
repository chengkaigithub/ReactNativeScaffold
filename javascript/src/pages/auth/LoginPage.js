/**
 * Create by chengkai on 2018/12/6.
 * Describe:
 */
import React, { Component } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import fetch from '../../sx-fetch';
import { Button, DismissKeyboardTouchable, TextInputItem } from '../../components';
import * as theme from "../../config/theme.conf";
import {
  BACK,
  CLICK_LOGIN_TO_EXPRESS_YOUR_CONSENT,
  LOGIN,
  PLEASE_INPUT_PHONE_NUMBER,
  PLEASE_INPUT_VERIFICATION_CODE,
  USER_AGREEMENT
} from "../../config/string.conf";
import { deviceWidth, isIphoneX } from "../../utils/ScreenUtil";
import { px } from "../../components/screen-utils";
import UserUseAgreement from "./UserUseAgreement";
import { connect } from "react-redux";
import { BarStyleDarkContent, RESULT_OK } from "react-native-navigation-hybrid";
import { showToast } from "../../utils/ToastUtil";
import Actions from "../../redux-source/actions";

@connect(state => ({ userInfo: state.userInfo }), dispatch => ({ dispatch: action => dispatch(action) }))
@fetch.inject()
export default class LoginPage extends Component {
  static navigationItem = {
    topBarHidden: true,
    topBarStyle: BarStyleDarkContent,
    topBarTintColor: '#000000',
  }

  constructor(props) {
    super(props);
    this.state = {
      phoneNum: '',
    };
  }

  login = () => {
    this.props.dispatch(Actions.UserActions.fetchUserInfo({
      name: 'superme',
      mobile: '1212-966-7799'
    }));
    showToast('登录成功', 2, () => {
      this.closeThisPage(true);
    }, true);
  }

  closeThisPage = (status) => {
    this.props.navigator.setResult(RESULT_OK, { loginStatus: status ? 'success' : 'cancel' });
    this.props.navigator.dismiss();
  }

  jumpToAgreement = () => {
    this.props.navigator.push('UserUseAgreement');
  }

  render() {
    return (
      <DismissKeyboardTouchable>
        <View style={styles.container}>
          <Image
            style={styles.headportraitStyle}
            source={require('../../assets/images/common/refresh.png')}
          />
          <TextInputItem
            hintTitle="手机号"
            styleType={TextInputItem.styleType.DARK}
            style={styles.textInputStyle}
            containerStyle={styles.textInputContainerStyle}
            placeholder={PLEASE_INPUT_PHONE_NUMBER}
            maxLength={11}
            type='phone-pad'
            value={this.state.phoneNum}
            onChangeText={(text) => {
            }}/>
          <TextInputItem
            hintTitle="短信验证码"
            styleType={TextInputItem.styleType.DARK}
            _ref={ref => this.textInputItem = ref}
            onVerifySendSuccess={this.onVerifySendSuccess}
            style={styles.textInputStyle}
            placeholder={PLEASE_INPUT_VERIFICATION_CODE}
            phoneNo={this.state.phoneNum}
            isShowVerifiyCode={true}
            smsType="LOGIN"
            type='phone-pad'
            maxLength={6}
            onChangeText={text => {
            }}/>
          <Button style={styles.buttonStyle} onPress={this.login}>
            {LOGIN}
          </Button>
          <Button style={styles.buttonStyle} onPress={this.closeThisPage}>
            {BACK}
          </Button>
          <View style={styles.bottomViewContainer}>
            <Text style={{ color: theme.DARK_COLOR_LEVEL_3, fontSize: px(24) }}>
              {CLICK_LOGIN_TO_EXPRESS_YOUR_CONSENT}
            </Text>
            <TouchableOpacity onPress={this.jumpToAgreement}>
              <Text style={{ color: theme.COLOR_PRIMARY, fontSize: px(24) }}>
                {USER_AGREEMENT}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </DismissKeyboardTouchable>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  headportraitStyle: {
    alignItems: 'center',
    marginTop: isIphoneX() ? px(163) : px(123),
    marginLeft: px(314),
    marginRight: px(314),
    width: px(122),
    height: px(122)
  },
  buttonStyle: {
    borderRadius: px(2),
    marginTop: px(112),
    marginLeft: px(36),
    marginRight: px(36),
    width: px(678),
    height: px(90)
  },
  textInputContainerStyle: {
    marginTop: px(83),
    marginBottom: px(73),
  },
  textInputStyle: {
    flex: 1,
    borderWidth: 0,
    borderColor: 'transparent',
    fontSize: px(26),
    height: px(120),
  },
  bottomViewContainer: {
    position: 'absolute',
    bottom: px(40),
    width: deviceWidth,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
});