# position-name-sort
Sort array of objects using tuple `['before'|'after', key: string]` (postion name).

## Example
```ts
import { positionNameSort } from 'position-name-sort';
const sort = positionNameSort('name');

const array: any[] = [{ id: 'Yung' }, { id: 'Cory' }];
array.push({ id: 'Darnell', position: ['after', 'Yung'] }); // Or ['before', 'Cory']
array.push({ id: 'Andre', position: ['after', 'Cory'] });

console.log(sort(array).map(n => n.id)); // Yung,Darnell,Cory,Andre
```
