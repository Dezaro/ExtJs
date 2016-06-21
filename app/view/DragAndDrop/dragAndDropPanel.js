/* global Ext */

Ext.define('DragAndDropModel', {
  extend: 'Application.model.Base',
  fields: ['name', 'column1', 'column2']
});

var myData = [
  {name: "Record 0", column1: "0", column2: "0"},
  {name: "Record 1", column1: "1", column2: "1"},
  {name: "Record 2", column1: "2", column2: "2"},
  {name: "Record 3", column1: "3", column2: "3"},
  {name: "Record 4", column1: "4", column2: "4"},
  {name: "Record 5", column1: "5", column2: "5"},
  {name: "Record 6", column1: "6", column2: "6"},
  {name: "Record 7", column1: "7", column2: "7"},
  {name: "Record 8", column1: "8", column2: "8"},
  {name: "Record 9", column1: "9", column2: "9"}
];

var firstGridStore = Ext.create('Ext.data.Store', {
  model: 'DragAndDropModel',
  data: myData
});

var columns = [
  {text: "Record Name", flex: 1, sortable: true, dataIndex: 'name'},
  {text: "column1", width: 70, sortable: true, dataIndex: 'column1'},
  {text: "column2", width: 70, sortable: true, dataIndex: 'column2'}
];

var firstGrid = {
  xtype: 'grid',
  multiSelect: true,
  viewConfig: {
    plugins: {
      ptype: 'gridviewdragdrop',
      dragGroup: 'firstGridDDGroup',
      dropGroup: 'secondGridDDGroup'
    },
    listeners: {
      drop: function(node, data, dropRec, dropPosition) {
        var dropOn = dropRec ? ' ' + dropPosition + ' ' + dropRec.get('name') : ' on empty view';
        Ext.toast({
          title: 'Drag from right to left',
          timeout: 2000,
          align: 't',
          closable: false,
          minWidth: 200,
          slideInDuration: 400,
          icon: 'img/icon/info.png',
          html: 'Dropped ' + data.records[0].get('name') + dropOn
        });
      }
    }
  },
  store: firstGridStore,
  columns: columns,
  stripeRows: true,
  title: 'First Grid',
  padding: '0 2 0 0'
};

var secondGridStore = Ext.create('Ext.data.Store', {
  model: 'DragAndDropModel'
});

var secondGrid = {
  xtype: 'grid',
  multiSelect: true,
  viewConfig: {
    plugins: {
      ptype: 'gridviewdragdrop',
      dragGroup: 'secondGridDDGroup',
      dropGroup: 'firstGridDDGroup'
    },
    listeners: {
      drop: function(node, data, dropRec, dropPosition) {
        var dropOn = dropRec ? ' ' + dropPosition + ' ' + dropRec.get('name') : ' on empty view';
        Ext.toast({
          title: 'Drag from left to right',
          timeout: 2000,
          align: 't',
          closable: false,
          minWidth: 200,
          slideInDuration: 400,
          icon: 'img/icon/info.png',
          html: 'Dropped ' + data.records[0].get('name') + dropOn
        });
      }
    }
  },
  store: secondGridStore,
  columns: columns,
  stripeRows: true,
  title: 'Second Grid',
  padding: '0 0 0 3'
};

Ext.define('Application.view.DragAndDrop.dragAndDropPanel', {
  extend: 'Ext.Panel',
  width: 650,
  height: 300,
  layout: {
    type: 'hbox',
    align: 'stretch',
    padding: 1
  },
  defaults: {flex: 1}, //auto stretch
  items: [
    firstGrid,
    secondGrid
  ],
  dockedItems: {
    xtype: 'toolbar',
    dock: 'bottom',
    items: ['->', // Fill
      {
        text: 'Reset both grids',
        id: 'resetBtn',
//        handler: function() {
//          //refresh source grid
//          firstGridStore.loadData(myData);
//
//          //purge destination grid
//          secondGridStore.removeAll();
//        }
        listeners: {
          click: function() {
          firstGridStore.loadData(myData);
          secondGridStore.removeAll();
        }
      }
    }]
  }
});

