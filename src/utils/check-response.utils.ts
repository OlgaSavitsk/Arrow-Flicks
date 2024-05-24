export const isValueResponse = <T>(value: T) => !!value;

export const isArrayWithItems = <T>(array: T[] | undefined) => array && !!array.length;
