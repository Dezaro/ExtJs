/* global Ext */

Ext.define('Application.view.Simpsons.SimpsonsController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.simpsons-controller',
  refs: [
    {
      ref: 'grid',
      selector: '#simpsonsGridID'
    }
  ],
  init: function() {
    this.control({
      grid: {
        selectionchange: this.gridSelectionChange
      }
    });
  },
  gridSelectionChange: function() {
    return console.log('Row is selected is change!');
  },
  onDeleteClick: function(grid, rowIndex) {
    console.log('dasSAD');
    var msgBox = Ext.create('Application.view.custom.customMsgBox', {
      modal: false,
      title: 'Изтриване',
      msg: 'Сигурни ли сте, че искате да изтриете записа?',
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
  },
  onFilterClick: function(btn) {
    var g = btn.up('grid');
    g.store.filter([{property: "name", anyMatch: true, value: 'Lisa'}, {property: "email", anyMatch: true, value: 'lisa@simpsons.com'}]);
  },
  onAdd: function(){
    console.log('Add is clicked!');
  }
});


