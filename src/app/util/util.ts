export function convertToInt(value: number) {
	return parseInt(value.toFixed(), 10);
}

export function getFixedDecimal(value: number, decimal: number): number {
	const result: number = parseInt(value.toFixed(decimal), 10);
	return result;
}

export function capitalize(string) {
		return string.charAt(0).toUpperCase() + string.slice(1);
}

export function stringToInt(value: string): number {
    const result: number = parseInt(value, 10);
    return result;
}

export function intToString(value: number): string {
	const result: string = value.toString();
	return result;
}

export function generateOrdinal(value: number): string {
    const j: number = value % 10;
    const k: number = value % 100;
    if (j === 1 && k !== 11) {
        return value + 'st';
    }
    if (j === 2 && k !== 12) {
        return value + 'nd';
    }
    if (j === 3 && k !== 13) {
        return value + 'rd';
    }
    return value + 'th';
  }

export function emptyArray<T>(array: Array<T>): void {
    array.splice(0, array.length);
}