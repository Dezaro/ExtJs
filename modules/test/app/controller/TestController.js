/* global Ext */

Ext.define('ModuleTest.controller.TestController', {
  extend: 'Ext.app.Controller',
  stores: ['Tests'],
  models: ['Test'],
  views: ['grid.testView'],
  init: function() {
    this.control({
      '#testGridID': {
        selectionchange: this.gridSelectionChange
      }
    });
  },
  gridSelectionChange: function() {
    return console.log('Row is selected is change!');
  }
});