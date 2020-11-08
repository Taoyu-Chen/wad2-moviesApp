"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.excerpt = excerpt;

var _lodash = _interopRequireDefault(require("lodash"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function excerpt(string) {
  var truncate = _lodash["default"].truncate;
  return truncate(string, {
    length: 200,
    // maximum 200 characters
    separator: /,?\.* +/ // separate by spaces, including preceding commas and periods

  });
}