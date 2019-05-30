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

function sort(arr) {
	var start = null;
	var end = null;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > arr[i + 1] && start === null) {
			start = i;
			end = i + 1;
		}
		if (arr[i] > arr[i + 1] && start != null) {
			end = i + 1;
		}
	}
	if (start === null && end === null) { return arr }
	else { return sort(partition(arr, start, end)); }
}

console.log(sort([5,2,3,18,9,4,12]));
console.log(sort([5,4,3,2,1]));