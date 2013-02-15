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
 * @type {string}
 * @private
 */
com.karatebancho.Kgrid.BODY_CLASS_NAME_ = goog.getCssName('kgrid-body');


/**
 * @override
 */
com.karatebancho.Kgrid.prototype.createDom = function() {
  var dh = this.getDomHelper()
  var el = dh.createDom("div",{class: com.karatebancho.Kgrid.CLASS_NAME_}),hds = [];
  var bodyEl = dh.createDom("div", { class: com.karatebancho.Kgrid.BODY_CLASS_NAME_});
  //ヘッダを格納するテーブル
  this.header_ = dh.createDom('table');
  //データを格納するテーブル
  this.bodyTbl_ = dh.createDom('table');
  goog.array.forEach(this.headers_, function(el, ind, arr) {
      hds.push(dh.createDom('th', undefined, el.label));
    }, this);
  this.header_.appendChild(dh.createDom('tr', undefined, hds));
  bodyEl.appendChild(this.bodyTbl_);
  el.appendChild(this.header_);
  el.appendChild(bodyEl);

  this.decorateInternal(el);
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
  var sizeList = this.size();
  goog.array.forEach(this.headers_, function(el, ind, arr) {
      values.push(dh.createDom('td', {style: "width:" + sizeList[ind]}, row[el.name]));
    },this);
  this.bodyTbl_.appendChild(dh.createDom('tr', undefined, values));
};

/**
 * @return {array.<number>} ヘッダの幅のリスト.
 */
com.karatebancho.Kgrid.prototype.size = function() {
  var dh = this.getDomHelper();
  var sizeList = [];
  goog.array.forEach(dh.getElementsByTagNameAndClass('th',null,this.header_),
    function(val,ind){
      sizeList.push(val['scrollWidth'] - 2 /*とりあえず...*/);
    });
  return sizeList;
};

