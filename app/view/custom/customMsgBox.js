/* global Ext */

Ext.define('Application.view.custom.customMsgBox', {
  extend: 'Object',
  constructor: function(config) {
    this.config = config;
    this.activeTabID = Ext.getCmp('tabs12').getActiveTab().id;
    this.activeTab = Ext.getCmp(this.activeTabID);
    var org_fn = this.config.fn;
    var activeTabFn = this.activeTab;
    this.config.fn = function(btn, text, ob) {
      activeTabFn.el.unmask();
      if(typeof org_fn !== 'undefined') {
        org_fn(btn, text, ob);
      }
    };
  },
  show: function() {
    this.activeTab.el.mask();
    this.msg = Ext.create('Ext.window.MessageBox', {
      constrain: true,
      renderTo: this.activeTabID
    });
    this.msg.show(this.config);
  },
  hide: function() {
    this.activeTab.el.unmask();
    this.msg.hide();
  }
});