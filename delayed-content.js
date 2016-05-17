var articleParent = document.querySelector('#storyContent');
var articleParas = document.querySelectorAll('#storyContent p');
var storyImages = document.querySelectorAll('span.story-image');

for(var x = 0; x < articleParas.length; x += 1){
	articleParas[x].style.display = "none";
}

for(var y = 0; y < storyImages.length; y += 1){
	storyImages[y].style.display = "none";
}

var adMessage = document.createElement('div');
adMessage.innerHTML = '<p style="border: 5px solid #a7a59b; padding: 1em; margin-bottom: 1em;">This article will be back shortly. We have delayed your access to it for a short while because we believe you are using ad blocking technology. The FT generates income from advertising on the site which helps ensure we can bring you intesting content like the article you will shortly be reading.</p>';
articleParent.insertBefore(adMessage, articleParent.firstChild);

function showContent() {
	adMessage.style.display = 'none';
	for(var z = 0; z < articleParas.length; z += 1){
		articleParas[z].style.display = "block";
	}
	
	for(var w = 0; w < storyImages.length; w += 1){
		storyImages[y].style.display = "block";		
	}
	
}

window.setTimeout(showContent, 10000);
