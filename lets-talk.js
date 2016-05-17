
var markup = '<div class="ftlabs-ads_question-cards o-techdocs-content"><div class="final-message-target"></div><div class="o-forms-group o-techdocs-card"><label class="o-forms-label"><span class="answer incorrect" id="ads_question-cards-answer01">It&#39;s 30%!</span> Would you be interested in participating in a future ads&#8209;alternative experiment?</label><input type="radio" name="radio03" value="1" id="radio09" class="o-forms-radio"></input><label for="radio09" class="o-forms-label">Yeah, sounds interesting.</label><br /><input type="radio" name="radio03" value="2" id="radio08" class="o-forms-radio"></input><label for="radio08" class="o-forms-label">No, but I would be interested in being shown how to allow ads on the FT.</label><br /><input type="radio" name="radio03" value="3" id="radio07" class="o-forms-radio"></input><label for="radio07" class="o-forms-label">I&#39;d rather pay more to never be shown adverts.</label></div><div class="o-forms-group o-techdocs-card"><label class="o-forms-label">How much do you think Ads allow us to reduce your subscription cost by?</label><input type="radio" name="radio02" id="radio06" value="1" class="o-forms-radio"></input><label for="radio06" class="o-forms-label">5%</label><br /><input type="radio" name="radio02" id="radio05" value="2" class="o-forms-radio"></input><label for="radio05" class="o-forms-label">15%</label><br /><input type="radio" name="radio02" id="radio04" value="3" class="o-forms-radio"></input><label for="radio04" class="o-forms-label">30%</label></div><div class="o-forms-group o-techdocs-card"><label class="o-forms-label">Oh dear. <br />We think you may be blocking ads.</label><input type="radio" name="radio01" id="radio03" value="1" class="o-forms-radio"></input><label for="radio03" class="o-forms-label">I didn&#39;t realise.</label><br /><input type="radio" name="radio01" id="radio02" value="2" class="o-forms-radio"></input><label for="radio02" class="o-forms-label">I&#39;m not.</label><br /><input type="radio" name="radio01" id="radio01" value="3" class="o-forms-radio"></input><label for="radio01" class="o-forms-label">I know.</label></div></div>';

function bindEvents(){
	
	var radioButtons = document.querySelectorAll('.ftlabs-ads_question-cards input[type="radio"]');
	
	for(var f = 0; f < radioButtons.length; f += 1){
		
		var input = radioButtons[f];
		
		input.addEventListener('click', function(){
			console.log(this, this.id);

			switch(this.id){

				case "radio02":
				Array.from(document.querySelectorAll('.o-techdocs-card')).forEach(card => {
					card.classList.add('hidden');
				});
				document.querySelector('.final-message-target').textContent = 'Sorry our mistake.';
				break;
				case "radio01":
				case "radio03":
				this.parentNode.classList.add('hidden');
				break;
				case "radio04":

				document.querySelector('#ads_question-cards-answer01').textContent = "Correct!";
				document.querySelector('#ads_question-cards-answer01').classList.remove('incorrect');	document.querySelector('#ads_question-cards-answer01').classList.add('correct');

				case "radio05":
				case "radio06":
				this.parentNode.classList.add('hidden');
				break;
				case "radio07":
				case "radio08":
				case "radio09":
				document.querySelector('.final-message-target').textContent = `Thank you for your feedback, we may email you with further information.`;
				this.parentNode.classList.add('hidden');
				break;

			}

		}, false);
		
	}
	
}



var adSpace = document.querySelector('.master-row.railSection .advertising.o-ads__center:not(.o-ads__empty)');

setTimeout(function(){
	
	var styles = '.ftlabs-ads_question-cards{width:300px;height:300px;overflow:hidden;box-sizing:border-box;position:relative;background:#fff;border:5px solid #000}.ftlabs-ads_question-cards .answer.correct{color:green}.ftlabs-ads_question-cards .answer.incorrect{color:red}.ftlabs-ads_question-cards .final-message-target{box-sizing:border-box;height:250px;padding:1em;margin:1em 1em -250px;border:1px solid grey}.ftlabs-ads_question-cards .o-techdocs-card{overflow:hidden;height:260px;width:280px;max-height:300px;padding:1em .5em .5em;background:#fff;box-sizing:border-box;display:block;box-shadow:1px 1px 3px 0 rgba(100,100,100,.5);border:1px solid #f0f0f0;position:absolute;margin-left:5px;text-align:left}.ftlabs-ads_question-cards .o-techdocs-card.hidden{transition:transform 2s ease;transform:translateY(-200%)}.o-forms-label{width:100%;display:block;font-weight:800}.o-forms-radio + .o-forms-label{width:auto;font-weight:200}';
	
	var sEl = document.createElement('style');
	
	sEl.textContent = styles;
	
	document.head.appendChild(sEl);
	
	adSpace.innerHTML = markup;
	bindEvents();

}.bind(this), 3000);

