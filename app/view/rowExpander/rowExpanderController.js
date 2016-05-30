/* global Ext */

Ext.define('Application.view.rowExpander.rowExpanderController', {
  extend: 'Ext.app.Controller',
  stores: ['rowExpanderStore'],
  models: ['rowExpanderModel'],
  views: ['rowExpander.rowExpanderGrid'],
  refs: [
    {
      ref: 'grid',
      selector: '#rowExpanderID'
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

