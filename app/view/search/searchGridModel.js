/* global Ext */

Ext.define('Application.view.search.searchGridModel', {
    extend: 'Application.model.Base',
    fields: [
        'name',
        'price',
        'change',
        'pctChange',
        'lastChange'
    ]
});

