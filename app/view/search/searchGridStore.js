/* global Ext */

Ext.define('Application.view.search.searchGridStore', {
  extend: 'Ext.data.Store',
  alias: 'store.searchGridStore',
  model: 'Application.view.search.searchGridModel',
  proxy: {
    type: 'ajax',
    url: 'data/search-data.json',
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


