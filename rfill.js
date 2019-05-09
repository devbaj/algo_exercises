function rFill(canvas, x, y, colorNum) {
	var original = canvas[y][x];
	canvas[y][x] = colorNum;
	if(x-1 >= 0){
		if (canvas[y][x-1] == original) {
			rFill(canvas, x-1, y, colorNum);
		}
	}
	if (x+1 < canvas[y].length){
		if (canvas[y][x+1] == original) {
			rFill(canvas, x+1, y, colorNum);
		}
	}
	if (y-1 >= 0){
		if (canvas[y-1][x] == original) {
			rFill(canvas, x, y-1, colorNum);
		}
	}
	if (y+1 < canvas.length) {
		if (canvas[y+1][x] == original) {
			rFill(canvas, x, y+1, colorNum);
		}
	}
	return canvas;
}

var canvas = [
	[0,1,2,5,3],
	[1,1,1,1,3],
	[3,2,2,3,3],
	[1,2,2,0,1],
	[1,0,0,2,3]
]
console.log(canvas);
console.log("changed:");
console.log(rFill(canvas, 4, 0, 0));