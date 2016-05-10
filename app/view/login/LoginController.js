/* global Ext */

Ext.define('Application.view.login.LoginController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.login',
  onLoginClick: function() {
    Ext.Ajax.request({
      url: 'data/login.php',
      method: 'POST',
      params: {
        userName: Ext.getCmp('uNameLog').getValue(),
        password: Ext.getCmp('passLog').getValue()
      },
      scope: this,
      //method to call when the request is successful
      success: this.onLoginSuccess,
      //method to call when the request is a failure
      failure: this.onLoginFailure
    });
  },
  onLoginFailure: function(err) {
    // Alert the user about communication error
    Ext.MessageBox.alert('Error occured during Login', 'Please try again!');
  },
  onLoginSuccess: function(response, opts) {
    // Received response from the server
    response = Ext.decode(response.responseText);
    if(response.success) {
      // This would be the ideal location to verify the user's credentials via
      // a server-side lookup. We'll just move forward for the sake of this example.
      // Set the localStorage value to true
      localStorage.setItem('loggedIn', true);
      // Remove Login Window
      this.getView().destroy();
      // Add the main view to the viewport
      Ext.widget('app-main');
    }
    else {
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
      Ext.getCmp('passLog').focus(true, 100);
    }
  }
});