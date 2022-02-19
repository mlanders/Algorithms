function insertionSort(n, arr) {
	// Loop through all values starting with index 1
	for (let i = 1; i < n; i++) {
		// Set current value
		let current = arr[i];

		// Define index of the last value in the sorted array which should always be one index to the left of the current index
		let lastInSorted = i - 1;

		// While the last index in the sorted array is greater than 0 & the current value is less then the last value in the sorted array
		while (lastInSorted > -1 && current < arr[lastInSorted]) {
			// Move the last value to the right one index
			arr[lastInSorted + 1] = arr[lastInSorted];
			// Move the last in the sorted arra index one down
			lastInSorted--;
		}
		arr[lastInSorted + 1] = current;
		console.log(arr.join(" "));
	}
}

export default insertionSort;
