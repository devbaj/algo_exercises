function partition(arr, start, end) {
	var partition = start;
	for (let i = partition; i <= end; i++) {
		if (arr[i] < arr[start]) {
			let temp = arr[partition + 1];
			arr[partition + 1] = arr[i];
			arr[i] = temp;
			partition++;
		}
	}
	let temp = arr[start];
	arr[start] = arr[partition];
	arr[partition] = temp;
	return arr;
}