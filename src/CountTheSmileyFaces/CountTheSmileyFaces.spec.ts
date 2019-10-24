import { countSmileys } from './CountTheSmileyFaces';
import { assert } from 'chai';

describe("CountTheSmileyFaces", function() {
  it("test", () => {
    assert.equal(countSmileys([]), 0);
    assert.equal(countSmileys([':D',':~)',';~D',':)']), 4);
    assert.equal(countSmileys([':)',':(',':D',':O',':;']), 2);
    assert.equal(countSmileys([';]', ':[', ';*', ':$', ';-D']), 1);
    assert.equal(countSmileys([":)", ":-D", ":--D", ":xD"]), 2);
  });
});