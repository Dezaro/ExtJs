/* global Ext */

Ext.define('Application.controller.ItemController', {
  // Extend basic controller object
  extend: 'Ext.app.Controller',
  // Attach store classes to this controller
  stores: ['Items'],
  // Attach model classes to this controller
  models: ['Item'],
  // ..and last but not least - the view classes
  views: ['item.List', 'item.Show'],
  // Refs parameter defines references to certain
  // instances of components pointed by selector
  refs: [
    {
      // Ref determines the name of the automagic
      // this.get[ref-goes-here] method that returns
      // instance of certain component
      ref: 'itemShowDesc',
      // Select #item-description component in
      // item.Show view
      selector: 'itemShow > #item-description'
    }
  ],
  // when including the controllers in your application, 
  // the framework will automatically load the controller 
  // and call the init method on it
  init: function() {
    this.control({
      'itemList': {
        // Action to be performed on select
        select: this.onItemSelect
      }
    });
  },
  onItemSelect: function(selModel, selection) {
    // Executed only when selection is a leaf
    //(selection.data.leaf) ? Ext.get('iframe-12').dom.src = selection.raw.description : null;
    (selection.data.leaf) ? Ext.getCmp('tabs12').add({title: selection.data.name, closable: true, html: selection.data.description}) : null;
  }
});