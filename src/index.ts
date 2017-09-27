export function createSort(id: string) {
    return (data: any[]): any[] => {
        const array: any[] = [...data];
        const withPositions = array.filter(item => item.position);
        withPositions.forEach(positioned => {
            const index = array.findIndex(item => item[id] === positioned.position[1]);
            if (index !== -1) {
                if (positioned.position[0] === 'after') {
                    array.splice(index, 0, positioned);
                } else if (positioned.position[0] === 'before') {
                    if (index === 0) {
                        array.unshift(positioned);
                    } else {
                        array.splice(index, 0, positioned);
                    }
                }
            }
        });
        return uniqBy(array, o => o[id]);
    };
}

const uniqBy = (array, iteratee) => array.filter((value, index, self) => index === self.findIndex(other => iteratee(other) === iteratee(value)));
