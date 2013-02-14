goog.provide('com.karatebancho.Kgrid');

goog.require('goog.ui.Component');
goog.require('goog.dom');
/**
 * @constructor
 */
com.karatebancho.Kgrid = function(){
		goog.base(this);
};
goog.inherits(com.karatebancho.Kgrid, goog.ui.Component);

com.karatebancho.Kgrid.prototype.createDom = function(){
		alert('hoge');
		this.setElementInternal(goog.dom.htmlToDocumentFragment("<table></table>"));
};
