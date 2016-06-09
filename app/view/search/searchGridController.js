/* global Ext */

Ext.define('Application.view.search.searchGridController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.searchGridController',
  searchValue: null,
  indexes: [],
  currentIndex: null,
  searchRegExp: null,
  caseSensitive: false,
  regExpMode: false,
  refs: [
    {
      ref: 'grid',
      selector: '#searchGridID'
    }
  ],
  init: function() {
    this.control({
      'grid': {
        selectionchange: this.gridSelectionChange
      }
    });
  },
  gridSelectionChange: function() {
     return console.log('Row is selected is change!');
  },
  change: function(val) {
    if(val > 0) {
      return '<span style="color:green;">' + val + '</span>';
    } else if(val < 0) {
      return '<span style="color:red;">' + val + '</span>';
    }
    return val;
  },
  pctChange: function(val) {
    if(val > 0) {
      return '<span style="color:green;">' + val + '%</span>';
    } else if(val < 0) {
      return '<span style="color:red;">' + val + '%</span>';
    }
    return val;
  },
  initComponent: function() {
    this.width = 700;
    this.callParent();
  },

  onTextFieldChange: function(field, newValue, oldValue, options) {
    // var me = this,
    var textFieldValue = Ext.getCmp('field').getValue();
    var textField = Ext.getCmp('field');
    var me = textField.up('grid');
    // var  count = 0;

    me.view.refresh();


    me.searchValue = textFieldValue;//me.getSearchValue;
    me.indexes = [];
    me.currentIndex = null;

    if(me.searchValue !== null) {
      me.searchRegExp = new RegExp(me.searchValue, 'g' + (me.caseSensitive ? '' : 'i'));


      me.store.each(function(record, idx) {
        var td = Ext.fly(me.view.getNode(idx)).down('td'),
                cell, matches, cellHTML;
        while(td) {
          cell = td.down('.x-grid-cell-inner');
          matches = cell.dom.innerHTML.match(me.tagsRe);
          cellHTML = cell.dom.innerHTML.replace(me.tagsRe, me.tagsProtect);

          // populate indexes array, set currentIndex, and replace wrap matched string in a span
          cellHTML = cellHTML.replace(me.searchRegExp, function(m) {
            //count += 1;
//            if(Ext.Array.indexOf(me.indexes, idx) === -1) {
//              me.indexes.push(idx);
//            }
            if(me.currentIndex === null) {
              me.currentIndex = idx;
            }
            //     return '<span class="' + me.matchCls + '">' + m + '</span>';
            return '<span style="color:red;"><b>' + m + '</b></span>';
          });
          // restore protected tags
          Ext.each(matches, function(match) {
            cellHTML = cellHTML.replace(me.tagsProtect, match);
          });
          // update cell html
          cell.dom.innerHTML = cellHTML;
          td = td.next();
        }
      }, me);

      if(me.currentIndex !== null) {
        me.getSelectionModel().select(me.currentIndex);

      }
    }

    if(me.currentIndex === null || me.searchValue === '') {
      me.getSelectionModel().deselectAll();
    }
  }
});

