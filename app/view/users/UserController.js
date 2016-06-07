/* global Ext */

Ext.define('Application.view.users.UserController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.UserController',
//  stores: ['UserStore'],
//  models: ['UserModel'],
//  views: ['grid.UserGrid'],
  refs: [
    {
      ref: 'grid',
      selector: '#usersGridID'
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
  onAddClick: function(btn) {
    // Create a model instance
    var g = btn.up('grid');
    var myStore = g.getStore();
    var maxId = myStore.getAt(0).get('id'); // initialise to the first record's id value.
    myStore.each(function(rec) // go through all the records
    {
      maxId = Math.max(maxId, rec.get('id'));
    });
    var rec = {
      id: maxId + 1,
      name: '',
      age: '0',
      profession: 'example profession',
      country: 'example country',
      address: 'example address',
      email: 'example@email.com',
      telephone: '0',
      newRecord: '1'
    };

    g.getStore().insert(0, rec);
    var plugin = g.editingPlugin;
    plugin.startEdit(0, 0);
  },
  onDeleteClick: function(grid, rowIndex) {
    var msgBox = Ext.create('Application.view.custom.customMsgBox', {
      modal: false,
      title: 'Изтриване',
      msg: 'Сигурни ли сте, че искате да изтриете ' + grid.getStore().data.items[rowIndex].data.name + ' от списъка с потребители?',
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

