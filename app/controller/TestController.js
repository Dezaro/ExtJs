/* global Ext */

Ext.define('Application.controller.TestController', {
  extend: 'Ext.app.Controller',
  stores: ['Tests'],
  models: ['Test'],
  views: ['grid.testView'],
  refs: [
    {
      ref: 'grid',
      selector: '#testGridID'
    }
  ],
  init: function() {
    this.control({
      'grid': {
        selectionchange: this.gridSelectionChange
      }
    });
  },
  gridSelectionChange: function() {
    return console.log('Row is selected is change!');
  }
});