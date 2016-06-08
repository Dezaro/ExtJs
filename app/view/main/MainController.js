/* global Ext */

Ext.define('Application.view.main.MainController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.main',
  init: function() {
    this.callParent();
    this.logArray = JSON.parse(localStorage.getItem('logArray'));
    this.lookupReference('officeLabel').setText(this.logArray.office.toUpperCase());
    this.lookupReference('userLabel').setText(this.logArray.userName);
    this.lookupReference('userGroupLabel').setText(this.logArray.userGroup);
  },
  onClickButton: function() {
    localStorage.removeItem('logArray');
    this.getView().destroy();
    Ext.widget('login');
    Ext.getCmp('uNameLog').focus(true, 100);
  },
  onInfoClick: function() {
    this.office = 'Пловдив';
    this.lookupReference('officeLabel').setText(this.office.toUpperCase());
  },
  onChangePassClick: function() {
    this.lookupReference('changePass').show();
  },
  onConfirmClick: function() {
    this.lookupReference('changePass').hide();
  },
  onCancelClick: function() {
    this.lookupReference('changePass').hide();
  }
});