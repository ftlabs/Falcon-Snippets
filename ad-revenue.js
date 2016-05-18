function count (string) {
	string = string.replace(/<\/?[a-z][^>]*>/gi, '')
	string = string.replace(/[\u200B]+/, '')

	return string.replace(/['";:,.?¿\-!¡]+/g, '').split(' ')
}

var articleParas = Array.prototype.slice.call(document.querySelectorAll('#storyContent p'));

var totalTextLength = articleParas.reduce(function(p, n) { 
	return p + count(n.textContent).length;
}, 0);
var percentOfRevenueGatheredFromAds = 0.5;
var newTextLength = Math.floor(totalTextLength * percentOfRevenueGatheredFromAds);

for (var i = 0; i < newTextLength; i += 1) {
	var p = articleParas[Math.random() * articleParas.length | 0];
	var replacementText = p.textContent;
	var words = count(replacementText)
	var wordToRemove = words[Math.random() * words.length | 0];

	p.textContent = replacementText.replace(new RegExp("\\b" + wordToRemove + "\\b"), new Array(wordToRemove.length).fill('_').join(''));
}