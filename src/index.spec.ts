import { createSort } from './index';
import assert = require('assert');

it('smoke test', () => {
    assert(createSort);
});

it('should sort before', () => {
    const sort = createSort('key');
    const array = [
        { key: 'a' },
        { key: 'b' },
        { key: 'c' },
        { key: 'd' },
        { key: 'x', position: ['before', 'b'] }
    ];
    const sorted = sort(array);
    assert.equal(sorted[1].key, 'x');
    const [last] = sorted.slice(-1);
    assert.equal(array.length, sorted.length);
});
