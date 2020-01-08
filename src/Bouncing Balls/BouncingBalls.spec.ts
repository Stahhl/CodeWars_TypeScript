//https://www.codewars.com/kata/bouncing-balls/train/typescript
import { assert } from "chai";

export function bouncingBall(h: number, bounce: number, window: number): number {
    if(h <= 0 || window >= h || bounce <= 0 ||  bounce >= 1)
        return -1;

    var result: number = 0;

    while(h > window)
    {
        h = h * bounce;

        if(h > window)
            result += 2;
        else
            result += 1;
    }

    return result;
  }

describe("Fixed Tests sumFracts", function() {
  it("Basic tests", function() {
    assert.equal(bouncingBall(3.0, 0.66, 1.5), 3);
    assert.strictEqual(bouncingBall(30.0, 0.66, 1.5), 15);
    assert.strictEqual(bouncingBall(30, 0.75, 1.5), 21);
    assert.strictEqual(bouncingBall(30, 0.4, 10), 3);
  });
});