
var articleParas = document.querySelectorAll('#storyContent p');

var lastP = articleParas[articleParas.length -1];

var character = 0;
var pIndex = 0;
var currentP = articleParas[pIndex];
var phrase = 'I will not block ads. ';

function getBartCharacter(position) {
	var pos = position % phrase.length;
	return phrase[pos];
}

function isLastBartCharacter(position) {
	var pos = position % phrase.length;
	return pos === phrase.length - 1;
}

function setCharAt(str,index,chr) {
	if (index > str.length-1) return str + chr;
	return str.substr(0,index) + chr + str.substr(index+1);
}

function replacer () {
	setTimeout(function(){
		if (currentP === lastP && character === currentP.textContent.length && isLastBartCharacter(character)) {
			return;
		}

		if (character >= currentP.textContent.length && isLastBartCharacter(character)) {
			pIndex++;
			currentP = articleParas[pIndex];
			character = 0;
		}
		requestAnimationFrame(() => {
			var replacementText = currentP.textContent;
			currentP.textContent = setCharAt(replacementText, character, getBartCharacter(character));
			character++;
			replacer();
		})
	}, 50)
}

replacer()