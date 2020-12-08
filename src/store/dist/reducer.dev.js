"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _actionTypes = require("./actionTypes");

var defaultState = {
  movieId: 0,
  movies: [],
  keywords: []
};

var _default = function _default() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  if (action.type === _actionTypes.GET_SIMILAR_MOVIES) {
    var newState = JSON.parse(JSON.stringify(state));
    newState.movieId = action.value;
    return newState;
  }

  if (action.type === _actionTypes.GET_TOPRATED_MOVIES) {
    var _newState = JSON.parse(JSON.stringify(state));

    _newState.movieId = action.value;
    return _newState;
  }

  if (action.type === _actionTypes.GET_MOVIE_KEYWORDS) {
    var _newState2 = JSON.parse(JSON.stringify(state));

    _newState2.movieId = action.value;
    return _newState2;
  }

  return state;
};

exports["default"] = _default;