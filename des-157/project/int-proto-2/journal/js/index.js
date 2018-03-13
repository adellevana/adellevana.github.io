window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.interimResults = true;

let p = document.createElement('p');
let container = document.querySelector('.container');
container.appendChild(p);
console.log(container);

recognition.addEventListener('result', function(e) {
  const speechTotext = Array.from(e.results)
  .map(result => result[0])
  .map(result => result.transcript)
  .join('')
			
  p.textContent = speechTotext;

  if (e.results[0].isFinal) {
		p = document.createElement('p');
	  container.appendChild(p);
	}
});

recognition.addEventListener('end', recognition.start);
recognition.start();