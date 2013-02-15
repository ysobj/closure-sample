goog.provide('com.karatebancho.Apps');
goog.require('com.karatebancho.Kgrid');

com.karatebancho.Apps = function(){
  var grid = new com.karatebancho.Kgrid([
      {label: '顧客番号', name: 'abc'},
      {label: '顧客姓', name: 'def'},
      {label: '顧客名', name: 'ghi'}]);
  grid.render();
};
