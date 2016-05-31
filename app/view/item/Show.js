/* global Ext */

Ext.define('Application.view.item.Show', {
  id: 'tabs12',
  extend: 'Ext.TabPanel',
  alias: 'widget.itemShow',
  views: ['item.Frame'],
  reference: 'tabpanel',
  border: false,
  items: [
    {
      id: 'tab0',
      tbar: [
        {
          xtype: 'button',
          icon: "img/icon/delete_icon.png",
          tooltip: 'show',
          handler: function(grid, rowIndex) {
            var test = Ext.create('Application.view.custom.customWindow', {
            });
            test.show();
          }
        }
      ],
      title: '',
      border: false,
      icon: "img/icon/config1.png",
      glyph: null,
      items: [
        {
          xtype: 'image',
          width: 800,
          height: 450,
          style: 'margin-left: 15%;',
          src: 'img/icon/evropat.jpg'
        }
      ]
    }
  ]
});