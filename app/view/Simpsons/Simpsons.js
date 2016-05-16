/* global Ext */

Ext.define('Application.view.Simpsons.Simpsons', {
  id: 'simpsonsGridID',
  extend: 'Ext.grid.Panel',
  xtype: 'grid-filtering',
  requires: [
    'Application.view.Simpsons.SimpsonsStore'
  ],
  title: '<span style="color: #525252;">Simpsons</span>',
  iconCls: 'icon-grid',
  frame: true,
  autoScroll: true,
  animScroll: true,
  width: 700,
  height: 500,
  resizable: true,
  plugins: ['cellediting'],
  selType: 'cellmodel',
  emptyText: 'Няма записи',
  loadMask: true,
  stateful: true,
  // Set a stateId so that this grid's state is persisted.
  stateId: 'stateful-filter-grid',
  store: {
    type: 'SimpsonsStore',
    url: 'data/simpsons-data.json',
    autoLoad: true,
    autoDestroy: true
  },
  // Dispatch named listener and handler methods to this instance
  defaultListenerScope: true,
  tbar: [{
      xtype: 'button',
      text: '<span style="color: #083772"><b>Филтър</b></span>',
      icon: 'img/icon/filter.png',
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
          icon: "img/icon/delete_icon.png",
          tooltip: 'Изтрий записа',
          handler: 'onDeleteClick'
        }]
    }],
  dockedItems: [{
      xtype: 'pagingtoolbar',
      store: {
        type: 'SimpsonsStore',
        url: 'data/simpsons-data.json',
        autoLoad: true,
        autoDestroy: true
      },
      dock: 'bottom',
      displayInfo: true,
      displayMsg: 'Записи от {0} до {1} от общо {2}',
      beforePageText: 'страница',
      afterPageText: 'от {0}',
      emptyMsg: "Няма записи"
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
  },
  onFilterClick: function(btn) {
    var g = btn.up('grid');
    g.store.filter([{property: "name", anyMatch: true, value: 'Lisa'}, {property: "email", anyMatch: true, value: 'lisa@simpsons.com'}]);
  }
});


