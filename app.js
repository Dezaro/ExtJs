/* global Ext */

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