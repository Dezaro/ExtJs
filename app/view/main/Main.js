(function() {

  var oldPassword = {
    xtype: 'textfield',
    id: 'oldPassID',
    name: 'oldPass',
    margin: '10 0 5 0',
    labelWidth: 150,
    width: 300,
    fieldLabel: 'Стара парола:',
    allowBlank: true,
    style: 'text-align: right'
  };

  var newPassword = {
    xtype: 'textfield',
    id: 'newPassID',
    name: 'newPass',
    margin: '0 0 5 0',
    labelWidth: 150,
    width: 300,
    fieldLabel: 'Нова парола:',
    allowBlank: true,
    style: 'text-align: right'
  };

  var repeatPassword = {
    xtype: 'textfield',
    id: 'repeatPassID',
    name: 'repeatPass',
    labelWidth: 150,
    width: 300,
    fieldLabel: 'Повторете паролата:',
    allowBlank: true,
    style: 'text-align: right'
  };

  var btnChange = {
    id: 'btnChage',
    text: '<span class="textColor"><b>Потвърди</b></span>',
    icon: 'img/icon/tick.gif',
    formBind: true,
    listeners: {
      click: 'onConfirmClick'
    }
  };

  var btnCancel = {
    id: 'btnCancel',
    text: '<span class="textColor"><b>Откажи</b></span>',
    icon: 'img/icon/cancel-icon.png',
    formBind: true,
    listeners: {
      click: 'onCancelClick'
    }
  };

  var formPanel = {
    id: 'formPanel',
    xtype: 'form',
    border: false,
    bodyStyle: 'background:none; ',
    reference: 'form',
    items: [oldPassword, newPassword, repeatPassword],
    buttons: [
      btnChange, btnCancel
    ],
    buttonAlign: 'center'
  };

  var btnLogout = {
    text: '<b><span style="color: #DC143C;">Изход</span></b>',
    icon: 'img/icon/logOut.png',
    handler: 'onClickButton'
  };

  var emptyBtn = {
    width: 0,
    disabled: true
  };

  var textField = {
    xtype: 'textfield',
    width: 80,
    name: 'bCode',
    maskRe: /[0-9]/,
    allowBlank: true
  };

  var btnShow = {
    text: '<b><span class="textColor">ПОКАЖИ</span></b>',
    icon: 'img/icon/book_open.png',
    handler: 'onInfoClick'
  };

  var changePassword = {
    text: '<b><span class="textColor">Смяна на парола</span></b>',
    icon: 'img/icon/password.png',
    handler: 'onChangePassClick'
  };

  var changeOffice = {
    text: '<b><span class="textColor">Смяна на офис</span></b>',
    icon: 'img/icon/building_edit.png',
    handler: 'onChangeOfficeClick'
  };

  var tree = {
    xtype: 'itemList',
    useArrows: true,
    bind: {
      title: '{name}'
    },
    title: 'Модули',
    icon: 'img/icon/config1.png',
    autoScroll: false,
    collapsible: true,
    collapseDirection: Ext.Component.DIRECTION_LEFT,
    collapsed: false,
    floatable: false,
    region: 'west',
    width: 250,
    split: true
  };

  var tabPanel = {
    xtype: 'panel',
    region: 'center',
    border: false,
    autoScroll: false,
    scrollable: false,
    layout: {
      type: 'fit'
    },
    items: [{
        xtype: 'itemShow',
        scrollable: false,
        layout: {
          type: 'fit'
        }
      }
    ]
  };

  var officeLabel = {
    id: 'officeID',
    xtype: 'label',
    tip: 'Офис',
    listeners: {
      render: function(c) {
        Ext.create('Ext.tip.ToolTip', {
          target: c.getEl(),
          html: c.tip
        });
      }
    },
    reference: 'officeLabel',
    style: {
      fontWeight: 'bold',
      fontSize: '12px',
      color: '#083772'
    },
    text: ''
  };
  var userLabel = {
    id: 'userLabelID',
    xtype: 'label',
    reference: 'userLabel',
    tip: 'Потребител',
    listeners: {
      render: function(c) {
        Ext.create('Ext.tip.ToolTip', {
          target: c.getEl(),
          html: c.tip
        });
      }
    },
    style: {
      fontWeight: 'bold',
      fontSize: '10px',
      color: '#083772'
    },
    text: ''
  };

  var userGroupLabel = {
    id: 'userGroupLabelID',
    xtype: 'label',
    reference: 'userGroupLabel',
    tip: 'Потребителска група',
    listeners: {
      render: function(c) {
        Ext.create('Ext.tip.ToolTip', {
          target: c.getEl(),
          html: c.tip
        });
      }
    },
    style: {
      fontWeight: 'bold',
      fontSize: '10px',
      color: '#083772'
    },
    text: ''
  };

  var panel = {
    xtype: 'panel',
    autoScroll: false,
    animScroll: true,
    border: false,
    layout: {
      type: 'border',
      padding: 2
    },
    items: [
      tree,
      tabPanel
    ],
    bbar: [
//      '<span class="office-icon"></span><span class="textColor"> Офис: ', officeLabel, ' </span>', '-',
//      '<span class="user-icon"></span><span class="textColor"> Потребител: ', userLabel, ' </span>', '-',
//      '<span class="userGroup-icon"></span><span class="textColor"> Потребителска група: ', userGroupLabel, ' </span>', '-',
      '<span class="office-icon"></span><span class="textColor">', officeLabel, ' </span>', '-',
      '<span class="user-icon"></span><span class="textColor">', userLabel, ' </span>', '-',
      '<span class="userGroup-icon"></span><span class="textColor">', userGroupLabel, ' </span>', '-',
      '->',
      '-', '<span class="it-icon"></span><span class="textColor">Продукт, разработен от <b>IT отдел</b> на <b>"Европът-2000" АД</b></span>'
    ],
    flex: 1
  };

  Ext.create('Ext.window.Window', {
    id: 'winID',
    title: 'Информация',
    reference: 'infoWin',
    closable: true,
    closeAction: 'hide',
    width: 400,
    modal: true,
    minWidth: 350,
    height: 150,
    layout: 'fit',
    items: [{
        html: '<div class="textColor"><b>Продукт, разработен от IT отдел на "Европът-2000" АД. <br>Година: 2016г.</b><br><img src="img/icon/logo2.png" alt=""></div>'
      }]
  });

  Ext.create('Ext.window.Window', {
    id: 'changePassWindow',
    title: 'Промяна на парола',
    reference: 'changePass',
    closable: true,
    closeAction: 'hide',
    width: 330,
    modal: true,
    minWidth: 300,
    height: 160,
    layout: 'fit',
    items: [formPanel]
  });

  Ext.define('Application.view.main.Main', {
    extend: 'Ext.container.Container',
    requires: [
      'Application.view.main.MainController',
      'Application.view.main.MainModel'
    ],
    xtype: 'app-main',
    controller: 'main',
    plugins: [
      'viewport',
      'responsive'
    ],
    viewModel: {
      type: 'main'
    },
    layout: {
      type: 'vbox',
      align: 'stretch'
    },
    items: [
      {
        xtype: 'title',
        text: '<div class="container">\n\
              <div class="left-element"> "Европът - 2000" АД</div>\n\
              <div class="middle-element"><img style= "width: 75px; height: 30px;" src="img/icon/logo2.png" alt=""></div>\n\
              <div class="right-element">КУРИЕР версия 1.0.1</div>\n\
            </div>',
        cls: 'panel-title'
      },
      {
        xtype: 'toolbar',
        border: false,
        items: [
          emptyBtn,
          '<b><span class="textColor">БАРКОД: </span></b>',
          textField,
          btnShow,
          '-',
          '->',
          '-',
          changeOffice,
          '-',
          changePassword,
          '-',
          btnLogout
        ]
      },
      panel
    ]
  });
}());
