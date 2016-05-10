/* global Ext */
var rowEditing = Ext.create('Ext.grid.plugin.RowEditing', {
  clicksToMoveEditor: 1,
  autoCancel: false
});

Ext.define('UserApplication.view.grid.UserGrid', {
  id: 'usersGridID',
  extend: 'Ext.grid.Panel',
  xtype: 'grid-filtering',
  requires: [
    'UserApplication.store.UserStore'
  ],
  title: '<span style="color: #083772;">User List</span>',
  iconCls: 'icon-grid',
  frame: true,
  autoScroll: true,
  animScroll: true,
  width: 700,
  height: 500,
  resizable: true,
  plugins: ['viewport', rowEditing], //'cellediting'],
  // selType: 'cellmodel',
  selType: 'rowmodel',
//  plugins: ['viewport', {
//      ptype: 'rowediting',
//      clicksToEdit: 2
//    }],
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
  tbar: [
    {
      xtype: 'button',
      icon: "img/add_pic.png",
      text: 'Add Record',
      handler: function(btn) {
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
        rowEditing.startEdit(0, 0);
        // g.getSelectionModel().setCurrentPosition({row: 0, column: 1});
      }
    }
  ],
  columns: [{
      dataIndex: 'id',
      text: 'Id',
      width: 30
    }, {
      dataIndex: 'name',
      text: 'Name',
    //  width: 150,
      flex: 1,
      editor: {xtype: 'textfield', allowBlank: false}
    }, {
      dataIndex: 'age',
      text: 'Age',
      width: 60,
      editor: 'textfield'
    }, {
      dataIndex: 'profession',
      text: 'Profession',
      width: 150,
      editor: 'textfield'
    }, {
      dataIndex: 'country',
      text: 'Country',
      width: 130,
      editor: 'textfield'
    }, {
      dataIndex: 'address',
      text: 'Address',
      width: 290,
      editor: 'textfield'
    }, {
      dataIndex: 'email',
      text: 'Email',
      width: 180,
      editor: 'textfield'
    }, {
      dataIndex: 'telephone',
      text: 'Telephone',
      width: 100,
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
      displayInfo: true
    }]
});