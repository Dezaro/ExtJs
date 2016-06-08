/* global Ext */

Ext.define('Application.view.login.LoginController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.login',
  onLoginClick: function(btn, obj, e) {
    var me = this,
            user = me.lookupReference('userField').getValue(),
            password = me.lookupReference('passField').getValue();
    Ext.Ajax.request({
      url: 'data/login.php',
      method: 'POST',
      params: {
        userName: user,
        password: password
      },
      scope: this,
      success: this.onLoginSuccess,
      failure: this.onLoginFailure
    });
  },
  onLoginFailure: function(err) {
    Ext.MessageBox.alert('Error occured during Login', 'Please try again!');
  },
  onLoginSuccess: function(response, opts) {
    response = Ext.decode(response.responseText);
    if(response.success) {
      localStorage.setItem('logArray', JSON.stringify({
        loggedIn: true,
        userName: 'Дело Георгиев Брънчев',
        userGroup: 'Администратори на фирма',
        office: 'Управление',
      }));
      this.getView().destroy();
      Ext.widget('app-main');
    } else {
      Ext.MessageBox.alert('Грешка', 'Невалидно потребителско име или парола!');
    }
  },
  onEnter: function(f, e) {
    if(e.getKey() === e.ENTER) {
      Ext.getCmp('btnLogin').fireEvent('click');
    }
  },
  changeFocus: function(f, e) {
    if(e.getKey() === e.ENTER) {
      this.lookupReference('passField').focus(true, 100);
    }
  }
});