/* global Ext */
var rowEditing = {
  ptype: 'rowediting',
  clicksToMoveEditor: 1,
  autoCancel: false,
  saveBtnText: 'Редактирай',
  cancelBtnText: 'Отказ', // по default бутоните са update и cancel
  listeners: {
    edit: function(editor, context, record) {
//      Ext.Msg.alert('Редактирани данни', 'Име: ' + context.record.data.name + ' <br /> Възраст: ' + context.record.data.age + '<br /> Професия: ' +
//              context.record.data.profession + '<br /> Държава: ' + context.record.data.country + '<br /> Адрес: '
//              + context.record.data.address + '<br /> Ел.поща: ' + context.record.data.email + '<br /> Телефон: ' + context.record.data.telephone);
      // console.log(context.record.data.name); //Contains the variables that should have been in the e var
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
          title: 'Тостер',
          timeout: 2000,
          align: 't',
          closable: false,
//          renderTo: Ext.getCmp('tabs12').getActiveTab().id,
//          constrain: true,
//          constrainHeader: true,
          minWidth: 200,
//          animateTarget: 'tosID',
          slideInDuration: 400,
          icon: 'img/icon/toast.png',
          html: 'Опа! Ти си бот! :)'
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

Ext.define('Application.view.users.UserGrid', {
  id: 'usersGridID',
  extend: 'Ext.grid.Panel',
  xtype: 'grid-filtering',
  requires: [
    'Application.view.users.UserStore',
    'Application.view.users.UserController'
  ],
  controller: 'UserController',
  title: '<span style="color: #083772;">Списък с потребители</span>',
//  iconCls: 'icon-grid',
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
    id: 'UserStoreID',
    type: 'UserStore',
    autoLoad: true,
    autoDestroy: true
  },
  tbar: [
    {
      id: 'tosID',
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
      store: 'UserStoreID',
      dock: 'bottom',
      displayInfo: true,
      displayMsg: 'Записи от {0} до {1} от общо {2}',
      beforePageText: 'страница',
      afterPageText: 'от {0}',
      emptyMsg: "Няма записи"
    }]
});


