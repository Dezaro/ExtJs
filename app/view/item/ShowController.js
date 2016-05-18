/* global Ext */

Ext.define('Application.view.item.ShowController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.show',
  init: function() {
    this.control({
      'itemShow': {
        'beforetabchange':function(){console.log('adsa');}
        //beforetabchange: this.confirmTabChange()
      }
    });
  },
  confirmTabChange: function() {
    Ext.MessageBox.confirm('Alert', 'Are you sure you want to change tabs?', function(response) {
      if(response === 'yes') {
      }
    });
  }
});