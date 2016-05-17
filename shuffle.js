function shuffle(array) {
	var currentIndex = array.length;
	var temporaryValue;
	var randomIndex;

	while (currentIndex !== 0) {

	// Pick a remaining element...
	randomIndex = Math.floor(Math.random() * currentIndex);
	currentIndex -= 1;

	// And swap it with the current element.
	temporaryValue = array[currentIndex];
	array[currentIndex] = array[randomIndex];
	array[randomIndex] = temporaryValue;
	}
	return array.join('');
}

const articleParent = document.querySelector('#storyContent');
const articleParas = Array.from(document.querySelectorAll('#storyContent p'))
	.filter(el => el.parentNode === articleParent);

for(var x = 0; x < articleParas.length; x += 1){
	
	var thisParagraph = articleParas[x];
	
	if(thisParagraph.parentNode === articleParent){
		
		var children = thisParagraph.childNodes;
		
		for(var y = 0; y < children.length; y += 1){
			
			var thisChild = children[y];
			var words = thisChild.textContent.split(' ');
			
			var newWords = [];
			
			for(var z = 0; z < words.length; z += 1){
				
				var word = words[z];
				var letters = word.split('');
				
				var allNotNaN = true;
				
				for(var xx = 0; xx < letters.length; xx += 1){
					if(!isNaN(parseInt(letters[xx], 10))){
						allNotNaN = false;
					}
				}
				
				if (letters.length > 3 && allNotNaN) {
					
					var specialChars = ["“", "”", ".", ";", ":", "!", "£", "$", "€", "-"];
					var firstChars = letters.shift();
					if (specialChars.indexOf(firstChars) > -1) {
						firstChars = firstChars + letters.shift();
					}
					var lastChars = letters.pop();
					if (specialChars.includes(lastChars)) {
						lastChars = letters.pop() + lastChars;
					}
					var shuffledChars = letters.length > 1 ? shuffle(letters) : letters;
					word = firstChars + shuffledChars + lastChars;
					
					newWords.push(word);
					
				} else {
					newWords.push(word);
				}
				
				var backTogether = newWords.join(' ');
				
				thisChild.textContent = backTogether;
				
			}
			
		}
		
	}
	
}