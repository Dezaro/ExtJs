/* global Ext */

Ext.define('Application.store.Tests', {
  extend: 'Ext.data.Store',
  alias: 'store.Tests',
  model: 'Application.model.Test',
  proxy: {
    type: 'ajax',
    url: 'data/grid-filter.json',
    reader: {
      type: 'json',
      rootProperty: 'data',
      idProperty: 'id',
      totalProperty: 'total'
    }
  },
  remoteSort: false,
  sorters: [{
      property: 'company',
      direction: 'ASC'
    }],
  pageSize: 50
});