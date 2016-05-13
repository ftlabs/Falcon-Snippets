var articleParent = document.querySelector('#storyContent');
articleParent.style.display = 'none';
articleParent.style.visibility = 'hidden';

var ocr = document.createElement('div');

ocr.className = 'ftlabs-ad-block__archive-ocr';
ocr.setAttribute('style', 'border: 4px solid #cec6b9; padding: 15px; margin: 10px 0px 29px;');

var ocrForm = document.createElement('form');
ocrForm.addEventListener('submit', (event) => {
	event.preventDefault();
	if (event.target['ocr-input'].value.split(' ')[1] === 'for') {
		showContent();
	} else {

		event.target['ocr-input'].value = '';
		var div = event.target.querySelector('div.o-forms-errortext');
		div.setAttribute('style', 'display:block;');
		
		div.addEventListener('input', () => {
			div.setAttribute('style', 'display: none');
		}, {
			once: true
		})

	}
});
ocr.appendChild(ocrForm);

ocrForm.innerHTML =
`<div class='o-forms-group ftlabs-ad-block__form'>
	<p>Hello, we think you're blocking ads. This is problematic, because advertising helps fund our content. Instead of viewing ads, you can help us make sense of our archives by telling us what you think the following words are saying.</p>
	<img src='http://i.imgur.com/nenXmte.png' style='display: block; margin: 0px auto 20px; '>
	<p style="padding-bottom: 5px;">Once you've typed the words you can see, the article will be shown.</p>
	<input type='text' class='o-forms-text' name='ocr-input' autocomplete='off' placeholder='Enter text here' style='font-size: 1em; width: 100%; border-radius: 5px; border: 1px solid rgb(172, 172, 172); padding: 8px !important; box-sizing: border-box; margin-bottom: 15px;' ></input>
	<div class="o-forms-errortext" style="display:none;">Please enter the correct text</div>
	<button class="o-buttons o-buttons--standout o-buttons--big" data-o-grid-colspan="full-width" type="submit" id="submit-btn" style="width: 100%;">Submit</button>
</div>`;

articleParent.parentNode.insertBefore(ocr, articleParent);

function showContent() {
	articleParent.parentNode.removeChild(ocr)
	articleParent.style.display = '';
	articleParent.style.visibility = '';
}
