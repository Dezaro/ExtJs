/* global Ext */

Ext.define('Application.view.rowExpander.rowExpanderStore', {
  extend: 'Ext.data.Store',
  alias: 'store.rowExpanderStore',
  model: 'Application.view.rowExpander.rowExpanderModel',
//  autoLoad: true,
//  autoDestroy: true,
  proxy: {
    type: 'ajax',
    url: 'data/rowExpander-data.json',
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