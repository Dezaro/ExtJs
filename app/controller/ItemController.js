/* global Ext */

Ext.define('Application.controller.ItemController', {
  extend: 'Ext.app.Controller',
  stores: ['TreeStore'],
  models: ['TreeModel'],
  views: ['item.TreePanel', 'item.TabPanel'],
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
          //         Ext.getCmp('resetBtn').fireEvent('click');
          active = true;
        }
      }
      var tabsCount = this.tabs.items.length;
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
          icon: 'img/icon/' + selection.data.name + '.png',
          items: [view]
        });
        this.tabs.setActiveTab(this.tabs.items.length - 1);
      }
      
      if(!active && tabsCount > this.maxTabs) {
        Ext.toast({
          title: 'Внимание',
          timeout: 1000,
          align: 't',
          closable: false,
          minWidth: 200,
          slideInDuration: 400,
          icon: 'img/icon/info.png',
          html: '<div align="center" style="color: #083772; font-weight: bold;">Upps... Не може да отвориш повече от <span style="color: red;">5 таба</span>! :(</div>'
        });
      }
    }
  }
});