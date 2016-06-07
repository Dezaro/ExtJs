/* global Ext */

Ext.define('Application.controller.ItemController', {
  extend: 'Ext.app.Controller',
  stores: ['Items'],
  models: ['Item'],
  views: ['item.List', 'item.Show', 'item.iframe'],
  refs: [
    {
      ref: 'itemShowDesc',
      selector: 'itemShow > #item-description'
    }
  ],
  init: function() {
    this.control({
      'itemList': {
        itemclick: this.onItemClick
      }
    });
  },
  maxTabs: 5,
  onItemClick: function(selModel, selection) {
    this.tabs = Ext.getCmp('tabs12');
    var active = false;
    if(selection.data.leaf) {
      for(var i = 0; i < this.tabs.items.length; ++i) {
        if(selection.data.item_id === this.tabs.items.items[i].id) {
          var tabToDestroy = Ext.getCmp(selection.data.item_id);
          tabToDestroy.removeAll(true);
          this.tabs.remove(tabToDestroy, true);
          var view = Ext.create(selection.raw.description);
          this.tabs.insert(i, {
            id: selection.data.item_id,
            title: selection.data.name,
            closable: true,
            border: false,
            autoDestroy: true,
            layout: 'fit',
            region: 'center',
            icon: 'img/icon/pass.png',
            items: [view]
          });
          this.tabs.setActiveTab(i);
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
          autoDestroy: true,
          layout: 'fit',
          region: 'center',
          icon: 'img/icon/'+selection.data.name+'.png',
          items: [view]
        });
        this.tabs.setActiveTab(this.tabs.items.length - 1);
      }
    }
  }
});