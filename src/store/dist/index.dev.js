"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useStore = void 0;

var _react = require("react");

var _counter = require("./counter.Store");

var _list = require("./list.Store");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RootStore = function RootStore() {
  _classCallCheck(this, RootStore);

  this.counterStore = new _counter.CounterStore();
  this.listStore = new _list.ListStore();
};

var rootStore = new RootStore();
var context = (0, _react.createContext)(rootStore);

var useStore = function useStore() {
  return (0, _react.useContext)(context);
};

exports.useStore = useStore;