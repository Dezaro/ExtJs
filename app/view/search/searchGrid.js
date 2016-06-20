/* global Ext */

Ext.define('Application.view.search.searchGrid', {
  extend: 'Ext.ux.LiveSearchGridPanel',
  id: 'searchGridID',
  requires: [
    'Ext.tip.QuickTipManager',
    'Application.view.search.searchGridStore',
    'Application.view.search.searchGridController'],
  controller: 'searchGridController',
  store: {
    type: 'searchGridStore',
    autoLoad: true,
    autoDestroy: true
  },
  columnLines: true,
    columns: [
    {text: "Company", flex: 1, dataIndex: 'name'},
    {text: "Price", formatter: 'usMoney', dataIndex: 'price'},
    {text: "Change", dataIndex: 'change', renderer: 'change'},
    {text: "% Change", dataIndex: 'pctChange', renderer: 'pctChange'},
    {text: "Last Updated", width: 120, renderer: Ext.util.Format.dateRenderer('m/d/Y H:i'), dataIndex: 'lastChange'}
  ],
  title: 'Live Search Grid',
  viewConfig: {
    stripeRows: true
  }
});

