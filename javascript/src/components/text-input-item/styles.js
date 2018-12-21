import { StyleSheet } from 'react-native';
import { px } from "../../utils/ScreenUtil";
import * as theme from "../../config/theme.conf";

/**
 * Create by chengkai on 2018/12/20.
 * Describe:
 */

export default StyleSheet.create({
  inputItemStyle: {
    flexDirection: 'row',
    height: px(100),
    marginTop: 0,
    marginBottom: 0,
    alignItems: 'center',
    backgroundColor: theme.COLOR_WHITE
  },
  inputItemDarkStyle: {
    borderRadius: px(14),
    backgroundColor: theme.DARK_COLOR_LEVEL_5,
    marginLeft: px(37),
    marginRight: px(37)
  },
  hintTitleStyle: {
    fontSize: px(31),
    color: theme.DARK_COLOR_LEVEL_1
  },
  textInputStyle: {
    flex: 1,
    borderWidth: 0,
    borderColor: 'transparent',
    fontSize: px(31),
  },
  picVerifyCodeContainerStyle: {
    width: px(209),
    height: px(53),
    flexDirection: 'row',
    paddingLeft: px(28),
    paddingRight: px(28)
  },
  picVerifyCodeStyle: {
    width: px(153),
    height: px(53)
  },
  expressStyle: {
    width: px(40),
    height: px(40),
  },
  verifyButtonStyle: {
    marginRight: px(26)
  }
});