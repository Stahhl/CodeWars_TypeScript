// <reference path="/runner/typings/mocha/index.d.ts" />
// <reference path="/runner/typings/chai/index.d.ts" />
import {order} from "./YourOrderPlease"; 
import {assert} from "chai";

describe("solution", function(){
  it("basicTests", function(){
    assert.equal(order("is2 Thi1s T4est 3a"), "Thi1s is2 3a T4est");
    assert.equal(order("4of Fo1r pe6ople g3ood th5e the2"), "Fo1r the2 g3ood 4of th5e pe6ople");
    assert.equal(order(""), "");
  });
});