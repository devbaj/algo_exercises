function bubbleSort(arr){
	var sortedidx = arr.length-1;
	var lastSorted = 1;
	for ( let i = 0; i <= arr.length-1; i++ ) {
		for ( let j = 1; j <= sortedidx; j++ ) {
			if ( arr[ j ] < arr[ j-1 ] ) {
				let temp = arr[ j ];
				arr[ j ]  = arr[ j-1 ];
				arr[ j-1 ] = temp;
				lastSorted = j;
			} 
			// else {
				// lastSorted = 1;
			// }
		}
		sortedidx = lastSorted - 1;
		if ( sortedidx == 0 ) { 
			return arr
		}
	}
	return arr;
}

console.log(bubbleSort([5,4,3,2,1]));
console.log(bubbleSort([1,3,3,3,1,7,7,2,2,2,10]));
console.log(bubbleSort([100,1,2,3,4,5,8,20,57,83]))
 // TODO: further optimization for average case and best case