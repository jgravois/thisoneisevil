(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global.Bad = global.Bad || {})));
}(this, function (exports) { 'use strict';

  function theresYourProblem () {
    console.log('someone switched this thing to evil')
  }

  var Bad$1 = Bad;

  exports.theresYourProblem = theresYourProblem;
  exports['default'] = Bad$1;

}));