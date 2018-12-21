/**
 *
 */

import React, { cloneElement, Component } from 'react';
import { AppRegistry, DeviceEventEmitter, View } from 'react-native';

let topViewAddListener;
let topViewRemoveListener;

class TopView extends Component {
  // 构造
  constructor(props) {
    super(props);
    // 初始状态
    this.state = {
      element: {}
    };

    topViewAddListener = DeviceEventEmitter.addListener('topViewAdd', e => this.setTopView(...e));
    topViewRemoveListener = DeviceEventEmitter.addListener('topViewRemove', this.removeTopView);
  }

  componentWillUnmount() {
    topViewAddListener && topViewAddListener.remove();
    topViewRemoveListener && topViewRemoveListener.remove();
    this.setState = (state, callback) => {return undefined;};
  }

  setTopView = (e, key) => {
    if (React.isValidElement(e)) {
      return this.setState({
        element: {
          ...this.state.element,
          [key || '_default']: e
        }
      });
    }
    return console.error("element must be valid react element?");
  }

  removeTopView = key => {
    const { element } = this.state;
    delete element[key || '_default'];
    this.setState({ element });
  }

  render() {
    const { element } = this.state;
    const elementArray = Object.keys(element || {});

    return elementArray.map((key, index) => cloneElement(element[key], {
      key: `key_${index}`,
    }));
  }
}

const maskStyle = {
  style: {
    flex: 1,
  }
}

let originRegisterComponent = AppRegistry.registerComponent;

AppRegistry.registerComponent = function (element, func) {
  var reg = func();
  return originRegisterComponent(element, function () {
    return class Comps extends Component {
      render() {
        return React.createElement(
          View,
          maskStyle,
          React.createElement(reg, this.props),
          React.createElement(TopView, null)
        )
      }
    };
  })
}

export default {
  set(...rest) {
    DeviceEventEmitter.emit('topViewAdd', rest)
  },
  remove(key) {
    DeviceEventEmitter.emit('topViewRemove', key)
  }
}