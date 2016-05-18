var articleParas = document.querySelectorAll('#storyContent p');

for(var x = 0; x < articleParas.length; x += 1){
	
	var p = articleParas[x];
		
	var childNodes = p.childNodes;
	
	for(var y = 0; y < childNodes.length; y += 1){
		var child = childNodes[y];
		child.textContent = child.textContent.replace(/[aeiou]/gi, '');
		
		/*if(child.nodeValue !== null){
			child.nodeValue = child.nodeValue.replace(/[aeiou]/gi, '');
		}*/	

	}
	
}