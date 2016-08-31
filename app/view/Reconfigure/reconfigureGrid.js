/* global Ext */

Ext.define('Application.view.Reconfigure.reconfigureGrid', {
  extend: 'Ext.container.Container',
  requires: [
    'Ext.grid.*',
    'Ext.layout.container.HBox',
    'Ext.layout.container.VBox',
    'Application.view.Reconfigure.EmployeeModel',
    'Application.view.Reconfigure.OfficeModel'
  ],
  xtype: 'reconfigure-grid',
  layout: {
    type: 'vbox',
    align: 'stretch'
  },
  width: 500,
  height: 330,
  lastNames: ['Jones', 'Smith', 'Lee', 'Wilson', 'Black', 'Williams', 'Lewis', 'Johnson', 'Foot', 'Little', 'Vee', 'Train', 'Hot', 'Mutt'],
  firstNames: ['Fred', 'Julie', 'Bill', 'Ted', 'Jack', 'John', 'Mark', 'Mike', 'Chris', 'Bob', 'Travis', 'Kelly', 'Sara'],
  cities: ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Philadelphia', 'Phoenix', 'San Antonio', 'San Diego', 'Dallas', 'San Jose'],
  departments: ['Development', 'QA', 'Marketing', 'Accounting', 'Sales'],
  initComponent: function() {
    Ext.apply(this, {
      items: [{
          xtype: 'container',
          layout: 'hbox',
          defaultType: 'button',
          items: [{
              itemId: 'showOffices',
              text: 'Show Offices',
              margin: '5 2 0 2',
              scope: this,
              handler: this.onShowOfficesClick
            }, {
              itemId: 'showEmployees',
              margin: '5 0 0 10',
              text: 'Show Employees',
              scope: this,
              handler: this.onShowEmployeesClick
            }]
        }, {
          margin: '10 0 0 0',
          xtype: 'grid',
          flex: 1,
          columns: [],
          viewConfig: {
            emptyText: 'Click a button to show a dataset',
            deferEmptyText: false
          }
        }]
    });
    this.callParent();
  },
  onShowOfficesClick: function() {
    var grid = this.down('grid');
    Ext.suspendLayouts();
    grid.setTitle('Offices');
    grid.reconfigure(this.createOfficeStore(), [{
        flex: 1,
        text: 'City',
        dataIndex: 'city'
      }, {
        text: 'Total Employess',
        dataIndex: 'totalEmployees',
        width: 140
      }, {
        text: 'Manager',
        dataIndex: 'manager',
        width: 120
      }]);
    this.down('#showEmployees').enable();
    this.down('#showOffices').disable();
    Ext.resumeLayouts(true);
  },
  onShowEmployeesClick: function() {
    var grid = this.down('grid');
    Ext.suspendLayouts();
    grid.setTitle('Employees');
    grid.reconfigure(this.createEmployeeStore(), [{
        text: 'First Name',
        dataIndex: 'forename'
      }, {
        text: 'Last Name',
        dataIndex: 'surname'
      }, {
        width: 130,
        text: 'Employee  No.',
        dataIndex: 'employeeNo'
      }, {
        flex: 1,
        text: 'Department',
        dataIndex: 'department'
      }]);
    this.down('#showOffices').enable();
    this.down('#showEmployees').disable();
    Ext.resumeLayouts(true);
  },
  createEmployeeStore: function() {
    var data = [],
            i,
            usedNames = {},
            name;

    for(i = 0; i < 20; ++i) {
      name = this.getUniqueName(usedNames);
      data.push({
        forename: name[0],
        surname: name[1],
        employeeNo: this.getEmployeeNo(),
        department: this.getDepartment()
      });
    }
    return new Ext.data.Store({
      model: Application.view.Reconfigure.EmployeeModel,
      data: data
    });
  },
  createOfficeStore: function() {
    var data = [],
            i,
            usedNames = {},
            usedCities = {};

    for(i = 0; i < 7; ++i) {
      data.push({
        city: this.getUniqueCity(usedCities),
        manager: this.getUniqueName(usedNames).join(' '),
        totalEmployees: Ext.Number.randomInt(10, 25)
      });
    }
    return new Ext.data.Store({
      model: Application.view.Reconfigure.OfficeModel,
      data: data
    });
  },
  // Fake data generation functions
  generateName: function() {
    var lasts = this.lastNames,
            firsts = this.firstNames,
            lastLen = lasts.length,
            firstLen = firsts.length,
            getRandomInt = Ext.Number.randomInt,
            first = firsts[getRandomInt(0, firstLen - 1)],
            last = lasts[getRandomInt(0, lastLen - 1)];

    return [first, last];
  },
  getUniqueName: function(used){
    var name = this.generateName(),
            key = name[0] + name[1];
    
    if(used[key]){
      return this.getUniqueName(used);
    }
    
    used[key] = true;
    return name;
  },
  getCity: function(){
    var cities = this.cities,
            len = cities.length;
    
    return cities[Ext.Number.randomInt(0, len - 1)];
  },
  getUniqueCity: function(used){
    var city = this.getCity();
    if(used[city]){
      return this.getUniqueCity(used);
    }
    
    used[city] = true;
    return city;
  },
  getEmployeeNo: function(){
    var out = '',
            i;
    
    for(i = 0; i < 6; ++i){
      out += Ext.Number.randomInt(0, 7);
    }
    return out;
  },
  getDepartment: function(){
    var departments = this.departments,
            len = departments.length;
    
    return departments[Ext.Number.randomInt(0, len - 1)];
  }
});
