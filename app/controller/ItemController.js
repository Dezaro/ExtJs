/* global Ext */

Ext.define('Application.controller.ItemController', {
  // Extend basic controller object
  extend: 'Ext.app.Controller',
  // Attach store classes to this controller
  stores: ['Items'],
  // Attach model classes to this controller
  models: ['Item'],
//  requires: [
//    'Application.modules.test.app.view.grid.testView'
//  ],
  // ..and last but not least - the view classes
  views: ['item.List', 'item.Show', 'item.iframe'],
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
        itemclick: this.onItemClick
      }
//      'itemList': {
//        // Action to be performed on select
//        select: this.onItemSelect
//      }
    });
  },
  tabs: null,
  maxTabs: 5,
  onItemClick: function(selModel, selection) {
    // Executed only when selection is a leaf
    this.tabs = Ext.getCmp('tabs12');
    var active = false;
    if(selection.data.leaf) {
      for(var i = 0; i < this.tabs.items.length; ++i) {
        if(selection.data.item_id === this.tabs.items.items[i].id) {
          var tabToDestroy = Ext.getCmp(selection.data.item_id);
          tabToDestroy.remove(selection.raw.description);
          tabToDestroy.destroy();
          var view = Ext.create(selection.raw.description);
          this.tabs.insert(i, {
            id: selection.data.item_id,
            title: selection.data.name,
            closable: true,
            border: false,
            layout: 'fit',
            items: [view]
          });
          this.tabs.setActiveTab(i);
          //   Ext.getCmp('framePanel-' + selection.data.item_id).setSrc(selection.raw.description);
          active = true;
        }
      }
      if(!active && this.tabs.items.length <= this.maxTabs) {
        var view = Ext.create(selection.raw.description);
        this.tabs.add({
          id: selection.data.item_id,
          title: selection.data.name,
          closable: true,
          border: false,
          layout: 'fit',
          items: [
            view
//            {
//              xtype: 'itemFrame',
//              id: 'framePanel-' + selection.data.item_id,
//              layout: {
//                align: 'stretch'
//              }
//            }

          ]
        });
        this.tabs.setActiveTab(this.tabs.items.length - 1);
        //  Ext.getCmp('framePanel-' + selection.data.item_id).setSrc(selection.raw.description);
      }
    }
  }
});