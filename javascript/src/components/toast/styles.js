import { Platform, StyleSheet } from 'react-native';

import { px } from '../../utils/ScreenUtil';

export default StyleSheet.create({
  toastView: {
    ...StyleSheet.absoluteFillObject,
    top: Platform.OS === 'ios' ? 64 : 54,
    zIndex: 1000,
    justifyContent: 'center',
    alignItems: 'center',
  },
  toastInfoView: {
    minWidth: px(150),
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: px(49),
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    borderRadius: px(14),
    minHeight: px(80),
    marginHorizontal: px(25)
  },
  toastText: {
    color: '#fff',
    fontSize: px(24),
    lineHeight: px(26),
    paddingTop: px(22),
    paddingBottom: px(20),
    backgroundColor: 'transparent',
  },
  toastBody: {
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: px(160),
    minHeight: px(160),
    padding: px(10),
    borderRadius: px(14),
    backgroundColor: '#000',
    opacity: 0.8,
  },
  messageText: {
    minWidth: px(100),
    color: '#fff',
    fontSize: px(26),
    lineHeight: px(26),
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: px(20),
    marginHorizontal: px(20),
    backgroundColor: 'transparent',
  }
});