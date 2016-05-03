/* global Ext */

Ext.define('Application.controller.ItemController', {
  // Extend basic controller object
  extend: 'Ext.app.Controller',
  // Attach store classes to this controller
  stores: ['Items'],
  // Attach model classes to this controller
  models: ['Item'],
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
        // Action to be performed on select
        select: this.onItemSelect
      }
    });
  },
  tabs: null,
  maxTabs: 5,
  onItemSelect: function(selModel, selection) {
    // Executed only when selection is a leaf
    //(selection.data.leaf) ? Ext.get('iframe-12').dom.src = selection.raw.description : null;
    this.tabs = Ext.getCmp('tabs12');
    var active = false;
    if(selection.data.leaf) {
      for(var i = 0; i < this.tabs.items.length; ++i) {
        if(selection.data.item_id === this.tabs.items.items[i].id) {
          this.tabs.setActiveTab(i);
          active = true;
        }
      }
      if(!active && this.tabs.items.length <= this.maxTabs) {
        this.tabs.add({
          id: selection.data.item_id,
          title: selection.data.name,
          closable: true,
          items: [
            {
              xtype: 'itemFrame',
              id: 'framePanel-' + selection.data.item_id
            }
          ]
        });
        this.tabs.setActiveTab(this.tabs.items.length - 1);
        Ext.getCmp('framePanel-' + selection.data.item_id).setSrc(selection.raw.description);
      }
    }
  }
});