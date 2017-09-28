export function positionNameSort(id: string) {
    return (items: any[]): any[] => {
        const result = [...items];
        result.filter(item => item.position)
            .forEach(positioned => {
                const index = result.findIndex(item => item[id] === positioned.position[1]);
                if (index !== -1) {
                    if (positioned.position[0] === 'after') {
                        result.splice(index + 1, 0, positioned);
                    } else if (positioned.position[0] === 'before') {
                        if (index === 0) {
                            result.unshift(positioned);
                        } else {
                            result.splice(index, 0, positioned);
                        }
                    }
                }
            });
        return uniqBy(result, o => o[id]);
    };
}

const uniqBy = (array, iteratee) => array.filter((value, index, self) => index === self.findIndex(other => iteratee(other) === iteratee(value)));
