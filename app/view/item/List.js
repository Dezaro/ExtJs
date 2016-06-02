/* global Ext */

Ext.define('Application.view.item.List', {
  extend: 'Ext.tree.Panel',
  id: 'itemList',
  alias: 'widget.itemList',
  title: 'Items',
  store: 'Items',
  srets: '',
  frame: true,
  border: false,
  rootVisible: false,
  displayField: 'name',
  minWidth: 150
});