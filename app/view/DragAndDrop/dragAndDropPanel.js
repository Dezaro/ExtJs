/* global Ext */

Ext.define('DataObject', {
  extend: 'Ext.data.Model',
  fields: ['name', 'column1', 'column2']
});

var myData = [
  {name: "Rec 0", column1: "0", column2: "0"},
  {name: "Rec 1", column1: "1", column2: "1"},
  {name: "Rec 2", column1: "2", column2: "2"},
  {name: "Rec 3", column1: "3", column2: "3"},
  {name: "Rec 4", column1: "4", column2: "4"},
  {name: "Rec 5", column1: "5", column2: "5"},
  {name: "Rec 6", column1: "6", column2: "6"},
  {name: "Rec 7", column1: "7", column2: "7"},
  {name: "Rec 8", column1: "8", column2: "8"},
  {name: "Rec 9", column1: "9", column2: "9"}
];

var firstGridStore = Ext.create('Ext.data.Store', {
  model: 'DataObject',
  data: myData
});

var columns = [
  {text: "Record Name", flex: 1, sortable: true, dataIndex: 'name'},
  {text: "column1", width: 70, sortable: true, dataIndex: 'column1'},
  {text: "column2", width: 70, sortable: true, dataIndex: 'column2'}
];

var firstGrid = Ext.create('Ext.grid.Panel', {
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
          icon: 'img/icon/toast.png',
          html: 'Dropped ' + data.records[0].get('name') + dropOn
        });
      //  Ext.example.msg("Drag from right to left", 'Dropped ' + data.records[0].get('name') + dropOn);
      }
    }
  },
  store: firstGridStore,
  columns: columns,
  stripeRows: true,
  title: 'First Grid',
  margins: '0 2 0 0'
});

var secondGridStore = Ext.create('Ext.data.Store', {
  model: 'DataObject'
});

var secondGrid = Ext.create('Ext.grid.Panel', {
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
          icon: 'img/icon/toast.png',
          html: 'Dropped ' + data.records[0].get('name') + dropOn
        });
     //   Ext.example.msg("Drag from left to right", 'Dropped ' + data.records[0].get('name') + dropOn);
      }
    }
  },
  store: secondGridStore,
  columns: columns,
  stripeRows: true,
  title: 'Second Grid',
  margins: '0 0 0 3'
});

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
        handler: function() {
          //refresh source grid
          firstGridStore.loadData(myData);

          //purge destination grid
          secondGridStore.removeAll();
        }
      }]
  }
});

