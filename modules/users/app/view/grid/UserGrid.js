/* global Ext */

Ext.define('UserApplication.view.grid.UserGrid', {
  id: 'usersGridID',
  extend: 'Ext.grid.Panel',
  xtype: 'grid-filtering',
  requires: [
    'UserApplication.store.UserStore'
  ],
  title: '<span style="color: #525252;">User List</span>',
  iconCls: 'icon-grid',
  frame: true,
  autoScroll: true,
  animScroll: true,
  width: 700,
  height: 500,
  resizable: true,
  plugins: ['viewport', 'cellediting'],
  selType: 'cellmodel',
  emptyText: 'No Matching Records',
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
  columns: [{
      dataIndex: 'id',
      text: 'Id',
      width: 50,
      editor: 'textfield'
    }, {
      dataIndex: 'name',
      text: 'Name',
      flex: 1,
      editor: {xtype: 'textfield', allowBlank: false}
    }, {
      dataIndex: 'address',
      text: 'Address',
      width: 90,
      editor: 'textfield'
    }, {
      dataIndex: 'contact',
      text: 'Contact',
      width: 120,
      editor: 'textfield'
    }, {
      dataIndex: 'telephone',
      text: 'Telephone',
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
          tooltip: 'Delete Record',
          handler: function(grid, rowIndex) {
            grid.getStore().removeAt(rowIndex);
          }
        }]
    }]
});