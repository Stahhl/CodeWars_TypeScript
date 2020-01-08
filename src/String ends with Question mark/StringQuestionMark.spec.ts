//https://www.codewars.com/kata/string-ends-with/train/typescript
import {assert} from "chai";

export function solution(str: string, ending: string): boolean {
    var end:string = str.substr(str.length - ending.length, ending.length);

    return end == ending ? true : false;
    //return str.endsWith(ending);
  }

describe("Sample Test Cases", function(){
  it("Should return true or false", function() {
    assert.equal(solution('abcde', 'cde'), true);
    assert.equal(solution('abcde', 'abc'), false);
    assert.equal(solution('abc', ''), true);
  });
});