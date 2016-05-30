/* global Ext */

Ext.define('Application.view.users.UserModel', {
  extend: 'Application.model.Base',
  fields: [
    'id',
    'name',
    'age',
    'profession',
    'country',
    'address',
    'email',
    'telephone',
    'action',
    'newRecord'
  ]
});

