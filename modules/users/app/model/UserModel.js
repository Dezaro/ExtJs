/* global Ext */

Ext.define('UserApplication.model.UserModel', {
  extend: 'UserApplication.model.Base',
  fields: ['id', 'name', 'address', 'contact', 'telephone', 'action']
});