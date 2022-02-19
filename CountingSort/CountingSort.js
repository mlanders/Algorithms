function countingSort(arr) {
	let length = 100;
	arr.forEach((item) => {
		if (item > length) {
			length = item;
		}
	});

	let array = Array(length).fill(0);
	arr.forEach((value, index) => {
		if (array[value] === 0) {
			array[value] = 1;
		} else {
			array[value] = array[value] + 1;
		}
	});

	return array;
}

export default countingSort;
