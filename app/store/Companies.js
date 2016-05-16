/* global Ext */

Ext.define('Application.store.Companies', {
  extend: 'Ext.data.Store',
  alias: 'store.Companies',
  model: 'Application.model.Company',
  proxy: {
    type: 'ajax',
    url: 'data/array-grid.json',
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
