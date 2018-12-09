/**
 *
 */

import React, { cloneElement, Component } from 'react';
import { AppRegistry, DeviceEventEmitter, View } from 'react-native';

class TopView extends Component {
  // 构造
  constructor(props) {
    super(props);
    // 初始状态
    this.state = {
      element: {}
    };
  }

  componentDidMount() {
    DeviceEventEmitter.addListener('topViewAdd', e => this.setTopView(...e));
    DeviceEventEmitter.addListener('topViewRemove', this.removeTopView);
  }

  // FIXME 需要适当的时机
  // componentWillUnmount() {
  //   DeviceEventEmitter.removeAllListeners('topViewAdd');
  //   DeviceEventEmitter.removeAllListeners('topViewRemove');
  // }

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

const originRegisterComponent = AppRegistry.registerComponent;

AppRegistry.registerComponent = function (element, func) {
  const reg = func();
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