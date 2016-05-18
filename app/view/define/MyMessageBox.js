/* global Ext */

Ext.define('Application.view.define.MyMessageBox', {
  extend: 'Ext.window.MessageBox',
  alias: 'widget.defMsgBox',
  modal: true,
  constrainHeader: true,
  renderMask: null,
  initComponent: function() {
    this.callParent();
    this.showMask();
  },
  showMask: function() {
    if(this.renderMask !== null) {
      this.renderMask.el.mask();
    }
  },
  hideMask: function() {
    if(this.renderMask !== null) {
      this.renderMask.el.unmask();
    }
  }
});