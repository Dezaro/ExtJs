/* global Ext */

Ext.define('Application.view.checkTree.checkTree', {
  extend: 'Ext.tree.Panel',
  xtype: 'check-tree',
  requires: [
    'Application.view.checkTree.checkTreeController'
  ],
  controller: 'checkTreeController',
  store: new Ext.data.TreeStore({
    proxy: {
      type: 'ajax',
      url: 'data/checkTreeData.php'
    },
    root: {
      text: 'Ext JS',
      id: 'src',
      expanded: true
    },
    folderSort: true,
    sorters: [{
        property: 'text',
        direction: 'ASC'
      }]
  }),
  rootVisible: false,
  useArrows: true,
  frame: true,
  title: 'Check Tree',
  width: 280,
  height: 300,
  bufferedRenderer: false,
  animate: true,
  listeners: {
    beforecheckchange: 'onBeforeCheckChange'
  },
  tbar: [{
      text: 'Get checked nodes',
      handler: 'onCheckedNodesClick'
    }]
});
