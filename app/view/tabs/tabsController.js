/* global Ext */

Ext.define('Application.view.tabs.tabsController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.tabsController',

    onTabChange: function(tabs, newTab, oldTab) {
        Ext.suspendLayouts();
        newTab.setTitle('Active Tab');
        oldTab.setTitle('Inactive Tab');
        Ext.resumeLayouts(true);
    }
});


