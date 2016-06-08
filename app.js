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
    this.logArray = JSON.parse(localStorage.getItem('logArray'));
    if(this.logArray !== null && this.logArray.loggedIn) {
      Ext.widget('app-main');
    } else {
      Ext.widget('login');
      Ext.getCmp('uNameLog').focus(true, 100);
    }
  }
});

Ext.application('MyApplication');