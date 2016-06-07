/* global Ext */

Ext.define('Application.view.grid.testView', {
  id: 'testGridID',
  extend: 'Ext.grid.Panel',
 // xtype: 'grid-filtering',
  requires: [
    'Ext.grid.filters.Filters',
    'Application.store.Tests'
  ],
  title: 'Продукти',
//  iconCls: 'icon-grid',
  autoScroll: true,
  animScroll: true,
//  width: 700,
//  height: 500,
  resizable: false,
  plugins: ['gridfilters'],
  emptyText: 'No Matching Records',
  loadMask: true,
  stateful: true,
//  layout: {
//    type: 'fit'
//  },
  region: 'center',
  layout: 'fit',
  // Set a stateId so that this grid's state is persisted.
  stateId: 'stateful-filter-grid',
  store: {
    type: 'Tests',
   // url: 'data/grid-filter.json',
    autoLoad: true,
    autoDestroy: true
  },
  // Dispatch named listener and handler methods to this instance
  defaultListenerScope: true,
  tbar: [{
      id: 'showFilersID',
      text: 'Покажи филтри...',
      tooltip: 'Покажи използваните филтри',
      handler: 'onShowFilters'
    }, {
      id: 'clearFilersID',
      text: 'Изчисти филтрите',
      tooltip: 'Изчисти всички филтри',
      handler: 'onClearFilters'
    }],
  columns: [{
      dataIndex: 'id',
      text: 'ID',
      width: 50,
      // Specify that this column has an associated Filter. This is
      // processed by the gridfilters plugin. If this is a string,
      // this is the type of filter to apply.
      filter: 'number'
    }, {
      dataIndex: 'company',
      text: 'Компания',
      flex: 1,
      // As an object, the type property indicates the type of filter to
      // apply. All other properties configure that filter instance.
      filter: {
        type: 'string',
        itemDefaults: {
          emptyText: 'Търси за...'
        }
      }
    }, {
      dataIndex: 'price',
      text: 'Цена',
      width: 90,
      formatter: 'usMoney',
      filter: 'number'
    }, {
      dataIndex: 'size',
      text: 'Размер',
      width: 120,
      filter: 'list' // Use the unique field values for the pick list
    }, {
      xtype: 'datecolumn',
      dataIndex: 'date',
      text: 'Дата',
      width: 120,
      filter: true  // use dataIndex first then fallback to column type
    }, {
      dataIndex: 'visible',
      text: 'Видимост',
      width: 80,
      filter: 'boolean'
    }],
  onClearFilters: function() {
    // The "filters" property is added to the grid (this) by gridfilters
    this.filters.clearFilters();
  },
  onShowFilters: function() {
    var data = [];

    // The actual record filters are placed on the Store.
    this.store.getFilters().each(function(filter) {
      data.push(filter.serialize());
    });

    // Pretty it up for presentation 
    data = Ext.JSON.encodeValue(data, '\n').replace(/^[ ]+/gm, function(s) {
      for(var r = '', i = s.length; i--; ) {
        r += '&#160;';
      }
      return r;
    });
    data = data.replace(/\n/g, '<br>');

    Ext.Msg.alert('Филтър данни', data);
  }
});

//Ext.define('ModuleTest.view.grid.testView', {
//  extend: 'Ext.panel.Panel',
//  xtype: 'grid-filtering',
//  layout: 'fit',
//  plugins: 'viewport',
//  title: 'Show Panel'
//});
