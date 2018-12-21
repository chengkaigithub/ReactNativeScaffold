import { StyleSheet } from 'react-native';
import * as theme from '../../config/theme.conf';

/*
 * 公用样式
 */
export default StyleSheet.create({
  link: {
    color: "#108ee9"
  },
  disabledLink: {
    color: theme.DARK_COLOR_LEVEL_3,
  },
  pageView: {
    flex: 1,
    backgroundColor: theme.PAGE_BG_COLOR
  }
});