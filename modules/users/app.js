/* global Ext*/

Ext.define('MyUserApplication', {
  extend: 'Ext.app.Application',
  name: 'UserApplication',
  stores: [
  //  'UserApplication.store.UserStore'
  ],
  controllers: [
    'UserApplication.controller.UserController'
  ],
  views: [
  //  'UserApplication.view.grid.UserGrid'
  ],
  launch: function() {
    Ext.widget('grid-filtering');
  }
});

Ext.application('MyUserApplication');