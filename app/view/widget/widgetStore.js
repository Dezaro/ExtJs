/* global Ext */

Ext.define('Application.view.widget.widgetStore', {
  extend: 'Ext.data.Store',
  alias: 'store.widgetStore',
  model: 'Application.view.widget.widgetModel',
  autoLoad: true,
  autoDestroy: true,
  data: (function() {
    var result = [],
            i,
            generateSequence = function(count, min, max) {
              var j,
                      sequence = [];

              if(count === null) {
                count = 20;
              }
              if(min === null) {
                min = -10;
              }
              if(max === null) {
                max = 10;
              }
              for(j = 0; j < count; j++) {
                sequence.push(Ext.Number.randomInt(min, max));
              }
              return sequence;
            };

    for(i = 0; i < 8; i++) {
      result.push([i + 1, 'Record ' + (i + 1), Ext.Number.randomInt(0, 100) / 100, generateSequence(20, 1, 10), generateSequence(4, 10, -3, -5, -1, 20, 1, 30, 10, 4, 10, -3, -5, -1, 4, 10, -3, -5, -1, 20, 1, 30, 10, 4, 10, -3, -5, -1), generateSequence(5, 20, 1, 30, -5, 15, -2, -1, 0, 30, 4, 10, 20), generateSequence(20, 1, 10), generateSequence(4, 10, 20), generateSequence(2, 3, 0, 4, -1), generateSequence(20, -1, 1)]);
    }
    return result;
  })()
});

