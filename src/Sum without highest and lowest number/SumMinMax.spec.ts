//https://www.codewars.com/kata/sum-without-highest-and-lowest-number/train/typescript

import {assert} from "chai";

export function sumArray(array:number[]) : number {
    if(array == null || array.length <= 1)
        return 0;

    var min:number = Math.min(...array);
    var max:number = Math.max(...array);

    delete array[array.indexOf(min)];
    delete array[array.indexOf(max)];

    var result: number = 0;

    array.forEach(element => {
        result += element;
    });

    return result;
  }

describe("KataTest", function(){
  it("BasicTests", function(){
    assert.deepEqual(sumArray([ 6, 2, 1, 8, 10 ]), 16);
    assert.deepEqual(sumArray([ 6, 0, 1, 10, 10 ]), 17);
  });
});