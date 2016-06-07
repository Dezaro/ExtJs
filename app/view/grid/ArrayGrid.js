/* global Ext */

Ext.define('Application.view.grid.ArrayGrid', {
  id: 'arrayGridID',
  extend: 'Ext.grid.Panel',
  xtype: 'grid-filtering',
  requires: [
    'Application.store.Companies',
    'Application.controller.ArrayController'
  ],
  controller: 'ArrayController',
  title: 'Тест',
//  iconCls: 'icon-grid',
  autoScroll: true,
  animScroll: true,
  autoDestroy: true,
  width: 700,
  height: 500,
  resizable: true,
  plugins: ['cellediting'],
  selType: 'cellmodel',
  emptyText: 'Няма записи',
  loadMask: true,
  stateful: true,
  stateId: 'stateful-filter-grid',
  store: {
    type: 'Companies',
   // url: 'data/array-grid.php',
    autoLoad: true,
    autoDestroy: true
  },
  columns: [{
      dataIndex: 'id',
      text: 'ID',
      width: 50,
      editor: 'textfield'
    }, {
      dataIndex: 'name',
      text: 'Име',
      flex: 1,
      editor: {xtype: 'textfield', allowBlank: false}
    }, {
      dataIndex: 'address',
      text: 'Адрес',
      width: 90,
      editor: 'textfield'
    }, {
      dataIndex: 'contact',
      text: 'Контакт',
      width: 120,
      editor: 'textfield'
    }, {
      dataIndex: 'telephone',
      text: 'Телефон',
      width: 120,
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
//  dockedItems: [{
//      xtype: 'pagingtoolbar',
////      store: {
////        type: 'Companies',
////        //url: 'data/array-grid.php',
////        autoLoad: true,
////        autoDestroy: true
////      },
//      store: test,
//      dock: 'bottom',
//      displayInfo: true,
//      displayMsg: 'Записи от {0} до {1} от общо {2}',
//      beforePageText: 'страница',
//      afterPageText: 'от {0}',
//      emptyMsg: "Няма записи"
//    }]
});
