/* global Ext */

Ext.define('Application.store.TreeStore', {
  extend: 'Ext.data.TreeStore',
  model: 'Application.model.TreeModel',
  autoLoad: true,
  // Attach store classes to this controller
  stores: ['TreeStore'],
  // Attach model classes to this controller
  models: ['TreeModel'],
  // Define the root of the json file
  root: {
    // Root should be expanded on
    // the application start
    expanded: true
  },
  proxy: {
    // Defined this proxy type
    type: 'ajax',
    // Data source
    url: 'data/items.php',
    // Reader should be configured for 
    // json parsing
    reader: {
      type: 'json'
    }
  }

});