/**
 * Create by chengkai on 2018/12/8.
 * Describe:
 */

import HomeAll from './home/navigation';
import AccountAll from './acount/navigation';
import CouponAll from './coupon/navigation';
import AuthAll from './auth/navigation';
import CommonAll from './common/navigation';

export default {
  ...HomeAll, ...AccountAll, ...CouponAll, ...AuthAll, ...CommonAll
}