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
    Ext.getCmp('uNameLog').focus(true, 100);
  },
  onInfoClick: function(){
    Ext.getCmp('winID').show();
  }
});