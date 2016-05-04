/* global Ext */

Ext.define('ModuleTestYes', {
  extend: 'Ext.app.Application',
  name: 'ModuleTest',
  stores: [
   // 'ModuleTest.store.Tests'
  ],
  controllers: [
    'ModuleTest.controller.TestController'
  ],
  views: [
   // 'ModuleTest.view.grid.testView'
  ],
  launch: function() {
    Ext.widget('grid-filtering');
  }
});

Ext.application('ModuleTestYes');