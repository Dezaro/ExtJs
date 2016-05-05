/* global Ext */

Ext.define('UserApplication.store.UserStore', {
  extend: 'Ext.data.Store',
  alias: 'store.UserStore',
  model: 'UserApplication.model.UserModel',
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

