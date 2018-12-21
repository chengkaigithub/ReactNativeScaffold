```
  <TextInputItem
    hintTitle="手机号"
    inputStyle={styles.textInputStyle}
    containerStyle={styles.textInputContainerStyle}
    placeholder={PLEASE_INPUT_PHONE_NUMBER}
    maxLength={11}
    type='phone-pad'
    value={this.state.phoneNum}
    onChangeText={(text) => {
    }}/>

  <TextInputItem
    hintTitle="短信验证码"
    _ref={ref => this.textInputItem = ref}
    onVerifySendSuccess={this.onVerifySendSuccess}
    inputStyle={styles.textInputStyle}
    containerStyle={styles.textInputContainerStyle}
    placeholder={PLEASE_INPUT_VERIFICATION_CODE}
    phoneNo={this.state.phoneNum}
    isShowVerifiyCode={true}
    smsType="LOGIN"
    type='phone-pad'
    maxLength={6}
    onChangeText={text => {
    }}/>

  <TextInputItem
    inputStyle={styles.textInputStyle}
    containerStyle={styles.textInputContainerStyle}
    placeholder="请输入右侧验证码"
    maxLength={11}
    type='phone-pad'
    value={this.state.phoneNum}
    isShowPicVerifiyCode={true}
    onChangeText={(text) => {
    }}/>
    
    const styles = StyleSheet.create({
      textInputContainerStyle: {
        marginTop: px(20),
        marginBottom: px(20),
      },
      textInputStyle: {
        flex: 1,
        borderWidth: 0,
        borderColor: 'transparent',
        fontSize: px(31),
      }
    })
```