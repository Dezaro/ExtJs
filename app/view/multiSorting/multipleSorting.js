/* global Ext */

Ext.define('Application.view.multiSorting.multipleSorting', {
  extend: 'Ext.grid.Panel',
  xtype: 'multi-sort-grid',
  title: 'Multiple sorting Grid',
  bbar: {
    items: [{
        xtype: 'component',
        itemId: 'order'
      }]
  },
  columns: [
    {
      text: 'Name',
      flex: 1,
      dataIndex: 'name'
    }, {
      text: 'Rating',
      width: 125,
      dataIndex: 'rating'
    }, {
      text: 'Salary',
      width: 125,
      dataIndex: 'salary',
      align: 'right',
      formatter: 'usMoney'
    }
  ],
  height: 350,
  width: 600,
  multiColumnSort: true,
  initComponent: function() {
    var me = this;

    me.store = new Ext.data.Store({
      fields: [
        {name: 'rating', type: 'int'},
        {name: 'salary', type: 'float'},
        {name: 'name'}
      ],
      proxy: {
        type: 'memory',
        data: this.createFakeData(25),
        reader: {
          type: 'array'
        }
      },
      autoLoad: true,
      sorters: [{
          property: 'rating',
          direction: 'DESC'
        }, 'salary'],
      listeners: {
        sort: me.updateSortTitle,
        scope: me
      }
    });

    me.callParent();
    me.updateSortTitle();
  },
  updateSortTitle: function() {
    var sortDetail = [];
    
    this.store.getSorters().each(function(sorter){
      sortDetail.push(sorter.getProperty() + ' ' + sorter.getDirection());
    });
    this.down('#order').update('Sorted By: <span style="color:green;">' + sortDetail.join(', ') + '</span>');
  },
  createFakeData: function(count){
    var firstNames = ['Don', 'Phil', 'Nige', 'Evan', 'Aaron', 'Abe', 'Jamie', 'Doug', 'Craig', 'Mike'],
        lastNames = ['Griffin', 'Guerrant', 'White', 'Trimboli', 'Conran', 'Elias', 'Avins', 'Hendricks', 'Gering', 'Estes'],
        ratings = [1, 2, 3, 4, 5],
        salaries = [85000, 100000, 175000, 162000, 300000];

  var data = [];
  for(var i = 0; i < (count || 25); i++){
    var ratingId = Math.floor(Math.random() * ratings.length),
        salaryId = Math.floor(Math.random() * salaries.length),
        firstNameId = Math.floor(Math.random() * firstNames.length),
        lastNameId = Math.floor(Math.random() * lastNames.length),
        
        rating = ratings[ratingId],
        salary = salaries[salaryId],
        name = Ext.String.format("{0} {1}", firstNames[firstNameId], lastNames[lastNameId]);
   
   data.push([rating, salary, name]);
  }
  return data;
  }
});