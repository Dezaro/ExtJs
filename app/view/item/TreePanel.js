/* global Ext */

Ext.define('Application.view.item.TreePanel', {
  extend: 'Ext.tree.Panel',
  id: 'itemList',
  alias: 'widget.itemList',
  title: 'Items',
  store: 'TreeStore',
  srets: '',
  frame: true,
  border: false,
  rootVisible: false,
  displayField: 'name',
  minWidth: 150
});