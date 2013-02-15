goog.provide('com.karatebancho.Kgrid');

goog.require('goog.array');
goog.require('goog.object');
goog.require('goog.style');
goog.require('goog.ui.Component');



/**
 *
 * グリッドコントロールのコンポーネントです
 *
 * @extends {goog.ui.Component}
 * @constructor
 * @param {Array} headers ヘッダ.
 * @param {Object=} opt_contents コンテンツ.
 * @param {Object=} opt_options オプション.
 * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
 */
com.karatebancho.Kgrid = function(
  headers, opt_contents, opt_options, opt_domHelper) {
  goog.ui.Component.call(this, opt_domHelper);
  this.headers_ = headers;
  this.contents_ = opt_contents || [];
  this.options_ = opt_options || [];
};
goog.inherits(com.karatebancho.Kgrid, goog.ui.Component);


/**
 * @type {string}
 * @private
 */
com.karatebancho.Kgrid.CLASS_NAME_ = goog.getCssName('kgrid');


/**
 * @override
 */
com.karatebancho.Kgrid.prototype.createDom = function() {
  var dh = this.getDomHelper()
  this.tbl_ = dh.createDom('table'), hds = [];
  goog.array.forEach(this.headers_, function(el, ind, arr) {
      hds.push(dh.createDom('th', undefined, el.label));
    }, this);
  this.tbl_.appendChild(dh.createDom('tr', undefined, hds));

  this.decorateInternal(this.tbl_);
};


/**
 * @override
 */
com.karatebancho.Kgrid.prototype.enterDocument = function() {
  goog.base(this, 'enterDocument');
};


/**
 *  @param {Array} rows 設定する行.
 */
com.karatebancho.Kgrid.prototype.setRows = function(rows) {
};

/**
 * @param {Object} row 追加する行.
 */
com.karatebancho.Kgrid.prototype.addRow = function(row) {
  var dh = this.getDomHelper();
  var values = [];
  goog.array.forEach(this.headers_, function(el, ind, arr) {
      values.push(dh.createDom('td', undefined, row[el.name]));
    },this);
};

