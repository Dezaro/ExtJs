/* global Ext */

Ext.define('Application.view.item.List', {
  extend: 'Ext.tree.Panel',
  id: 'itemList',
  alias: 'widget.itemList',
  title: 'Items',
  store: 'Items',
  srets: '',
  rootVisible: false,
  displayField: 'name',
  minWidth: 150
});