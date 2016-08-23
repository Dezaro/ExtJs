/* global Ext */

Ext.define('Application.view.checkTree.checkTreeController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.checkTreeController',
  onBeforeCheckChange: function(record, checkedState, e) {
    if(record.get('text') === 'Take a nap' && !checkedState) {
      Ext.toast('No rest for the wicked!', null, 't');
      return false;
    }
  },
  onCheckedNodesClick: function() {
    var records = this.getView().getChecked(),
            names = [];

    Ext.Array.each(records, function(rec) {
      names.push(rec.get('text'));
    });

//    Ext.MessageBox.show({
//      title: 'Selected Nodes',
//      msg: names.join('<br />'),
//      icon: Ext.MessageBox.INFO
//    });

    var selectedNodes = Ext.create('Application.view.custom.customMsgBox', {
      modal: false,
      title: 'Selected Nodes',
      msg: names.join('<br />'),
      icon: Ext.MessageBox.INFO
    });
    selectedNodes.show();
  }
});
