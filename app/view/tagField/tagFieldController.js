/* global Ext */

Ext.define('Application.view.tagField.tagFieldController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.tagFieldController',
  onOKClick: function() {
    var view = this.getView();
    Ext.toast({
      title: 'Info',
      timeout: 1000,
      align: 't',
      closable: false,
      minWidth: 200,
      slideInDuration: 400,
      icon: 'img/icon/info.png',
      html: '<div align="center" style="color: green; font-weight: bold;">You clicked OK! :) </div> <div align="center" style="font-weight: bold;"><br> States: ' + view.items.items[0].value + '; <br> Locations: ' + view.items.items[2].value + ';</div>'
    });
  },
  onCancelClick: function() {
    Ext.toast({
      title: 'Info',
      timeout: 1000,
      align: 'b',
      closable: false,
      minWidth: 200,
      slideInDuration: 400,
      icon: 'img/icon/info.png',
      html: '<div align="center" style="color: red; font-weight: bold;"> You clicked CANCEL! :( </div>'
    });
  }
});
