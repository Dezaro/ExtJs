/* global Ext */

Ext.define('Application.model.Test', {
  extend: 'Application.model.Base',
  fields: [{
      name: 'id',
      type: 'int'
    }, {
      name: 'company'
    }, {
      name: 'price',
      type: 'float'
    }, {
      name: 'date',
      type: 'date',
      dateFormat: 'Y-m-d'
    }, {
      name: 'visible',
      type: 'boolean'
    }, {
      name: 'size'
    }]
});

