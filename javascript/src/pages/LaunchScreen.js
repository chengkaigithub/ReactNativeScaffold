import React, { Component } from 'react';
import { connect } from "react-redux";
import { PageLoading } from "../components";

@connect(state => ({ userInfo: state.userInfo }))
export default class LaunchScreen extends Component {
  static navigationItem = {
    topBarHidden: true,
  }

  constructor(props) {
    super(props);
    this.auth();
  }

  /**
   * 跳转到欢迎页面
   * @return {void}
   */
  goToLoginPage = () => {
    this.props.navigator.push('MainTabHome');
  }
  /**
   * 跳转到首页
   * @return {void}
   */
  goToTabPage = () => {
    this.props.navigator.push('MainTabHome');
  }

  auth = () => {
    const userInfo = this.props.userInfo;
    if (userInfo && userInfo.name === 'superme') {
      this.goToTabPage();
    } else {
      this.goToLoginPage();
    }
  }

  render() {
    return (
      <PageLoading/>
    );
  }
}