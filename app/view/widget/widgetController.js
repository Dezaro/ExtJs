/* global Ext */

Ext.define('Application.view.widget.widgetController',{
  extend: 'Ext.app.Controller',
  stores: ['widgetStore'],
  models: ['widgetModel'],
  views: ['widget.widgetGrid'],
  refs: [
    {
      ref: 'grid',
      selector: '#widgetGridID'
    }
  ],
  init: function(){
    this.control({
      'grid': {
        selectionchange: this.gridSelectionChange
      }
    });
  },
  gridSelectionChange: function(){
    return console.log('Row is selected is change!');
  }
});

