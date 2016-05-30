Ext.define('Application.view.rowExpander.rowExpanderGrid', {
  id: 'rowExpanderID',
  extend: 'Ext.grid.Panel',
  requires: [
    'Application.view.rowExpander.rowExpanderStore'
  ],
  xtype: 'expander-lockable',
 // store: 'companies',
  store: {
    type: 'rowExpanderStore',
    url: 'data/rowExpander-data.json',
    autoLoad: true,
    autoDestroy: true
  },
//  store: {
//    type: 'Companies',
//    url: 'data/companies.json',
//    autoLoad: true,
//    autoDestroy: true
//  },
  columns: [
    {text: "Company", flex: 1, dataIndex: 'name'},
    {text: "Price", formatter: 'usMoney', dataIndex: 'price'},
    {text: "Change", dataIndex: 'change'},
    {text: "% Change", dataIndex: 'pctChange'},
    {text: "Last Updated", width: 120,  renderer: Ext.util.Format.dateRenderer('m/d/Y H:i'), dataIndex: 'lastChange'}
  ],
  columnLines: true,
  enableLocking: true,
  height: 300,
  plugins: [{
      ptype: 'rowexpander',
      rowBodyTpl: new Ext.XTemplate(
              '<p><b>Company:<span style="color:#083772;"> {name}</span></b></p>',
              '<p><b>Change:</b> {change:this.formatChange}</p><br>',
              '<p><b>Description:</b> {desc} </p>',
              {
                formatChange: function(v) {
                  var color = v >= 0 ? 'green' : 'red';
                  return '<span style="color: ' + color + ';">' + Ext.util.Format.usMoney(v) + '</span>';
                }
              })
    }],
  collapsible: true,
  animCollapse: false,
  title: 'Expander Rows in a Collapsible Grid with lockable columns',
  iconCls: 'icon-grid',
  initComponent: function() {
    this.width = 700;
    this.callParent();
  }
});


