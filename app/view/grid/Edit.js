//unused window for edit http://docs.sencha.com/extjs/4.0.7/#!/guide/application_architecture
/* global Ext */
Ext.define('Application.view.grid.Edit', {
  extend: 'Ext.window.Window',
  alias: 'widget.useredit',
  title: 'Edit',
  layout: 'fit',
  autoShow: true,
  initComponent: function() {
    this.items = [{
        xtype: 'form',
        items: [
          {
            xtype: 'textfield',
            name: 'name',
            fieldLabel: 'Name'
          }, {
            xtype: 'textfield',
            name: 'address',
            fieldLabel: 'Address'
          }, {
            xtype: 'textfield',
            name: 'contact',
            fieldLabel: 'Contact'
          }, {
            xtype: 'textfield',
            name: 'telephone',
            fieldLabel: 'Telephone'
          }]
      }];
    this.buttons = [
      {
        text: 'Save',
        action: 'save'
      },
      {
        text: 'Cancel',
        scope: this,
        handler: this.close
      }
    ];
    
    this.callParent(arguments);
  }
});