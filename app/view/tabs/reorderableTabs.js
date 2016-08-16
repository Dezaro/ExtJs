/* global Ext */

Ext.define('Application.view.tabs.reorderableTabs', {
  id: 'reorderableTabsID',
  extend: 'Ext.tab.Panel',
  requires: [
    'Ext.ux.TabReorderer',
    'Application.view.tabs.reorderableTabsController'
  ],
  xtype: 'reorderable-tabs',
  controller: 'reorderableTabsController',
  width: 600,
  height: 400,
  plugins: 'tabreorderer',
  defaults: {
    bodyPadding: 10,
    scrollable: true,
    closable: true
  },
  items: [],
  dockedItems: {
    dock: 'bottom',
    xtype: 'toolbar',
    items: [{
        text: 'Add a Tab',
        glyph: 43,
        listeners: {
          click: 'onAddTabClick'
        }
    }]
  }
});
