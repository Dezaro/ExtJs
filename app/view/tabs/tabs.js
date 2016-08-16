/* global Ext */

//var reorderableTabsPanel = Ext.create('Application.view.tabs.reorderableTabs');
//reorderableTabsPanel.items.items[1].disable();
//reorderableTabsPanel.items.items[0].setTitle('New Title');
//reorderableTabsPanel.items.items[0].setHtml('The tabs in this example are reorderable. Drag any tab to change the order.');


Ext.define('Application.view.tabs.tabs', {
  extend: 'Ext.tab.Panel',
  xtype: 'framed-tabs',
  requires: [
    'Application.view.tabs.tabsController',
    'Application.view.tabs.reorderableTabs'
  ],
  controller: 'tabsController',
  frame: true,
  width: 400,
  height: 300,
  defaults: {
    bodyPadding: 10,
    scrollable: true
  },
  items: [{
      title: 'Active Tab',
      items: [
        {
          xtype: 'reorderable-tabs'
        }
      ]
              //  html: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }, {
      title: 'Inactive Tab',
//      items: [reorderableTabsPanel]
      // html: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed risus neque, mollis id auctor eget, aliquet vel augue. Sed egestas fermentum tempus. Praesent hendrerit eros et enim laoreet suscipit. Nam diam ante, ullamcorper id congue non, accumsan non augue. Aliquam non libero augue, vitae molestie orci. Nulla ac enim nec velit rhoncus venenatis. Aenean orci quam, eleifend ut aliquam iaculis, pellentesque ut arcu. Suspendisse lobortis commodo magna, vitae sodales orci luctus vestibulum. Cras eget ipsum sapien, vel dapibus metus. Etiam sed augue sit amet massa commodo commodo. Nam pellentesque dapibus ipsum. Proin eget malesuada magna. Curabitur elit diam, pellentesque id fermentum eget, congue ultricies nibh. Nunc tincidunt sem at diam porta tincidunt. Suspendisse fringilla felis in lectus blandit vulputate. Suspendisse mollis ipsum nec ante congue ut porttitor nunc bibendum. Maecenas mollis sem non justo iaculis vitae consequat augue pulvinar. Sed aliquet malesuada lobortis. Maecenas malesuada eros sed erat ultricies eleifend. Nulla facilisi. Pellentesque pharetra molestie mollis. Aenean venenatis tempus urna, quis convallis quam cursus eget.'
    }, {
      title: 'Disabled Tab',
      disabled: true
    }],
  listeners: {
    tabchange: 'onTabChange'
  }
});


