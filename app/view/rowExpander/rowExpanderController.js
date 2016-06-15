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
  initComponent: function() {
    this.width = 700;
    this.callParent();
  },
  change: function(val){
    if(val > 0){
      return '<span style="color: green;">' + val + '</span>';
    } else if(val < 0){
      return '<span style="color: red;">' + val + '</span>';
    }
    return val;
  },
  pctChange: function(val){
    if(val > 0){
      return '<span style="color: green;">' + val + '%</span>';
    } else if(val < 0){
      return '<span style="color: red;">' + val + '%</span>';
    }
    return val;
  }
});

