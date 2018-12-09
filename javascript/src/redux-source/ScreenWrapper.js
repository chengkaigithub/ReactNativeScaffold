import React, { Component } from "react";
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react'
import { persistor, store } from "./index";
import { PageLoading } from "../components";

/**
 * Create by chengkai on 2018/12/9.
 * Describe: redux 高阶容器组件
 */

export default ScreenWrapper = (screenProvider) => {
  const Screen = screenProvider();

  class ScreenWrapper extends Component {
    render() {
      return (
        <Provider store={store}>
          <PersistGate loading={<PageLoading/>} persistor={persistor}>
            <Screen {...this.props} />
          </PersistGate>
        </Provider>
      );
    }
  }

  return ScreenWrapper;
}