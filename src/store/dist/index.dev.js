"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.persistor = void 0;

var _redux = require("redux");

var _reducer = _interopRequireDefault(require("./reducer"));

var _reduxPersist = require("redux-persist");

var _storage = _interopRequireDefault(require("redux-persist/lib/storage"));

var _autoMergeLevel = _interopRequireDefault(require("redux-persist/lib/stateReconciler/autoMergeLevel2"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var persistConfig = {
  key: 'root',
  storage: _storage["default"],
  stateReconciler: _autoMergeLevel["default"]
};
var myPersistReducer = (0, _reduxPersist.persistReducer)(persistConfig, _reducer["default"]);
var store = (0, _redux.createStore)(myPersistReducer);
var persistor = (0, _reduxPersist.persistStore)(store);
exports.persistor = persistor;
var _default = store;
exports["default"] = _default;