/* global Ext */

Ext.define('Application.view.main.MainController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.main',
  onClickButton: function() {
    // Remove the localStorage key/value
    localStorage.removeItem('loggedIn');
    // Remove Main View
    this.getView().destroy();
    // Add the Login Window
    Ext.widget('login');
//    this.lookupReference('userField').focus(true, 100);
    Ext.getCmp('uNameLog').focus(true, 100);
  },
  onInfoClick: function() {
    this.lookupReference('infoWin').show();
    // win.show();
  },
  onChangePassClick: function() {
    this.lookupReference('changePass').show();
    //  changePassWindow.show();
  },
  onConfirmClick: function() {
    this.lookupReference('changePass').hide();
    //  changePassWindow.show();
  },
  onCancelClick: function() {
    this.lookupReference('changePass').hide();
    //  changePassWindow.show();
  }
});