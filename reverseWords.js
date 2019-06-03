function reverse(word) {
	if (word.length <= 1) { return word; }
	var newString = ""
	var mid= Math.floor(word.length/2)
	var front;
	var back;
	for (let i = word.length - 1; i >= 0; i--) {
		newString += word[i];
	}
	return newString;
}

function flipIt(phrase) {
	if (phrase.length < 1) { return phrase;}
	var words = [];
	var startIdx = 0;
	var endIdx = 0;
	var i = 0;
	console.log(phrase);
	while ( i < phrase.length) {
		// console.log('entered outer loop');
		while (phrase[i] != " " && i < phrase.length) {
			// console.log(phrase[i]);
			i++;
		}
		endIdx = i;
		words.push(phrase.substring(startIdx, endIdx));
		i++;
		startIdx = i;
		endIdx = i;
	}
	var esarhp = "";
	for (var word of words) {
		word = reverse(word);
		esarhp += word + " ";
	}
	return esarhp;
}

console.log(flipIt("harder better faster stronger"));