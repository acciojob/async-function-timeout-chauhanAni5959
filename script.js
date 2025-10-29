const textInput = document.getElementById('text');
const delayInput = document.getElementById('delay');
const btn = document.getElementById('btn');
const outputDiv = document.getElementById('output');


function wait(ms) {
	return new Promise(resolve=> setTimeout(resolve, ms));
	
}

btn.addEventListener('click', async function (event){
	event.preventDefault();
	outputDiv.textContent = '';
	const message = textInput.value;
	const delay = Number(delayInput.value);

	if(!message){
		outputDiv.textContent = 'Please enter a message.';
		return;
		
	}
	if(!delay || delay < 0){
		outputDiv.textContent = 'Please enter a valid non-negative delay';
		return;
	}

	await wait(delay);

	outputDiv.textContent = message;


	
});
