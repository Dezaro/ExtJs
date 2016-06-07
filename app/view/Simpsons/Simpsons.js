/* global Ext */

Ext.define('Application.view.Simpsons.Simpsons', {
  id: 'simpsonsGridID',
  extend: 'Ext.grid.Panel',
  xtype: 'grid-filtering',
  requires: [
    'Application.view.Simpsons.SimpsonsStore',
    'Application.view.Simpsons.SimpsonsController'
  ],
  controller: 'simpsons-controller',
  title: 'Simpsons',
//  iconCls: 'icon-grid',
  autoScroll: true,
  animScroll: true,
  plugins: ['cellediting'],
  selType: 'cellmodel',
  emptyText: 'Няма записи',
  loadMask: true,
  stateful: true,
  stateId: 'stateful-filter-grid',
  store: {
    type: 'SimpsonsStore',
    autoLoad: true,
    autoDestroy: true
  },
  tbar: [{
      xtype: 'button',
      text: '<span style="color: #083772"><b>Филтър</b></span>',
      icon: 'img/icon/FilterGrid.png',
      handler: 'onFilterClick'
    }
  ],
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
      dataIndex: 'email',
      text: 'Ел.поща',
      flex: 1,
      editor: 'textfield'
    }, {
      dataIndex: 'telephone',
      text: 'Телефон',
      width: 120,
      editor: 'textfield'
    }, {
      dataIndex: 'birthDate',
      text: 'Дата на раждане',
      editor: 'datefield',
      renderer: Ext.util.Format.dateRenderer('m/d/Y')
    },
    {
      xtype: 'actioncolumn',
      width: 30,
      sortable: false,
      menuDisabled: true,
      items: [{
          xtype: 'button',
          icon: "img/icon/delete_icon.png",
          tooltip: 'Изтрий записа',
          handler: 'onDeleteClick'
        }]
    }],
  dockedItems: [{
      xtype: 'pagingtoolbar',
      store: {
        type: 'SimpsonsStore',
        autoLoad: true,
        autoDestroy: true
      },
      dock: 'bottom',
      displayInfo: true,
      displayMsg: 'Записи от {0} до {1} от общо {2}',
      beforePageText: 'страница',
      afterPageText: 'от {0}',
      emptyMsg: "Няма записи"
    }]
});


