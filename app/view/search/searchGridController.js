/* global Ext */

Ext.define('Application.view.search.searchGridController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.searchGridController',
  refs: [
    {
      ref: 'grid',
      selector: '#searchGridID'
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
  change: function(val) {
    if(val > 0) {
      return '<span style="color:green;">' + val + '</span>';
    } else if(val < 0) {
      return '<span style="color:red;">' + val + '</span>';
    }
    return val;
  },
  pctChange: function(val) {
    if(val > 0) {
      return '<span style="color:green;">' + val + '%</span>';
    } else if(val < 0) {
      return '<span style="color:red;">' + val + '%</span>';
    }
    return val;
  },
  initComponent: function() {
    this.width = 700;
    this.callParent();
  }
});

