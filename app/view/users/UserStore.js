/* global Ext */

Ext.define('Application.view.users.UserStore', {
  extend: 'Ext.data.Store',
  alias: 'store.UserStore',
  model: 'Application.view.users.UserModel',
  proxy: {
    type: 'ajax',
    url: 'data/data.json',
    reader: {
      type: 'json',
      rootProperty: 'data',
      idProperty: 'id',
      totalProperty: 'total'
    }
  },
  remoteSort: false,
  sorters: [{
      property: 'name',
      direction: 'ASC'
    }],
  pageSize: 50
});


