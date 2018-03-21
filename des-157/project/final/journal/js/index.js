/* Speech Recognition */

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.interimResults = true;

let p = document.createElement('p');
let container = document.querySelector('.speechContainer');
container.appendChild(p);
console.log(container);

recognition.addEventListener('result', function(e) {
  const speechToText = Array.from(e.results)
  .map(result => result[0])
  .map(result => result.transcript)
  .join('')

  p.textContent = speechToText;

  if (e.results[0].isFinal) {
		p = document.createElement('p');
	  container.appendChild(p);
	}
});

recognition.addEventListener('end', recognition.start);
recognition.start();

/* Prompt */

var prompt = document.getElementById("getPrompt");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  prompt.style.display = "block";
  return false;
}

span.onclick = function() {
  prompt.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == prompt) {
    prompt.style.display = "none";
  }
}