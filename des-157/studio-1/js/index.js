// capture the submit event
document.f.onsubmit = processForm;

// capture the reset event
document.f.onreset = resetForm;

// define process function
function processForm() {

  // store form fields in variables
  var adj = document.f.adj.value;
  var noun = document.f.noun.value;
  var verb = document.f.verb.value;
  var place = document.f.place.value;
  var name = document.f.name.value;
  var anim = document.f.anim.value;
  var num = document.f.num.value;
  var color = document.f.color.value;
  var results = document.getElementById("results");
  var myMsg = document.getElementById("myMsg");

  // change class value
  results.className = "";

  // easter egg
  switch (color) {
    case "blue":
      myMsg.style.backgroundColor = "blue";
      break;
    case "orange":
      myMsg.style.backgroundColor = "orange";
      break;
    default:
      myMsg.style.backgroundColor = "white";
  }

  myMsg.innerHTML =
    "On a fine morning, one <strong>" + adj + "</strong> alien decided to take me to dinner. We ordered <strong>" + noun + "</strong> and had the most amazing time. We ate, chatted and decided to <strong>" + verb + "</strong> as well. We then proceeded to the <strong>" + place  + "</strong>. There, the alien introduced me to its pet <strong>" + anim + "</strong>. Its name was <strong>" + name + "</strong>. It came rushing to me with great joy! I petted it and it licked me back. It would not stop licking me. That was when I realised the <strong>" + num + "</strong> times trouble was I in. Suddenly the pet's eyes shifted <strong>" + color + "</strong> and fangs began protruding from its mouth. So the time has come. I was to be eaten.";

  //prevent page from reloading
  return false;
}

function resetForm() {
  myMsg.innerHTML = "";
  results.className = "hide";
}
