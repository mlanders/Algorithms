function quickSort(arr) {
	const left = [];
	const right = [];
	const center = [];
	const pivot = arr[0];

	center.push(pivot);
	let current = 1;
	while (current < arr.length) {
		if (arr[current] < pivot) {
			left.push(arr[current]);
		} else if (arr[current] > pivot) {
			right.push(arr[current]);
		} else {
			center.push(arr.current);
		}
		current++;
	}
	return [left, center, right].flat();
}

export default quickSort;
