/* global Ext */

var rowEditing = {
  ptype: 'rowediting',
  clicksToMoveEditor: 1,
  autoCancel: false,
  saveBtnText: 'Редактирай',
  cancelBtnText: 'Отказ',
  listeners: {
    edit: function(editor, context, record) {
      var editMsg = Ext.create('Application.view.custom.customMsgBox', {
        modal: false,
        title: 'Редактирани данни',
        msg: 'Име: ' + context.record.data.name + ' <br /> Възраст: ' + context.record.data.age + '<br /> Професия: ' +
                context.record.data.profession + '<br /> Държава: ' + context.record.data.country + '<br /> Адрес: '
                + context.record.data.address + '<br /> Ел.поща: ' + context.record.data.email + '<br /> Телефон: ' + context.record.data.telephone,
        buttons: Ext.Msg.OK
      });
      editMsg.show();
    },
    cancelEdit: function(editor, context, record) {
      if(context.record.data.newRecord === '1') {
        context.store.removeAt(0);
        Ext.toast({
          title: 'Toast',
          timeout: 2000,
          align: 't',
          closable: false,
          minWidth: 200,
          slideInDuration: 400,
          icon: 'img/icon/config1.png',
          html: 'Ola! I am toast!'
        });
      } else {
        var cancelMsg = Ext.create('Application.view.custom.customMsgBox', {
          modal: false,
          title: 'Внимание',
          msg: 'Редактирането е отказано!',
          buttons: Ext.Msg.OK
        });
        cancelMsg.show();
      }
    }
  }
};

Ext.define('Application.UserModel', {
  extend: 'Application.model.Base',
  fields: [
    'id',
    'name',
    'age',
    'profession',
    'country',
    'address',
    'email',
    'telephone',
    'action',
    'newRecord'
  ]
});

Ext.define('Application.UserStore', {
  extend: 'Ext.data.Store',
  alias: 'store.UserStore',
  model: 'Application.UserModel',
  proxy: {
    type: 'ajax',
    url: 'data/data.json',
    reader: {
      type: 'json',
      rootProperty: 'data',
      idProperty: 'id',
      totalProperty: 'total'
    }
  },
  remoteSort: false,
  sorters: [{
      property: 'name',
      direction: 'ASC'
    }],
  pageSize: 50
});

Ext.define('Application.UserController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.UserController',
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
    var grid = btn.up('grid');
    var store = grid.getStore();
    var maxId = store.getAt(0).get('id');
    store.each(function(rec) {
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

    store.insert(0, rec);
    var plugin = grid.editingPlugin;
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

Ext.define('Application.users', {
  id: 'usersGridID',
  extend: 'Ext.grid.Panel',
  xtype: 'grid-filtering',
  requires: [
    'Application.UserStore',
    'Application.UserController'
  ],
  controller: 'UserController',
  title: '<span style="color: #083772;">Списък с потребители</span>',
  iconCls: 'icon-grid',
  autoScroll: true,
  animScroll: true,
  layout: {
    type: 'fit'
  },
  resizable: true,
  plugins: [rowEditing],
  selType: 'rowmodel',
  emptyText: 'Няма записи',
  loadMask: true,
  stateful: true,
  stateId: 'stateful-filter-grid',
  store: {
    type: 'UserStore',
    autoLoad: true,
    autoDestroy: true
  },
  tbar: [
    {
      xtype: 'button',
      icon: 'img/icon/add_pic.png',
      text: 'Добави потребител',
      handler: 'onAddClick'
    }
  ],
  columns: [
    {
      dataIndex: 'id',
      text: 'ID',
      width: 30
    }, {
      dataIndex: 'name',
      text: 'Име',
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
      dataIndex: 'telephone',
      text: 'Телефон',
      width: 100,
      editor: 'textfield'
    }, {
      xtype: 'actioncolumn',
      width: 30,
      sortable: false,
      menuDisable: true,
      items: [
        {
          icon: 'img/icon/delete_icon.png',
          tooltip: 'Изтрий записа',
          handler: 'onDeleteClick'
        }
      ]
    }
  ],
  dockedItems: [{
      xtype: 'pagingtoolbar',
      store: {
        type: 'UserStore',
        autoLoad: true,
        autoDestroy: true
      },
      dock: 'bottom',
      displayInfo: true,
      displayMsg: 'Записи от {0} до {1} от общо {2}',
      beforePageText: 'страница',
      afterPageText: 'от {0}',
      emptyMsg: 'Няма записи'
    }]
});