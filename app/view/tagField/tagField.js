/* global Ext */

Ext.define('Application.view.tagField.tagField', {
  extend: 'Ext.panel.Panel',
  xtype: 'form-tag',
  requires: [
    'Application.view.tagField.tagFieldStore'
  ],
  title: 'Select State(s)',
  bodyPadding: 5,
  frame: true,
  width: 600,
  layout: 'form',
  viewModel: {},
  items: [{
      xtype: 'displayfield',
      fieldLabel: 'Selected States',
      bind: '{states.value}'
    }, {
      id: 'tagfield1',
      xtype: 'tagfield',
      fieldLabel: 'Select a state',
      store: {
        type: 'states'
      },
      value: ['CA'],
      reference: 'states',
      displayField: 'state',
      valueField: 'abbr',
      filterPickList: true,
      queryMode: 'local',
      publishes: 'value'
    }, {
      xtype: 'displayfield',
      fieldLabel: 'Selected Locations',
      bind: '{locations.value}'
    }, {
      id: 'tagfield2',
      xtype: 'tagfield',
      fieldLabel: 'Select/add location',
      store: {
        type: 'states'
      },
      value: ['KS'],
      reference: 'locations',
      displayField: 'state',
      valueField: 'abbr',
      createNewOnEnter: true,
      createNewOnBlur: true,
      filterPickList: true,
      queryMode: 'local',
      publishes: 'value'
    }],
  buttons: [{
      text: 'OK',
      listeners: {
        click: function(){
          console.log(Ext.getCmp('tagfield2').value);
          Ext.toast({
          title: 'Info',
          timeout: 1000,
          align: 't',
          closable: false,
          minWidth: 200,
          slideInDuration: 400,
          icon: 'img/icon/info.png',
          html: '<div align="center" style="color: green; font-weight: bold;">You clicked OK! :) </div> <div align="center" style="font-weight: bold;"><br> States: ' + Ext.getCmp('tagfield1').value + '; <br> Locations: ' + Ext.getCmp('tagfield2').value + ';</div>'
        });
        }
      }
    }, {
      text: 'Cancel',
      listeners: {
        click: function(){
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
      }
    }]
});



