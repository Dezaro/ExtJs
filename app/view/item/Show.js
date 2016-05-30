/* global Ext */

Ext.define('Application.view.item.Show', {
  id: 'tabs12',
  extend: 'Ext.TabPanel',
  alias: 'widget.itemShow',
  views: ['item.Frame'],
  reference: 'tabpanel',
  border: false,
  items: [
    {
      id: 'tab0',
      tbar: [
        {
          xtype: 'button',
          icon: "img/icon/delete_icon.png",
          tooltip: 'show',
          handler: function(grid, rowIndex) {
//            var s = Ext.create('Application.view.custom.customMsgBox', {
//              modal: false,
//              title: 'Изтриване',
//              msg: 'Сигурни ли сте, че искате да изтриете записа?',
//              buttonText: {
//                yes: '<span style="color: #083772"><b>Да</b></span>',
//                no: '<span style="color: #083772"><b>Не</b></span>'
//              },
//              fn: function(btn, text, ob) {
//                if(btn === 'yes') {
//                  console.log('Yes pressed');
//                }
//              },
//              scope: this,
//              icon: Ext.MessageBox.QUESTION
//            });
//            s.show();
            var test = Ext.create('Application.view.custom.customWindow', {
              //closable: false
            });
            test.show();
          }
        }
      ],
      title: '',
      border: false,
      icon: "img/icon/config1.png",
      glyph: null,
      items: [
//        {
//          xtype: 'window',
//          title: 'New Window!',
//          constrain: true,
//          autoShow: true,
//          closable: true,
//          modal: true,
//          height: 350,
//          width: 400
//        },
        {
          xtype: 'image',
          width: 800,
          height: 450,
          style: 'margin-left: 15%;',
          src: 'img/icon/evropat.jpg'
        }
      ]
    }
  ]
});