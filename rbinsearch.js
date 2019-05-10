function rBinSearch(arr, num, first=true){
	if (first) {
		for (let i in arr) {
			if (typeof arr[i] != 'number') {
				console.log("invalid array");
				return;
			}
		}
		first = false;
	}
	if (arr.length == 0) {
		return false;
	}
	var mid = Math.floor(arr.length/2);
	if(arr[mid] == num){
		return true;
	}
	var shorty = [];
	if (arr[mid] > num) {
		shorty = arr.slice(0, mid);
		return rBinSearch(shorty, num, first);
	}
	else if (arr[mid] < num) {
		shorty = arr.slice(mid+1, arr.length);
		return rBinSearch(shorty, num, first);
	}
	return false;
}

var arr = [2, 8, 12, 25];
console.log(rBinSearch(arr,8));