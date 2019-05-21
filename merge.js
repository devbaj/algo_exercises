function merge(arr1, arr2) {
	if (arr1.length < 1) {return arr2}
	else if (arr2.length < 1) {return arr1}
	var idx1 = 0;
	var idx2 = 0;
	var newarr = [];
	while (idx1 < arr1.length && idx2 < arr2.length) {
		if (arr1[idx1] < arr2[idx2]) {
			newarr.push(arr1[idx1]);
			idx1++;
		} else {
			newarr.push(arr2[idx2]);
			idx2++
		}
	}
	if (idx1 <= arr1.length - 1) {
		for (let k = idx1; k < arr1.length; k++) { newarr.push(arr1[k]) }
	} else {
		for (let k = idx2; k < arr2.length; k++) { newarr.push(arr2[k]) }
	}
	return newarr;
}

function sort(arr) {
	if (arr.length <= 1) { return arr }
	var mid = Math.floor(arr.length/2);
	return merge(sort(arr.slice(0,mid)), sort(arr.slice(mid, arr.length)))
}

// console.log(merge([2,3,10],[1,5,20]));
// console.log(merge([1,5],[2,4,20,106]));
// console.log(merge([],[2,10,20]));
// console.log(merge([4,5,6],[]));
// console.log(merge([1,2,3],[101,102,103]));
// console.log(merge([1,5,10],[2,5,11]));
// console.log(merge([1,3,5],[2,4,6]));
console.log(sort([5,6,1,8,2,3]));
console.log(sort([]));
console.log(sort([101, 102, 103, 1, 2, 3]));
console.log(sort([3,1,9]));
console.log(sort([5,1,1,10]));

var testarray = [];
for( let i = 0; i < 10000; i++){
	testarray.push(Math.floor(Math.random()*100));
}
console.log(testarray);
console.log(sort(testarray));