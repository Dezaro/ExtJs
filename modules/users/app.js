/* global Ext*/

Ext.define('MyUserApplication', {
  extend: 'Ext.app.Application',
  name: 'UserApplication',
  stores: [
  //  'TestApplication.store.UserStore'
  ],
  controllers: [
    'UserApplication.controller.UserController'
  ],
  views: [
  //  'TestApplication.view.grid.UserGrid'
  ],
  launch: function() {
    Ext.widget('grid-filtering');
  }
});

Ext.application('MyUserApplication');