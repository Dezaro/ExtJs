/* global Ext */

Ext.define('UserApplication.model.UserModel', {
  extend: 'UserApplication.model.Base',
  fields: [
    'id',
    'name',
    'age',
    'profession',
    'country',
    'address',
    'email',
    'telephone',
    'action'
  ]
});