"use strict";

require("core-js/modules/web.dom-collections.iterator");

const arr = [23, 44, 12];

let myfunc = a => {
  console.log("too:".concat(a));
};

const arr2 = [...arr, 44, 1223];
myfunc(arr2[1]);