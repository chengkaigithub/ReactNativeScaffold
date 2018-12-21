```
class TestDialog extends Compinents{
    ...
    openDialog = () => {
        this.doaligInstance = Dialog.alert({
          positiveBtnText: '确定',
          negativeBtnText: '取消',
          message: '提示信息',
          hintInfo: '您所访问的界面将跳转到第三方网站，请自行对网站所提供的信息、服务加以辨别及判断，并承担因使用内容而引起的所有风险。',
          onPositiveBtnClick: this.closeDialog,
          negativeBtnClick: this.closeDialog,
        });
      };
      closeDialog = () => {
        this.doaligInstance.close();
      }
    ...
}
```