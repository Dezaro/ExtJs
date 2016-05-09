/* global Ext */

(function() {
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = '.an-icon {background-image: url(img/icon/add.png);background-repeat: no-repeat;}';
  document.body.appendChild(css);

  Ext.create('Ext.window.Window', {
    id: 'winID',
    title: 'Information',
    closable: true,
    closeAction: 'hide',
    width: 400,
    modal: true,
    minWidth: 350,
    height: 150,
    layout: 'fit',
    items: [{
       // xtype: 'label',
        html: '<div style="text-align: center; color: blue;"><b>Продукт, разработен от IT отдел на "Европът-2000" АД. <br>Година: 2016г.</b></div>'
      }]
  });

  var btnLogout = {
    text: 'logout',
    iconCls: 'an-icon',
    handler: 'onClickButton'
  };

  var btnInfo = {
    text: 'info',
    iconCls: 'an-icon',
    handler: 'onInfoClick'
  };

  var tree = {
    xtype: 'itemList',
    useArrows: true,
    bind: {
      title: '{name}'
    },
    title: 'Модули',
    autoScroll: false,
    collapsible: true,
    collapseDirection: Ext.Component.DIRECTION_LEFT,
    collapsed: false,
    floatable: false,
    region: 'west',
    width: 250,
    split: true // ,
//    tbar: [
//      btnLogout
//    ]
  };

  var tabPanel = {
    xtype: 'panel',
    region: 'center',
    // title: 'Ext 5.1.0 Panel',
    border: false,
    autoScroll: false,
    scrollable: false,
    layout: {
      type: 'fit'
    },
//    tbar: [
//      '->',
//      btnLogout
//    ],
    items: [{
        xtype: 'itemShow',
        scrollable: false,
        layout: {
          type: 'fit'
        }
      }
    ]
  };

  var panel = {
    xtype: 'panel',
    // title: 'Main Panel',
    autoScroll: false,
    animScroll: true,
    border: false,
    layout: {
      type: 'border',
      padding: 3
    },
    items: [
      tree,
      tabPanel
    ],
    //tbar: [btnLogout],
    bbar: ['Content appropriate for the current navigation'],
    flex: 1
  };

  Ext.define('Application.view.main.Main', {
    extend: 'Ext.container.Container',
    requires: [
      'Application.view.main.MainController'
    ],
    xtype: 'app-main',
    controller: 'main',
    plugins: 'viewport',
    viewModel: {
      type: 'main'
    },
    layout: {
      type: 'vbox',
      align: 'stretch'
    },
    items: [
      {
        xtype: 'toolbar',
        border: false,
        items: [
//          {
//            xtype: 'textfield',
//            name: 'info',
//            fieldLabel: 'Info',
//            labelWidth: 20
//          },
          btnInfo,
          '->',
          btnLogout
        ]
      },
      panel
    ]
  });
}());
