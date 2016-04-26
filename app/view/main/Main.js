/* global Ext */

(function() {
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = '.an-icon {background-image: url(img/icon/add.png);background-repeat: no-repeat;}';
  document.body.appendChild(css);

  var btnLogout = {
    text: 'Logout',
    iconCls: 'an-icon',
    handler: 'onClickButton'
  };

  var tree = {
    xtype: 'itemList',
    useArrows: true,
    bind: {
      title: '{name}'
    },
    title: 'Модули',
    collapsible: true,
    collapseDirection: Ext.Component.DIRECTION_LEFT,
    collapsed: false,
    floatable: false,
    region: 'west',
    width: 250,
    split: true,
    tbar: [
      btnLogout
    ]
  };

  var iframe = {
    xtype: 'panel',
    region: 'center',
    title: 'Ext 5.1.0 Panel',
    border: true,
    scrollable: false,
    layout: {
      type: 'fit',
      padding: 5
    },
    tbar: [
      '->',
      btnLogout
    ],
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
    title: 'Main Panel',
    autoScroll: true,
    border: false,
    layout: {
      type: 'border',
      padding: 3
    },
    items: [
      tree,
      iframe
    ],
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
      type: 'hbox',
      align: 'stretch'
    },
    items: [
      panel
    ]
  });
}());