/* global Ext */

Ext.define('Application.view.item.TabPanel', {
  id: 'tabs12',
  extend: 'Ext.TabPanel',
  alias: 'widget.itemShow',
//  plugins: Ext.create('Ext.ux.TabReorderer'),
  requires: [
    'Ext.ux.TabReorderer'
  ],
  plugins: [
    'tabreorderer',
    'responsive'
  ],
  responsiveConfig: {
    'width < 800': {
      tabPosition: 'left'
    },
    'width > 800': {
      tabPosition: 'top'
    }
  },
  reference: 'tabpanel',
  border: false,
  items: [
    {
      id: 'tab0',
      reorderable: false,
      tbar: [
        {
          xtype: 'button',
          icon: "img/icon/color.png",
          tooltip: 'show',
          handler: function(grid, rowIndex) {
            var test = Ext.create('Application.view.custom.customWindow', {
              title: 'Colors',
              width: 200,
              alwaysOnTop: true,
              height: 200,
              items: [
                Ext.create('Ext.picker.Color', {
                  value: '993300', // initial selected color
                  renderTo: Ext.getBody(),
                  listeners: {
                    select: function(picker, selColor) {
                      alert(selColor);
                    }
                  }
                })
              ]
            });
            test.show();
          }
        }
      ],
      title: '',
      border: true,
      icon: "img/icon/home1.png",
      glyph: null,
      items: [
        {
          xtype: 'image',
          width: 800,
          height: 450,
          alt: 'headerLogo',
          style: 'margin-left: 15%;',
          src: 'img/icon/evropat.jpg'
        }
      ]
    }
  ]
});