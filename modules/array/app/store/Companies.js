/* global Ext */

Ext.define('ArrayTest.store.Companies', {
  extend: 'Ext.data.Store',
  alias: 'store.Companies',
  model: 'ArrayTest.model.Company',
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
      property: 'name',
      direction: 'ASC'
    }],
  pageSize: 50
});