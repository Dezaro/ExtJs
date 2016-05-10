/* global Ext */

(function() {
  
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = '.panel-title{background-image: url(img/icon/fon5.jpg); color:white; height: 36px; text-indent: 10px; font-size: 16px;}\n\
                   .container{display:block; margin:0; padding:0;}\n\
                   .left-element{float:left; display:block; margin-top: 5px;}\n\
                   .right-element{float:right; display:block; margin-top: 5px; margin-right: 5px;}\n\
                   .middle-element{float:left; display:block; margin-left: 900px;}';

  document.body.appendChild(css);

  Ext.create('Ext.window.Window', {
    id: 'winID',
    title: 'Information',
    closable: true,
    closeAction: 'hide',
    width: 400,
    modal: true,
    minWidth: 350,
    height: 150,
    layout: 'fit',
    items: [{
        html: '<div style="text-align: center; color: blue;"><b>Продукт, разработен от IT отдел на "Европът-2000" АД. <br>Година: 2016г.</b></div>'
      }]
  });

  var btnLogout = {
    text: '<b><span style="color: #DC143C;">Изход</span></b>',
    icon: 'img/icon/logOut.png',
    handler: 'onClickButton'
  };

  var emptyBtn = {width: 0};

  var textField = {
    xtype: 'textfield',
    width: 80,
    name: 'bCode',
    allowBlank: true
  };

  var btnShow = {
    text: '<b><span style="color: #083772;">ПОКАЖИ</span></b>',
    icon: 'img/icon/book_open.png',
    handler: 'onInfoClick'
  };

//  var btnInfo = {
//    text: 'info',
//    icon: 'img/icon/info.png',
//    handler: 'onInfoClick'
//  };

  var changePassword = {
    text: '<b><span style="color: #083772;">Смяна на парола</span></b>',
    icon: 'img/icon/password.png',
    handler: 'onInfoClick'
  };

  var changeOffice = {
    text: '<b><span style="color: #083772;">Смяна на офис</span></b>',
    icon: 'img/icon/building_edit.png',
    handler: 'onInfoClick'
  };

  var tree = {
    xtype: 'itemList',
    useArrows: true,
    bind: {
      title: '{name}'
    },
    title: 'Модули',
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

  var panel = {
    xtype: 'panel',
    autoScroll: false,
    animScroll: true,
    border: false,
    layout: {
      type: 'border',
      padding: 3
    },
    items: [
      tree,
      tabPanel
    ],
    bbar: ['Офис <b>Управление</b>', '->', 'продукт, разработен от <b>IT отдел</b> на <b>"Европът-2000" АД</b>'],
    flex: 1
  };

  Ext.define('Application.view.main.Main', {
    extend: 'Ext.container.Container',
    requires: [
      'Application.view.main.MainController'
    ],
    xtype: 'app-main',
    controller: 'main',
    plugins: 'viewport',
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
              <div class="middle-element"><img style= "width: 75px; height: 30px;" src="img/icon/logo2.png"></div>\n\
              <div class="right-element">Куриер - 2016</div>\n\
            </div>',
        cls: 'panel-title'
      },
      {
        xtype: 'toolbar',
        border: false,
        items: [
          emptyBtn,
          '<b><span style="color: #083772;">БАРКОД: </span></b>',
          textField,
          btnShow,
          '->',
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
