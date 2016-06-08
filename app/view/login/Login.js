/* global Ext */

(function() {

  var userName = {
    xtype: 'textfield',
    id: 'uNameLog',
    name: 'username',
    labelWidth: 70,
    reference: 'userField',
    fieldLabel: 'Потребител:',
    allowBlank: true,
    style: 'text-align: right',
    listeners: {
      specialkey: 'changeFocus'
    }
  };

  var password = {
    xtype: 'textfield',
    id: 'passLog',
    name: 'password',
    inputType: 'password',
    reference: 'passField',
    labelWidth: 70,
    fieldLabel: 'Парола:',
    allowBlank: true,
    style: 'text-align: right',
    listeners: {
      specialkey: 'onEnter'
    }
  };

  var btnLogin = {
    id: 'btnLogin',
    text: '<b>Вход</b>',
    formBind: true,
    listeners: {
      click: 'onLoginClick'
    }
  };

  var loginForm = {
    id: 'formID',
    xtype: 'form',
    border: false,
    bodyStyle: 'background:none; ',
    reference: 'loginForm',
    items: [
      userName,
      password
    ],
    buttons: [
      btnLogin
    ],
    buttonAlign: 'center'
  };

  Ext.define('Application.view.login.Login', {
    extend: 'Ext.window.Window',
    xtype: 'login',
    requires: [
      'Application.view.login.LoginController',
      'Ext.form.Panel'
    ],
    controller: 'login',
    bodyPadding: 10,
    title: '<div class="container"><div class="left-el"><img style="width: 18px; height: 15px;" src="img/icon/login2.png"></div><div class="left-el">  Вход в системата</div></div>',
    closable: false,
    enableKeyEvents: true,
    autoShow: true,
    layout: {
      type: 'vbox',
      padding: '5',
      align: 'center',
      pack: 'center'
    },
    items: [
      loginForm
    ]
  });
}());