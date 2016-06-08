/* global Ext */

Ext.define('Application.model.TreeModel', {
  extend: 'Ext.data.Model',
  fields: [
    'item_id',
    'name',
    'description'
  ]
});