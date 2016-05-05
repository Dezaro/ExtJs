/* global Ext */

Ext.define('ArrayTestYes', {
  extend: 'Ext.app.Application',
  name: 'ArrayTest',
  stores: [
   // 'ModuleTest.store.Tests'
  ],
  controllers: [
    'ArrayTest.controller.ArrayController'
  ],
  views: [
    //'ArrayTest.view.grid.ArrayGrid'
  ],
  launch: function() {
    Ext.widget('grid-filtering');
  }
});

Ext.application('ArrayTestYes');