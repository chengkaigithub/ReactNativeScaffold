import React, { Children, cloneElement, Component } from 'react';
import { View } from 'react-native';
import ListItem from './ListItem';
import styles from './styles';

export default class List extends Component {
  static defaultProps = {
    renderHeader: undefined,
  };

  static Item = ListItem;

  render() {
    const { renderHeader, children } = this.props;

    return (
      <View>
        {
          renderHeader ?
            <View style={styles.itemChildren}>
              {renderHeader}
            </View> : null
        }
        <View style={styles.listBody}>
          {
            Children.map(children, (item, index) => {
              return cloneElement(item, {
                key: index,
                index,
                length: children.length
              });
            })
          }
        </View>
      </View>
    );
  }
}