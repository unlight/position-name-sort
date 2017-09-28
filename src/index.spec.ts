import { positionNameSort } from './index';
import assert = require('assert');

it('smoke test', () => {
    assert(positionNameSort);
});

it('should sort before', () => {
    const sort = positionNameSort('key');
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

it('should sort after', () => {
    const sort = positionNameSort('key');
    const array = [
        { key: 'a' },
        { key: 'b' },
        { key: 'x', position: ['after', 'a'] }
    ];
    const sorted = sort(array);
    assert.equal(sorted[1].key, 'x');
});


it('fault tollerant', () => {
    const sort = positionNameSort('foo');
    const array = [
        { key: 'a' },
        { key: 'x', position: 'x' }
    ];
    const sorted = sort(array);
    assert(sorted);
});

it('readme exampe', () => {
    const sort = positionNameSort('id');
    const array: any[] = [{ id: 'Yung' }, { id: 'Cory' }];
    array.push({ id: 'Darnell', position: ['after', 'Yung'] }); // Or ['before', 'Cory']
    array.push({ id: 'Andre', position: ['after', 'Cory'] });
    assert.deepEqual(sort(array).map(n => n.id), ['Yung', 'Darnell', 'Cory', 'Andre']);
});
