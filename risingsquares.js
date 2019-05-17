function rRiseSq(num, count=0, up=true){
	if (num <= 0){
		return arr;
	}
	if (up == true) {
		if (count == num || count == num-1){
			console.log( (rRiseSq(num, num, false)).push((count+1)^2));
		}
		else {
			console.log( (rRiseSq(num, count+2, true)).push((count+1)^2));
		}
	}
	else {
		if (count < 2){
			var arr = [2];
			return arr;
		}
		else {
			console.log( (rRiseSq(num, count-2, false)).push(count-2));
		}
	}
}

console.log(rRiseSq(8));

// ! this don't work