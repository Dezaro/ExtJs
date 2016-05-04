/* global Ext */

Ext.define('ModuleTest.model.Test', {
  extend: 'ModuleTest.model.Base',
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

