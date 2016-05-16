/* global Ext */

Ext.define('Application.view.Simpsons.SimpsonsController', {
  extend: 'Ext.app.Controller',
  stores: ['SimpsonsStore'],
  models: ['SimpsonsModel'],
  views: ['Simpsons.Simpsons'],
  refs: [
    {
      ref: 'grid',
      selector: '#simpsonsGridID'
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


