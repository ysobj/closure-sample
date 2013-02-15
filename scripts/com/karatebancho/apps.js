goog.provide('com.karatebancho.Apps');
goog.require('com.karatebancho.Kgrid');
goog.require('goog.dom');
goog.require('goog.events');

com.karatebancho.Apps = function(){
  var dh = goog.dom.getDomHelper();
  console.log(dh);
  var grid = new com.karatebancho.Kgrid([
      {label: '顧客番号', name: 'abc'},
      {label: '顧客姓', name: 'def'},
      {label: '顧客名', name: 'ghi'}]);
  grid.render();
  goog.events.listen(dh.getElement('btn2'),
    goog.events.EventType.CLICK,
    function(e){
      grid.size();
    }
  );
  goog.events.listen(dh.getElement('btn'),
    goog.events.EventType.CLICK,
    function(e){
      var row = {
        abc: 'TEST',
        def: 'GGGG',
        ghi: 'QQQQ'
      };
      grid.addRow(row);
    });
};
