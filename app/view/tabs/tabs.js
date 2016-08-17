/* global Ext */
Ext.require(['Application.view.tabs.numberForm', 'Application.view.tabs.reorderableTabs', 'Application.view.tagField.tagField']);

var reorderableTabsPanel = {
  xtype: 'reorderable-tabs',
  items: [{
      title: 'Tab 1'
              // html: 'The tabs in this example are reorderable. Drag any tab to change the order.'
    }, {
      title: 'Tab 2',
      html: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed risus neque, mollis id auctor eget, aliquet vel augue. Sed egestas fermentum tempus. Praesent hendrerit eros et enim laoreet suscipit. Nam diam ante, ullamcorper id congue non, accumsan non augue. Aliquam non libero augue, vitae molestie orci. Nulla ac enim nec velit rhoncus venenatis. Aenean orci quam, eleifend ut aliquam iaculis, pellentesque ut arcu. Suspendisse lobortis commodo magna, vitae sodales orci luctus vestibulum. Cras eget ipsum sapien, vel dapibus metus. Etiam sed augue sit amet massa commodo commodo. Nam pellentesque dapibus ipsum. Proin eget malesuada magna. Curabitur elit diam, pellentesque id fermentum eget, congue ultricies nibh. Nunc tincidunt sem at diam porta tincidunt. Suspendisse fringilla felis in lectus blandit vulputate. Suspendisse mollis ipsum nec ante congue ut porttitor nunc bibendum. Maecenas mollis sem non justo iaculis vitae consequat augue pulvinar. Sed aliquet malesuada lobortis. Maecenas malesuada eros sed erat ultricies eleifend. Nulla facilisi. Pellentesque pharetra molestie mollis. Aenean venenatis tempus urna, quis convallis quam cursus eget.'
    }, {
      title: 'Tab 3',
      html: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }, {
      title: 'Non Reorderable',
      html: 'I can\'t be moved!',
      reorderable: false
    }, {
      title: 'Tab 4',
      html: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed risus neque, mollis id auctor eget, aliquet vel augue. Sed egestas fermentum tempus. Praesent hendrerit eros et enim laoreet suscipit. Nam diam ante, ullamcorper id congue non, accumsan non augue. Aliquam non libero augue, vitae molestie orci. Nulla ac enim nec velit rhoncus venenatis. Aenean orci quam, eleifend ut aliquam iaculis, pellentesque ut arcu. Suspendisse lobortis commodo magna, vitae sodales orci luctus vestibulum. Cras eget ipsum sapien, vel dapibus metus. Etiam sed augue sit amet massa commodo commodo. Nam pellentesque dapibus ipsum. Proin eget malesuada magna. Curabitur elit diam, pellentesque id fermentum eget, congue ultricies nibh. Nunc tincidunt sem at diam porta tincidunt. Suspendisse fringilla felis in lectus blandit vulputate. Suspendisse mollis ipsum nec ante congue ut porttitor nunc bibendum. Maecenas mollis sem non justo iaculis vitae consequat augue pulvinar. Sed aliquet malesuada lobortis. Maecenas malesuada eros sed erat ultricies eleifend. Nulla facilisi. Pellentesque pharetra molestie mollis. Aenean venenatis tempus urna, quis convallis quam cursus eget.'
    }]
};

//console.log(reorderableTabsPanel.items);

reorderableTabsPanel.items[1].disabled = true;
reorderableTabsPanel.items[0].title = 'New Title';
reorderableTabsPanel.items[0].html = 'The tabs in this example are reorderable. Drag any tab to change the order.';

var number = {
  xtype: 'form-number'
};

var tagField = {
  id: 'tagFieldInTabs',
  xtype: 'form-tag'
};

Ext.define('Application.view.tabs.tabs', {
  extend: 'Ext.tab.Panel',
  xtype: 'framed-tabs',
  requires: [
    'Application.view.tabs.tabsController'
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
      items: [reorderableTabsPanel]
              //  html: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }, {
      title: 'Inactive Tab',
      items: [number]
              // html: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed risus neque, mollis id auctor eget, aliquet vel augue. Sed egestas fermentum tempus. Praesent hendrerit eros et enim laoreet suscipit. Nam diam ante, ullamcorper id congue non, accumsan non augue. Aliquam non libero augue, vitae molestie orci. Nulla ac enim nec velit rhoncus venenatis. Aenean orci quam, eleifend ut aliquam iaculis, pellentesque ut arcu. Suspendisse lobortis commodo magna, vitae sodales orci luctus vestibulum. Cras eget ipsum sapien, vel dapibus metus. Etiam sed augue sit amet massa commodo commodo. Nam pellentesque dapibus ipsum. Proin eget malesuada magna. Curabitur elit diam, pellentesque id fermentum eget, congue ultricies nibh. Nunc tincidunt sem at diam porta tincidunt. Suspendisse fringilla felis in lectus blandit vulputate. Suspendisse mollis ipsum nec ante congue ut porttitor nunc bibendum. Maecenas mollis sem non justo iaculis vitae consequat augue pulvinar. Sed aliquet malesuada lobortis. Maecenas malesuada eros sed erat ultricies eleifend. Nulla facilisi. Pellentesque pharetra molestie mollis. Aenean venenatis tempus urna, quis convallis quam cursus eget.'
    }, {
      title: 'Disabled Tab',
      disabled: true
    }, {
      title: 'Tag',
      items: [tagField]
    }],
  listeners: {
    tabchange: 'onTabChange'
  }
});


