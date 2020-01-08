//https://www.codewars.com/kata/dna-to-rna-conversion/train/typescript

import {assert} from "chai";

export function DNAtoRNA(dna: string): string {
    return dna.split('T').join('U');
  }

describe("Sample Test Cases", function(){
  it("Should return a string", function() {
    assert.equal(DNAtoRNA("TTTT"), "UUUU");
    assert.equal(DNAtoRNA("GCAT"), "GCAU");
    assert.equal(DNAtoRNA("GACCGCCGCC"), "GACCGCCGCC");
  });
});