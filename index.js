let a = document.getElementById("userValue01");
let b = document.getElementById("decre");
let c = document.getElementById("incre");


b.addEventListener("click", decrement01);

function decrement01(){
  let previous = a.value;
  let new01 = parseInt(previous) - 10;
  a.value = new01;

}
c.addEventListener("click", increment01);

function increment01(){
  let previous = a.value;
  let new01 = parseInt(previous) + 10;
  a.value = new01;

}


function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to shuffle an array using Fisher-Yates algorithm
function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = getRandomInt(0, i);
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

document.getElementById('startButton').addEventListener('click', function() {
  var selectedNumber = null;
  var numberButtons = document.querySelectorAll('.butn03');
  var resultElement = document.getElementById('res');
  for (var i = 0; i < numberButtons.length; i++) {
    if (numberButtons[i].classList.contains('selected')) {
      selectedNumber = numberButtons[i];
      break;
    }
  }
  if (!selectedNumber) {
    resultElement.innerText = "Please select a card first.";
    resultElement.style.color = "yellow";
    return;
  }
  var diceElement = document.getElementById('dice');
  diceElement.style.animation = 'rotate 5s cubic-bezier(0.645, 0.045, 0.355, 1) forwards';
  var diceSound = new Audio('diceanimation.mp3');
  diceSound.play();

  setTimeout(function() {
    diceElement.style.animation = 'none';
    diceSound.pause();
    var faces = document.getElementsByClassName('face');
    var randomNumbers = shuffleArray([1, 2, 3, 4, 5, 6]); // Shuffle the array of numbers

    for (var i = 0; i < faces.length; i++) {
      faces[i].innerHTML = randomNumbers[i];
    }

    var generatedNumber = randomNumbers[0];
    var message = "";
    if (parseInt(selectedNumber.innerText) === generatedNumber) {
      message = "Congratulations! You won. The Generated number is: " + generatedNumber;
      resultElement.style.color = "green";
      var winSound = new Audio('winner.mp3');
      winSound.play();
    } else {
      message = "Sorry, you lose. Please try again. The Generated number is: " + generatedNumber;
      resultElement.style.color = "red";
      var loseSound = new Audio('loser.mp3');
      loseSound.play();
    }
    resultElement.innerText = message;

    var generatedFace = faces[0];
    generatedFace.style.backgroundColor = "yellow"; 

    setTimeout(function() {
      generatedFace.style.transition = "background-color 0.5s"; // Apply transition effect for 0.5 seconds
      generatedFace.style.backgroundColor = ""; // Remove the background color after 0.5 seconds
    }, 3000);
  }, 2000);
});

var numberButtons = document.querySelectorAll('.butn03');
for (var i = 0; i < numberButtons.length; i++) {
  numberButtons[i].addEventListener('click', function() {
    resetSelection(); // Call the resetSelection function to hide previous result messages
    var prevSelected = document.querySelector('.butn03.selected');
    if (prevSelected) {
      prevSelected.classList.remove('selected');
      prevSelected.style.backgroundColor = '';
    }
    this.classList.add('selected');
    this.style.backgroundColor = 'green';
  });
}

function resetSelection() {
  var selectedButton = document.querySelector('.butn03.selected');
  var resultElement = document.getElementById('res');
  if (selectedButton) {
    selectedButton.classList.remove('selected');
    selectedButton.style.backgroundColor = '';
  }
  resultElement.innerText = '';
  resultElement.style.color = '';
}

var resetButton = document.getElementById('restar');
resetButton.addEventListener('click', resetSelection);





















  
  
































  