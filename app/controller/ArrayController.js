/* global Ext */

Ext.define('Application.controller.ArrayController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.ArrayController',
//  stores: ['Companies'],
//  models: ['Company'],
//  views: ['grid.ArrayGrid'],
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
  },
  onDeleteClick: function(grid, rowIndex) {
    var msgBox = Ext.create('Application.view.custom.customMsgBox', {
      modal: false,
      title: 'Изтриване',
      msg: 'Сигурни ли сте, че искате да изтриете запис ' + grid.getStore().data.items[rowIndex].data.id + '.' + grid.getStore().data.items[rowIndex].data.name + '?',
      buttonText: {
        yes: '<span style="color: #083772"><b>Да</b></span>',
        no: '<span style="color: #083772"><b>Не</b></span>'
      },
      fn: function(btn, text, ob) {
        if(btn === 'yes') {
          grid.getStore().removeAt(rowIndex);
        }
      },
      icon: Ext.MessageBox.QUESTION
    });
    msgBox.show();
  }
});

