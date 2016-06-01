/* global Ext */

Ext.define('Application.store.Companies', {
  extend: 'Ext.data.Store',
  alias: 'store.Companies',
  model: 'Application.model.Company',
  proxy: {
    type: 'ajax',
    url: 'data/array-grid.php',
    reader: {
      type: 'json',
      rootProperty: 'data',
      idProperty: 'id',
      totalProperty: 'total'
    }
  },
  autoLoad: true,
  remoteSort: false
});
