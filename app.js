/* global Ext */
//Ext.define('hds.override.MessageBox', {
//  override: 'Ext.window.MessageBox',
//  initComponent: function() {
//    this.modal = false;
//    this.renderTo = 'tab0';
//    console.log("init component 1"); //reached      
//    this.callParent(arguments);  // here you might have your own init and maybe callSuper instead      
//    console.log("init component 2"); // reached 
//  }});
Ext.define('MyApplication', {
  extend: 'Ext.app.Application',
  name: 'Application',
  stores: [
    'Items'
  ],
  controllers: [
    'Application.controller.ItemController'
  ],
  views: [
    'Application.view.login.Login',
    'Application.view.main.Main'
  ],
  launch: function() {

//    Ext.create('Ext.window.MessageBox').show({
//      modal: false,
//      title: 'Save Changes?',
//      multiline: true,
//      value: 'This is a very very very very very very very very very very very very very very very very very very long test',
//      msg: 'You are closing a tab that has unsaved changes.<br>Would you like to save your changes?',
//      buttons: Ext.Msg.YESNOCANCEL,
//      icon: Ext.Msg.ERROR
//    });
    // It's important to note that this type of application could use
    // any type of storage, i.e., Cookies, LocalStorage, etc.
    var loggedIn;
    // Check to see the current value of the localStorage key
    loggedIn = localStorage.getItem('loggedIn');
    // This ternary operator determines the value of the loggedIn key.
    // If loggedIn isn't true, we display the login window,
    // otherwise, we display the main view
    // Ext.widget(loggedIn ? 'app-main' : 'login');
    if(loggedIn) {
      Ext.widget('app-main');
    } else {
      Ext.widget('login');
      Ext.getCmp('uNameLog').focus(true, 100);
    }
  }
});

Ext.application('MyApplication');