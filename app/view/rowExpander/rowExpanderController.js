/* global Ext */

Ext.define('Application.view.rowExpander.rowExpanderController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.rowExpanderController',
//  stores: ['rowExpanderStore'],
//  models: ['rowExpanderModel'],
//  views: ['rowExpander.rowExpanderGrid'],
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
  },
//  formatChange: function(v) {
//    var color = v >= 0 ? 'green' : 'red';
//    return '<span style="color: ' + color + ';">' + Ext.util.Format.usMoney(v) + '</span>';
//  },
  initComponent: function() {
    this.width = 700;
    this.callParent();
  }
});

