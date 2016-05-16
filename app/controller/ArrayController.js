/* global Ext */

Ext.define('Application.controller.ArrayController', {
  extend: 'Ext.app.Controller',
  stores: ['Companies'],
  models: ['Company'],
  views: ['grid.ArrayGrid'],
  refs: [
    {
      ref: 'grid',
      selector: '#arrayGridID'
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

