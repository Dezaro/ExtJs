/* global Ext */

Ext.define('Application.view.tagField.tagField', {
  extend: 'Ext.panel.Panel',
  xtype: 'form-tag',
  requires: [
    'Application.view.tagField.tagFieldStore',
    'Application.view.tagField.tagFieldController'
  ],
  controller: 'tagFieldController',
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
        click: 'onOKClick'
      }
    }, {
      text: 'Cancel',
      listeners: {
        click: 'onCancelClick'
      }
    }]
});



