export class GenericResponse<T> {
    msg: string;
    data: T;

    constructor(msg: string, data: T) {
        this.msg = msg;
        this.data = data;
    }
}

export class GenericElementOrdering<T> {
    id: number;
    element: T;

    constructor(id: number, element: T) {
        this.id = id;
        this.element = element;
    }
}

export class GenericPairing<U, V> {
    key: U;
    value: V;
}

export function convertGenericElementListToMap<T>(genericElementOrderingArray: GenericElementOrdering<T>[]): Map<number, T> {
    const intMap = new Map<number, T>();
    for (const genericElement of genericElementOrderingArray) {
        intMap.set(genericElement.id, genericElement.element);
    }

    return intMap;
}

export function convertGenericPairingListToMap<U, V>(genericPairingArray: GenericPairing<U, V>[]): Map<U, V> {
    const result = new Map<U, V>();
    for (const genericPair of genericPairingArray) {
        result.set(genericPair.key, genericPair.value);
    }

    return result;
}