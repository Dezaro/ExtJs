/* global Ext */

Ext.define('Application.view.users.UserController', {
  extend: 'Ext.app.Controller',
  stores: ['UserStore'],
  models: ['UserModel'],
  views: ['grid.UserGrid'],
  refs: [
    {
      ref: 'grid',
      selector: '#usersGridID'
    }
  ],
  init: function() {
    this.control({
      'grid': {
        selectionchange: this.gridSelectionChange
      }
    });
  },
  gridSelectionChange: function() {
    return console.log('Row is selected is change!');
  }
});

