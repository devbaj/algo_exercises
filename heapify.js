function recMinHeapify(arr,i=0) {
	if (i * 2 + 1 >= arr.length) { return arr; }
	if ( arr[i*2+1] < arr[i] || arr[i*2+2] < arr[i]) {
		let target;
		if (arr[i*2+1] < arr[i*2+2]) {
			target = i*2+1;
			swap(arr, i, target);
		} else { 
			target = i*2+2;
			swap(arr, i, target);
		}
	}
	recMinHeapify(arr,i*2+1);
	recMinHeapify(arr,i*2+2);
	return arr;
}

function swap(arr, from, to) {
	var temp = arr[to];
	arr[to] = arr[from];
	arr[from] = temp;
}

console.log(recMinHeapify([5,1,2]));
console.log(recMinHeapify([1,2,3]));
console.log(recMinHeapify([10,3,4,1,7,9,21]));