/* global Ext */

(function() {

  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = '.container{display:block; margin:0; padding:0;}\n\
                   .left-el{float:left; display:block; margin-top: 5px; margin-right: 5px; color: black;}\n\
                   body { background-image: url("img/icon/fon-login.png"); 	background-repeat: no-repeat;';

  document.body.appendChild(css);

  var userName = {
    xtype: 'textfield',
    id: 'uNameLog',
    name: 'username',
    labelWidth: 70,
    fieldLabel: 'Потребител:',
    allowBlank: true,
    style: 'text-align: right',
    listeners: {
      specialkey: function(f, e) {
        if(e.getKey() == e.ENTER) {
          Ext.getCmp('passLog').focus(true,100);
        }
      }
    }
  };

  var password = {
    xtype: 'textfield',
    id: 'passLog',
    name: 'password',
    inputType: 'password',
    labelWidth: 70,
    fieldLabel: 'Парола:',
    allowBlank: true,
    style: 'text-align: right',
    listeners: {
      specialkey: function(f, e) {
        if(e.getKey() == e.ENTER) {
          Ext.getCmp('btnLogin').fireEvent('click');
        }
      }
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
    reference: 'form',
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