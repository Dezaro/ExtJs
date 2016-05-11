/* global Ext */

Ext.define('ArrayTest.view.grid.ArrayGrid', {
  id: 'arrayGridID',
  extend: 'Ext.grid.Panel',
  xtype: 'grid-filtering',
  requires: [
    'ArrayTest.store.Companies'
  ],
  title: '<span style="color: #525252;">Тест</span>',
  iconCls: 'icon-grid',
  frame: true,
  autoScroll: true,
  animScroll: true,
  width: 700,
  height: 500,
  resizable: true,
  plugins: ['viewport', 'cellediting'],
  selType: 'cellmodel',
  emptyText: 'Няма записи',
  loadMask: true,
  stateful: true,
  // Set a stateId so that this grid's state is persisted.
  stateId: 'stateful-filter-grid',
  store: {
    type: 'Companies',
    url: 'data/grid-filter.json',
    autoLoad: true,
    autoDestroy: true
  },
  // Dispatch named listener and handler methods to this instance
  defaultListenerScope: true,
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
          icon: "img/delete_icon.png",
          tooltip: 'Изтрий записа',
          handler: 'onDeleteClick'
        }]
    }],
    onDeleteClick: function(grid, rowIndex) {
    var msgBox = Ext.MessageBox;
    msgBox.buttonText = {
      yes: '<span style="color: #083772"><b>Да</b></span>',
      no: '<span style="color: #083772"><b>Не</b></span>'
    };
    msgBox.confirm('Изтриване', 'Сигурни ли сте, че искате да изтриете записа?', function(confirmation) {
      if(confirmation === 'yes') {
        grid.getStore().removeAt(rowIndex);
      }
    });
  }
});
