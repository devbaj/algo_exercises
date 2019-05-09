function rotate(arr){
	var new_top = [];
	for (let i in arr){
		new_top.push(arr[i][arr[i].length-1]);
	}
	var new_bottom = [];
	for (let i in arr){
		new_bottom.push(arr[i][0]);
	}
	for (let i in arr){ // this needs work; left and right end up in reverse order
		arr[i][0] = arr[0][i];
		arr[i][arr[i].length-1] = arr[arr[i].length-1][i];
	}
	arr[0] = new_top;
	arr[arr.length-1] = new_bottom;
	return arr;
}

var testArray = [
	[5,5,5],
	[1,0,1],
	[8,8,8]
];
console.log("3x3");
console.log(rotate(testArray));
var test2 = [
	['a','b','c','d'],
	['e','f','g','h'],
	['i','j','k','l'],
	['m','n','o','p']
];
console.log("4x4");
console.log(rotate(test2));
