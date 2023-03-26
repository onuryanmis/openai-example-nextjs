export const getOptions = (items: String[]) => {
    return items.map(item => ({label: item, value: item}));
}

export const getValues = (items) => {
    const values: string[] = [];

    items.forEach(item => {
        values.push(item.value);
    });

    return values;
}