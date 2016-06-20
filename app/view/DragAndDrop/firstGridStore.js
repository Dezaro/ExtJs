/* global Ext */

Ext.define('Application.view.DragAndDrop.firstGridStore', {
  extend: 'Ext.data.Store',
  alias: 'store.firstGridStore',
  model: 'Application.view.DragAndDrop.dragAndDropModel',
  autoLoad: true,
  autoDestroy: true,
  proxy: {
    type: 'ajax',
    url: 'data/dragAndDropData.json',
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
  pageSize: 25
});


