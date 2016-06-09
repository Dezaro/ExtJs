/* global Ext */

Ext.define('Application.view.search.searchGrid', {
  id: 'searchGridID',
  extend: 'Ext.grid.Panel',
  requires: [
    'Application.view.search.searchGridStore',
    'Application.view.search.searchGridController',
    'Ext.toolbar.TextItem',
    'Ext.form.field.Checkbox',
    'Ext.form.field.Text'
  ],
  controller: 'searchGridController',
  xtype: 'search-grid',
  store: {
    type: 'searchGridStore',
    autoLoad: true,
    autoDestroy: true
  },
  columns: [
    {text: "Company", flex: 1, dataIndex: 'name'},
    {text: "Price", formatter: 'usMoney', dataIndex: 'price'},
    {text: "Change", dataIndex: 'change' },//,renderer: 'change'},
    {text: "% Change", dataIndex: 'pctChange'},//, renderer: 'pctChange'},
    {text: "Last Updated", width: 120, renderer: Ext.util.Format.dateRenderer('m/d/Y H:i'), dataIndex: 'lastChange'}
  ],
  columnLines: true,
  enableLocking: true,
  viewConfig: {
    stripeRows: true
  },
  height: 300,
  collapsible: true,
  animCollapse: false,
  title: 'Search Grid',
  tbar: ['Search', {
      xtype: 'textfield',
      id: 'field',
      name: 'searchField',
      hideLabel: true,
      width: 200,
      listeners: {
        change: {
          fn: 'onTextFieldChange',
          buffer: 100
        }
      }
    }]
});

