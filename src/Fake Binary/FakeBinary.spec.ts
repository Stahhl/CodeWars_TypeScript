//https://www.codewars.com/kata/fake-binary/train/typescript
import {assert} from "chai";

export const fakeBin = (x:string):string => {
    var result:string = '';

    for (let i = 0; i < x.length; i++) {
        var n:number = parseInt(x[i]);
        result += n >= 5 ? '1' : '0';
    }

    return result;
  };

describe("Example tests", function() {
  it("should work for simple cases", function() {
    assert.equal(fakeBin('45385593107843568'), '01011110001100111');
    assert.equal(fakeBin('509321967506747'), '101000111101101'); 
    assert.equal(fakeBin('366058562030849490134388085'), '011011110000101010000011011'); 
  });
});