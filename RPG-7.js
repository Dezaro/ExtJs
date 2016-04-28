  /* global Ext */
(function(){
      var win = Ext.create('Ext.window.Window', {
        title: 'iframe Window',
        closable: true,
        closeAction: 'hide',
        width: 400,
        modal: true,
        minWidth: 350,
        height: 150,
        layout: 'fit',
        items: [{
            xtype: 'label',
            text: 'Extshs test'
          }]
      });
//      Ext.onReady(function() {
//        win.show();
//      });

  var store = Ext.create('Ext.data.Store', {
        storeId: 'simpsonsStore',
        fields: ['name', 'email', 'phone', 'birthDate'],
        data: {'items': [
            {'name': 'Lisa', "email": "lisa@simpsons.com", "phone": "5551111224", "birthDate": "05/10/1990"},
            {'name': 'Lisa', "email": "lol@simpsons.com", "phone": "5551111224", "birthDate": "07/17/1992"},
            {'name': 'Bart', "email": "bart@simpsons.com", "phone": "5552221234", "birthDate": "05/04/1993"},
            {'name': 'Homer', "email": "homer@simpsons.com", "phone": "5552221244", "birthDate": "04/19/1991"},
            {'name': 'Marge', "email": "marge@simpsons.com", "phone": "5552221254", "birthDate": "10/20/1994"}
          ]},
        proxy: {
          type: 'memory',
          reader: {
            type: 'json',
            rootProperty: 'items'
          }
        }
      });

   var gridPanel =  Ext.create('Ext.grid.Panel', {
        title: 'Simpsons',
        store: Ext.data.StoreManager.lookup('simpsonsStore'),
  //      plugins: 'gridfilters',
        columns: [
          {text: 'Name', dataIndex: 'name', editor: {
              xtype: 'textfield',
              allowBlank: false
            }},
          {text: 'Email', dataIndex: 'email', flex: 1, editor: 'textfield'},
          {text: 'Phone', dataIndex: 'phone', filter: 'number'},
          {text: 'Birth Date', dataIndex: 'birthDate', editor: 'datefield', renderer: Ext.util.Format.dateRenderer('m/d/Y')}
        ],
        selType: 'rowmodel',
        plugins: [{
            ptype: 'rowediting',
            clicksToEdit: 2
          }],
//        selType: 'cellmodel',
//        plugins: 'cellediting',
        autoWidth: true,
        tbar: [{
            xtype: 'button',
            text: 'Filter',
            handler: function(btn) {
              var g = btn.up('grid');
              g.store.filter([{property: "name", anyMatch: true, value: 'Lisa'}, {property: "email", anyMatch: true, value: 'lisa@simpsons.com'}]);
            }
          }, {
            xtype: 'button',
            text: 'Click me',
            handler: function(btn) {
              win.show();
            }
          }],
        layout: 'fit',
        //     height: 200,
        //     width: 400,
        dockedItems: [{
            xtype: 'pagingtoolbar',
            store: Ext.data.StoreManager.lookup('simpsonsStore'), // same store GridPanel is using
            dock: 'bottom',
            displayInfo: true
          }],
        renderTo: Ext.getBody()
      });
      
      });

