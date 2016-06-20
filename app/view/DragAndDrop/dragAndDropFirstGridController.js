/* global Ext */

Ext.define('Application.view.DragAndDrop.dragAndDropFirstGridController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.dragAndDropFirstGridController',
  refs: [
    {
      ref: 'grid',
      selector: '#firstGridID'
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


