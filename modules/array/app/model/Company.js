///* global Ext */
//
//Ext.define('ArrayTest.model.Company', {
//  extend: 'ArrayTest.model.Base',
//  fields: [{
//      name: 'id',
//      type: 'int'
//    }, {
//      name: 'name'
//  //    type: 'String'
//    }, {
//      name: 'address'
//    //  type: 'String'
//    }, {
//         name: 'contact'
//    //    type: 'String'
//    }, {
//       name: 'telephone'
//     //   type: 'String'
//    },{ name: 'action'}]
//});

/* global Ext */

Ext.define('ArrayTest.model.Company', {
  extend: 'ArrayTest.model.Base',
  fields: ['id', 'name', 'address', 'contact', 'telephone', 'action']
});

