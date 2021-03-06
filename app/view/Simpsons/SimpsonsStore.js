/* global Ext */

Ext.define('Application.view.Simpsons.SimpsonsStore', {
  extend: 'Ext.data.Store',
  alias: 'store.SimpsonsStore',
  model: 'Application.view.Simpsons.SimpsonsModel',
//  autoLoad: true,
//  autoDestroy: true,
  proxy: {
    type: 'ajax',
    url: 'simpsons/all/',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
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

