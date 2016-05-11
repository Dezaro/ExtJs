/* global Ext */

Ext.define('ArrayTest.view.grid.ArrayGrid', {
  id: 'arrayGridID',
  extend: 'Ext.grid.Panel',
  xtype: 'grid-filtering',
  requires: [
    // 'Ext.grid.filters.Filters',
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
  plugins: ['viewport', 'cellediting'], // 'gridfilters',
  selType: 'cellmodel',
  emptyText: 'No Matching Records',
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
//  tbar: [{
//      id: 'showFilersID',
//      text: 'Show Filters...',
//      tooltip: 'Show filter data for the store',
//      handler: 'onShowFilters'
//    }, {
//      id: 'clearFilersID',
//      text: 'Clear Filters',
//      tooltip: 'Clear all filters',
//      handler: 'onClearFilters'
//    }],
  columns: [{
      dataIndex: 'id',
      text: 'ID',
      width: 50,
      editor: 'textfield'
              // Specify that this column has an associated Filter. This is
              // processed by the gridfilters plugin. If this is a string,
              // this is the type of filter to apply.
//      filter: 'number'
    }, {
      dataIndex: 'name',
      text: 'Име',
      flex: 1,
      editor: {xtype: 'textfield', allowBlank: false}
      // As an object, the type property indicates the type of filter to
      // apply. All other properties configure that filter instance.
//      filter: {
//        type: 'string',
//        itemDefaults: {
//          emptyText: 'Search for...'
//        }
//      }
    }, {
      dataIndex: 'address',
      text: 'Адрес',
      width: 90,
      editor: 'textfield'
              //     formatter: 'usMoney',
//      filter: {
//        type: 'string',
//        itemDefaults: {
//          emptyText: 'Search for...'
//        }
//      }
    }, {
      dataIndex: 'contact',
      text: 'Контакт',
      width: 120,
      editor: 'textfield'
//       filter: {
//        type: 'string',
//        itemDefaults: {
//          emptyText: 'Search for...'
//        }
//      }
              //  filter: 'list' // Use the unique field values for the pick list
    }, {
      //  xtype: 'datecolumn',
      dataIndex: 'telephone',
      text: 'Телефон',
      width: 120,
      editor: 'textfield'
//           filter: {
//        type: 'string',
//        itemDefaults: {
//          emptyText: 'Search for...'
//        }
//      }
              //  filter: true  // use dataIndex first then fallback to column type
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
//  onClearFilters: function() {
//    // The "filters" property is added to the grid (this) by gridfilters
//    this.filters.clearFilters();
//  },
//  onShowFilters: function() {
//    var data = [];
//
//    // The actual record filters are placed on the Store.
//    this.store.getFilters().each(function(filter) {
//      data.push(filter.serialize());
//    });
//
//    // Pretty it up for presentation
//    data = Ext.JSON.encodeValue(data, '\n').replace(/^[ ]+/gm, function(s) {
//      for(var r = '', i = s.length; i--; ) {
//        r += '&#160;';
//      }
//      return r;
//    });
//    data = data.replace(/\n/g, '<br>');
//
//    Ext.Msg.alert('Filter Data', data);
//  }
});

//Ext.define('ModuleTest.view.grid.testView', {
//  extend: 'Ext.panel.Panel',
//  xtype: 'grid-filtering',
//  layout: 'fit',
//  plugins: 'viewport',
//  title: 'Show Panel'
//});