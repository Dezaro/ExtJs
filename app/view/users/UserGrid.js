/* global Ext */
var rowEditing = {
  ptype: 'rowediting',
  clicksToMoveEditor: 1,
  autoCancel: false,
  saveBtnText: 'Редактирай',
  cancelBtnText: 'Отказ', // по default бутоните са update и cancel
  listeners: {
    edit: function(editor, context, record) {
      Ext.Msg.alert('Редактирани данни', 'Име: ' + context.record.data.name + ' <br /> Възраст: ' + context.record.data.age + '<br /> Професия: ' +
              context.record.data.profession + '<br /> Държава: ' + context.record.data.country + '<br /> Адрес: '
              + context.record.data.address + '<br /> Ел.поща: ' + context.record.data.email + '<br /> Телефон: ' + context.record.data.telephone);
      // console.log(context.record.data.name); //Contains the variables that should have been in the e var
    },
    cancelEdit: function() {
      Ext.Msg.alert('Внимание', 'Редактирането е отказано!');
    }
  }
};

Ext.define('Application.view.users.UserGrid', {
  id: 'usersGridID',
  extend: 'Ext.grid.Panel',
  xtype: 'grid-filtering',
  requires: [
    'Application.view.users.UserStore'
  ],
  title: '<span style="color: #083772;">Списък с потребители</span>',
  iconCls: 'icon-grid',
  frame: true,
  autoScroll: true,
  animScroll: true,
  layout: {
    type: 'fit'
  },
//  width: 700,
//  height: 500,
  resizable: true,
  plugins: [rowEditing], //'cellediting'],
  // selType: 'cellmodel',
  selType: 'rowmodel',
//  plugins: ['viewport', {
//      ptype: 'rowediting',
//      clicksToEdit: 2
//    }],
  emptyText: 'Няма записи',
  loadMask: true,
  stateful: true,
  stateId: 'stateful-filter-grid',
  store: {
    type: 'UserStore',
    url: 'data/data.json',
    autoLoad: true,
    autoDestroy: true
  },
  defaultListenerScope: true,
  tbar: [
    {
      xtype: 'button',
      icon: "img/icon/add_pic.png",
      text: 'Добави потребител',
      handler: 'onAddClick'
    }
  ],
  columns: [{
      dataIndex: 'id',
      text: 'ID',
      width: 30
    }, {
      dataIndex: 'name',
      text: 'Име',
      //  width: 150,
      flex: 1,
      editor: {xtype: 'textfield', allowBlank: false}
    }, {
      dataIndex: 'age',
      text: 'Възраст',
      width: 60,
      editor: 'textfield'
    }, {
      dataIndex: 'profession',
      text: 'Професия',
      width: 150,
      editor: 'textfield'
    }, {
      dataIndex: 'country',
      text: 'Държава',
      width: 130,
      editor: 'textfield'
    }, {
      dataIndex: 'address',
      text: 'Адрес',
      width: 290,
      editor: 'textfield'
    }, {
      dataIndex: 'email',
      text: 'Ел.поща',
      width: 180,
      editor: 'textfield'
    }, {
      dataIndex: 'telephone',
      text: 'Телефон',
      width: 100,
      editor: 'textfield'
    },
    {
      xtype: 'actioncolumn',
      width: 30,
      sortable: false,
      menuDisabled: true,
      items: [{
          icon: "img/icon/delete_icon.png",
          tooltip: 'Изтрий записа',
          handler: 'onDeleteClick'
        }]
    }],
  dockedItems: [{
      xtype: 'pagingtoolbar',
      store: {
        type: 'UserStore',
        url: 'data/data.json',
        autoLoad: true,
        autoDestroy: true
      },
      dock: 'bottom',
      displayInfo: true,
      displayMsg: 'Записи от {0} до {1} от общо {2}',
      beforePageText: 'страница',
      afterPageText: 'от {0}',
      emptyMsg: "Няма записи"
    }],
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
      telephone: '0'
    };

    g.getStore().insert(0, rec);
    var plugin = g.editingPlugin;
    plugin.startEdit(0, 0);
  },
  onDeleteClick: function(grid, rowIndex) {
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
  }
});

