/**
 * Created by chengkai on 2017/11/24.
 * 币要服务协议
 */
import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { USER_REGISTE_AGREEMENT } from "../../config/string.conf";
import * as theme from "../../config/theme.conf";
import { px } from "../../components/screen-utils";

export default class UserUseAgreement extends Component {
  static navigationItem = {
    titleItem: {
      title: USER_REGISTE_AGREEMENT,
    }
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.textStyle}>
          <Text
            style={styles.white}>“随小宝”客户端申请人（以下简称“甲方”）经与随行付支付有限公司（以下简称“乙方”或“随行付”）协商一致，就甲方自愿申请乙方“随小宝”客户端产品、注册成为“随小宝”客户端用户，由乙方向甲方提供支付及相关业务功能的服务，为获得本协议项下的服务，请甲方认真阅读本协议的全部内容。</Text>
          <Text style={styles.white}>一、声明</Text>
          <Text>1、本协议是甲方通过乙方“随小宝”客户端以点击确认的方式选择接受本协议的全部内容，即表示甲方与乙方达成协议并同意接受本协议约定的全部内容。</Text>
          <Text
            style={styles.strong}>2、乙方对本协议条款已尽充分说明之义务，甲方已详细知晓对本协议享受的权利和义务；甲方对违反本协议时所应承担的违约责任的风险亦有明确的知晓；对本协议中关于限制或免除乙方责任的条款，以及增加甲方责任的条款，甲方均已仔细阅读、充分理解并自愿接受该等条款。</Text>
          <Text>3、甲方具有或经授权等方式取得签约主体资格，以确保签约有效。甲方确认其具有充分的民事权利和民事行为能力。</Text>
          <Text
            style={styles.strong}>4、注册“随小宝”的手机号码为乙方联系甲方的重要联系方式，如有变更，甲方应及时通知乙方。甲方应妥善保管“随小宝”客户端账户及密码信息，因账号、密码泄露导致其识别信息丢失、被盗的，甲方自行承担由此产生的法律后果和经济损失。</Text>
          <Text>5、<Text style={styles.strong}>甲方承诺：注册成为“随小宝”客户端用户时向乙方提供的资料均为真实、有效、完整的信息内容，乙方据此提供甲方相关的服务。</Text>资料信息发生变更时，应提前3个工作日在“随小宝”软件内手动提交最新信息，并通过乙方审核后才能正常使用随行付服务。若甲方提供的资料包含虚假、错误信息的，乙方保留暂停或终止甲方使用随行付产品及服务的权利，造成的损失由甲方自行承担。</Text>
          <Text>6、乙方有权根据业务需要随时变更或终止本协议项下的服务项目和服务内容。甲方同意乙方有权行使上述权利且不需对甲方或第三方承担任何责任。在必要时，乙方无需事先通知即可终止提供随行付服务，并暂停、关闭或删除甲方账号及账号中所有相关资料及档案。</Text>
          <Text>7、乙方有权随时修改本协议，并随时通过“随小宝”客户端、随行付官网或者本协议约定的方式公布最新协议版本或补充版本，甲方应查阅、了解修改的内容，并自觉遵守本协议的相关条款。甲方如继续使用乙方服务，则视为对修改内容的同意并同意修改后的协议效力追溯至其开始使用乙方服务之日；若甲方不同意乙方修改后的协议，甲方应当停止使用随行付服务。</Text>
          <Text>8、乙方对甲方所有的通知均可通过公告、电子邮件、手机短信或其他常规方式进行。通过公告、电子邮件、手机短信等方式的通知于发送之日视为已送达收件人，常规的信件于乙方向甲方在注册账户时提供的地址发出信件之后3日视为送达。甲方对于乙方的通知应当通过乙方对外正式公布的通信地址、传真号码等联系方式送达乙方。</Text>

          <Text style={styles.white}>二、服务内容</Text>
          <Text>1、甲方在“随小宝”软件注册成功后，即表示甲方成为随行付的特约商户，由乙方供甲方在合法经营范围之内为用户提供银行卡受理业务，同时乙方为甲方提供此受理业务的清结算服务。</Text>
          <Text>2、“随小宝”软件需与甲方的硬件终端设备进行绑定，甲方可在“随小宝”软件内实现移动增值服务。</Text>
          <Text>3、本协议项下的服务费从乙方的交易结算款中予以扣除。</Text>
          <Text>4、乙方扣除交易手续费后，将剩余款项支付至甲方指定的结算账户中。具体到账时间与甲方开户银行及银行间结算周期有关。</Text>
          <Text>5、甲乙双方达成一致，认可因计算手续费时该费用金额小数点后两位进位而导致手续费存在的微小误差。结算数据应以乙方提供的数据为准。</Text>

          <Text style={styles.white}>三、双方的权利、义务</Text>
          <Text>1、对于由于本协议产生的甲方应付款项，甲方同意乙方从甲方的待结算款项中予以扣除。若需通过其它方式支付的，须经双方协商一致并书面确认，该书面确认文件与本协议具有同等效力。</Text>
          <Text>2、妥善保管及合理使用硬件终端设备</Text>
          <Text style={styles.strong}>（1）甲方应按照乙方有关规定妥善使用和保管乙方提供的硬件终端设备，不得对其进行反向研究，不得将其用于协议许可范围以外的用途，不得转借他人。</Text>
          <Text>（2）甲方保证该硬件终端设备除由乙方授权的相关人员进行维护和更换外，其他人员不得进行检测、维护、更换、移动、改装或加装设备；如因使用、保管不当造成硬件终端设备丢失、灭失、损坏、业务停用或其他不良后果，甲方应负全部责任，如造成乙方损失的，甲方负责全额赔偿。</Text>
          <Text>3、甲方同意乙方基于自身之独立判断，有权于发现异常交易或有疑异或涉嫌违法之交易时，不经通知先行暂停或终止甲方的硬件终端设备，并拒绝甲方使用本服务之部份或全部。但是，判断和发现异常交易或有疑异或违法之交易，并不是乙方的一项义务和责任。</Text>
          <Text>4、甲方保证交易真实、正当、合法，不会违反法律法规，也不会侵犯任何第三方利益。如因甲方经营、使用过程中存在过错或者其与持卡人的交易被发卡机构退单、被监管机构认定违规等原因导致乙方损失，甲方应对乙方的全部损失进行赔偿。</Text>
          <Text>5、甲方有义务及时、妥善处理与持卡人之间的任何投诉和纠纷，自行承担全部经济及法律责任，并不得因上述投诉与纠纷影响乙方的声誉和形象；如上述投诉与纠纷给乙方造成经济损失，应由甲方全部承担。</Text>
          <Text>6、<Text style={styles.strong}>甲方不得保存持卡人的银行账户等敏感信息。</Text>如因甲方原因造成持卡人及银行卡相关信息泄漏，或甲方伪造、假冒持卡人及相关银行卡信息向乙方发出支付请求的，因此造成持卡人、银行、乙方的损失，甲方应承担全部赔偿责任，同时乙方有权暂停对甲方的服务。</Text>
          <Text>7、甲方须妥善保管交易信息资料。</Text>
          <Text>8、若因甲方操作失误，导致甲方与持卡人因银行卡结算发生任何争执投诉、索偿或纠纷时，由甲方负责处理，甲方可申请乙方提供相关协助。</Text>
          <Text>9、乙方不参与甲方与其持卡人之间的具体交易过程，仅为双方间的交易提供款项清结算服务。</Text>
          <Text>10、甲方不得对“随小宝”服务任何部分或“随小宝”服务之使用或获得，进行复制、拷贝、出售、转售或用于任何其它商业目的。</Text>
          <Text
            style={styles.strong}>11、甲方违反本协议约定，导致或产生的任何第三方主张的任何索赔、要求或损失，甲方同意赔偿乙方、合作公司、关联公司损失，包括合理的律师费，并使之免受损害。对此，乙方有权视甲方的行为性质，采取包括但不限于暂停使用、终止服务、限制使用、回收账号、追究法律责任等措施。若甲方为虚假商户或利用“随小宝”账号、随行付服务进行违法活动、捣乱、骚扰、欺骗以及其他违反本协议的行为，乙方有权回收其账户，停止一切服务。同时，乙方会视司法部门的要求，协助调查。</Text>
          <Text>12、甲方有义务配合乙方对随行付服务过程所进行风险监控和管理。</Text>
          <Text>13、乙方为提供更为便捷的服务，“随小宝”中不排除会提供各种物品或推广信息，如因上述产生纠纷，由甲方与实际的交易相对方协商解决，乙方不承担任何责任。乙方不对任何第三方网站承担责任。</Text>
          <Text>14、对于“随小宝”的收费产品和服务，您应该按照“随小宝”确定的资费政策选择适当的产品和服务。如果您不同意相关资费政策及收费方式，请立即停止使用该服务。</Text>
          <Text>15、为保障甲方交易及资金安全，甲方在使用随行付服务时，乙方有权对甲方交易及结算做出一定的规则限制，甲方知悉并同意乙方拥有制定及调整本服务限制规定的权利。</Text>

          <Text style={styles.white}>四、合规性</Text>
          <Text
            style={styles.strong}>1、甲方应保证不得将乙方提供的硬件终端设备和“随小宝”服务用于任何可能违反法律法规或侵害乙方或第三方合法权益的活动，包括但不限于本协议中列明的事项。因违反上述内容而造成的一切严重后果，由甲方自行承担责任。</Text>
          <Text>2、乙方有权监督甲方使用硬件终端设备和“随小宝”服务的情况。如根据乙方合理的独立判断认为甲方存在或可能存在违反法律法规或侵害乙方或第三方合法权益的行为，乙方有权单方面终止本协议，延迟结算或扣除甲方的未结算款项，甲方应赔偿乙方因此遭受的全部损失并承担本协议约定的各项违约责任和其他法律责任。</Text>
          <Text>3、甲方应遵守国家法律法规和相关规定以及各种社会公共利益或公共道德，如有违反导致任何法律后果的发生，甲方将以自己的名义独立承担全部法律责任。</Text>

          <Text style={styles.white}>五、退单</Text>
          <Text
            style={styles.strong}>1、如乙方收到来自银行或银联方面的甲方交易的退单或处罚通知，乙方自收到通知之日起两个工作日内从甲方的交易款项中全额扣除应付款项，用于偿还银行或银联。如甲方待结算款项的余额不足，乙方有权从后续的交易款项中予以扣除，直至扣足为止。若上述扣款方式仍不能足额赔付时，乙方保留继续追偿的法律权利；在甲方未能偿还全部应付款项时，乙方有权暂时中止向甲方提供结算服务，直至甲方全部偿还应付款项为止。</Text>
          <Text>2、乙方收到银行的退单通知后，有权根据甲方风险评估状况，决定是否停止向甲方提供本协议约定的服务。</Text>
          <Text>3、甲方对退单有异议的，可直接与持卡人及银行联系。乙方不处理关于退单异议的任何纠纷。</Text>
          <Text>4、对于甲方将乙方所提供的结算服务应用于本协议约定业务范围之外而产生的交易以及信用卡持卡人的拒付，甲方均应当无条件全额对持卡人或银行或乙方进行赔付。</Text>

          <Text style={styles.white}>六、保密条款</Text>
          <Text>1、甲方应严格遵守《银联卡账户及交易数据安全管理规则》相关保密规定，并对在本协议过程中知悉的各项技术、情报、资料、信息、数据、商业秘密及由此产生的技术成果承担严格的保密义务，但依据国家法律、法规、监管规定要求提供的除外。除按前述约定提供相关信息外，如需向其它任何第三方提供该等信息的，应事先得到随行付的许可，并明确使用范围、时间和内容。这里的“信息”是指任何以口头、书面、图表或电子方式存在的各方过去、现在或将来的商业计划、规章制度、财务信息、技术方案、操作手册等资料。</Text>
          <Text>2、甲方应建立详细的内部保密制度，并提供培训、检查等方式确保银行卡交易信息和数据的安全，限制数据访问权限并定期或者不定期更换随行付的使用密码。</Text>
          <Text>3、在本协议的签订过程中、存续期间以及协议终止后，甲方始终负有保守乙方商业秘密，甲方应承担因泄露商业秘密而造成的一切损失的赔偿责任。如有任何保密信息被非法取得或外泄，甲方应立即告知乙方，并立即采取措施弥补或减少损失。甲方没有及时通知并采取适当措施，致使损失扩大的，应当就扩大的损失承担责任。</Text>

          <Text style={styles.white}>七、隐私保护</Text>
          <Text>在甲方同意本协议或使用“随小宝”服务之日起，甲方即同意乙方按照以下条款来使用和披露其个人或企业信息。</Text>
          <Text>1、银行账户信息</Text>
          <Text>乙方所提供的服务将需要甲方提供其银行账户信息，在甲方提供相应信息后，乙方将严格履行相关保密约定。</Text>
          <Text>2、交易行为</Text>
          <Text>为了保障甲方使用“随小宝”服务的安全以及不断改进服务质量，乙方将记录并保存甲方登录和使用“随小宝”服务的相关信息，但乙方承诺不将此类信息提供给除乙方外的其他任何第三方（除双方另有约定或法律法规另有规定外）。</Text>
          <Text>3、交易信息的收集。</Text>
          <Text>甲方了解并同意，乙方为了保障交易安全，有权收集硬件的位置信息，并在发生可疑交易时通过“随小宝”客户端采用技术手段收集交易实时信息。</Text>
          <Text>4、为能够更为有效地提供服务，甲方同意，乙方有权将甲方注册及使用“随小宝”服务过程中所提供、形成的信息提供给银联、清算机构及乙方的关联公司。同时，乙方为更安全有效地向甲方提供服务，根据法律法规的规定，或乙方需识别甲方身份，或乙方认为甲方账户存在风险时，乙方有权要求甲方重新提交身份信息（包括但不限于身份证、户口本、护照等证件或其他文件）。除本协议另有规定外，乙方不对外公开或向第三方提供甲方的信息，但以下情况除外：</Text>
          <Text>（1）事先获得甲方的明确授权；</Text>
          <Text>（2）只有披露甲方的信息，才能提供其需要的产品和（或）服务；</Text>
          <Text>（3）按照本协议的要求进行的披露；</Text>
          <Text>（4）根据法律法规的规定；</Text>
          <Text>（5）按照政府主管部门、公安机关的要求；</Text>
          <Text>（6）为维护乙方及其关联公司的合法权益；</Text>
          <Text>（7）对甲方的身份真实性进行验证。</Text>

          <Text style={styles.white}>八、知识产权</Text>
          <Text>1、乙方拥有“随小宝”（包括但不限于客户端、硬件终端设备、系统）的全部知识产权，该等知识产权包括但不限于商标专用权、著作权、专利权、商业秘密所有权。</Text>
          <Text>2、乙方网站、客户端上所有内容，包括但不限于著作、图片、档案、资讯、资料、架构、画面的安排、页面设计，均由乙方或乙方关联企业依法拥有其知识产权，包括但不限于商标权、专利权、著作权、商业秘密等。</Text>
          <Text>3、非经乙方书面同意，任何人不得擅自使用、修改、复制、公开传播、改变、散布、发行或公开发表“随小宝”有关的程序或内容。</Text>
          <Text>4、尊重知识产权是甲方应尽的义务，如有违反，甲方应承担损害赔偿责任。</Text>

          <Text style={styles.white}>九、协议的终止</Text>
          <Text>甲方同意乙方基于单方独立判断，暂停或终止甲方的服务使用（或部分功能），并将甲方在本服务内容加以移除并删除。</Text>

          <Text style={styles.white}>十、免责条款</Text>
          <Text>1、因下列状况之一导致乙方系统无法正常运作，使甲方无法使用“随小宝”或随行付服务时，乙方对甲方不负任何责任：</Text>
          <Text>（1）病毒、木马、黑客攻击、系统不稳定、第三方服务瑕疵或政府行为等原因，造成乙方不能提供服务的；</Text>
          <Text>（2）乙方系统停机维护或升级；</Text>
          <Text>（3）甲方的手机或移动设备软件、系统、硬件和通信线路出现故障；</Text>
          <Text>（4）因硬件、操作系统、数据库、开发工具本身固有的技术缺陷而引起数据受损或被窃取的；</Text>
          <Text>（5）甲方操作不当或通过非乙方授权或认可的方式使用随行付服务；</Text>
          <Text>（6）银行或电信设备出现故障不能进行数据传输的；</Text>
          <Text>（7）台风、地震、海啸、洪水、停电、战争、罢工、骚乱或恐怖袭击等不可抗力因素；</Text>
          <Text>（8）发生乙方无法控制或无法预见的情形。</Text>
          <Text>2、确因发生不可抗力事件而导致乙方无法提供服务的，甲、乙双方应采取一切合理措施消除影响及防止损失的进一步扩大；不可抗力事件结束后，双方应继续履行其在本协议项下的义务。</Text>
          <Text>3、在法律允许的情况下，乙方对于与本协议有关或由本协议引起的任何间接的、惩罚性的、特殊的、派生的损失（包括业务损失、收益损失、利润损失、使用数据或其他经济利益的损失）均不负有任何责任，即使甲方事先已被告知此等损失的可能性。</Text>

          <Text style={styles.white}>十一、其他</Text>
          <Text>本协议之效力、解释、变更、执行与争议解决均适用中华人民共和国法律；没有相关法律规定的，参照通用国际商业惯例和（或）行业惯例。</Text>
          <Text style={styles.white}>因本协议产生之争议，均应依照中华人民共和国法律予以处理，并以乙方所在地人民法院管辖法院。</Text>
          <Text style={styles.white}>本公司不行使、未能及时行使或者未充分行使本条款或者按照法律规定所享有的权利，不应被视为放弃该权利，也不影响本公司在将来行使该权利。</Text>
          <Text style={styles.white}>以下无正文。</Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  textStyle: {
    margin: 10,
  },
  strong: {
    fontWeight: 'bold',
  },
  white: {
    marginTop: px(20),
  }
});
