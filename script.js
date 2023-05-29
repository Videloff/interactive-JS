// Fonction 1 ---------------------------------------------

let foot = document.querySelector('footer.text-muted');
let clics = 1;

foot.addEventListener('click', consoleInput);

function consoleInput() {
  console.log('clique numero ' + clics++);
}
// --------------------------------------------------------

// Fonction 2 ---------------------------------------------

let burgerButton = document.querySelector(".navbar-toggler")
let burger = document.getElementById('navbarHeader');
let isOpen = false;

burgerButton.addEventListener('click', uncollapse);

function uncollapse() {
  if (isOpen === false) {
    burger.classList.remove('collapse');
    isOpen = true;
  } else if (isOpen === true) {
    burger.classList.add('collapse');
    isOpen = false;
  }
}

// --------------------------------------------------------

// Fonction 3 ---------------------------------------------

let buttonRedBtn = document.querySelector('button.btn-outline-secondary');
let cardRedText = document.querySelector('.card-text');

buttonRedBtn.addEventListener('click', editRed);

function editRed() {
  cardRedText.style.color = "red";
}

// --------------------------------------------------------

// Fonction 4 ---------------------------------------------

let allBtnCard = document.querySelectorAll('.col-md-4');
let secondCard = allBtnCard[1];
let cardGreenbtn = secondCard.querySelector('button.btn-outline-secondary');
let cardGreenText = secondCard.querySelector('.card-text');
let isGreen = false;

cardGreenbtn.addEventListener('click', editGreen);

function editGreen() {
  if (isGreen === false) {
    cardGreenText.style.color = "green";
    isGreen = true;
  } else if (isGreen === true) {
    cardGreenText.style.color = "";
    isGreen = false;
  }
}

// --------------------------------------------------------

// Fonction 5 ---------------------------------------------

let navbar = document.querySelector('header');
let page = document.querySelector('body');
let bootstrap = document.querySelector('link');
let isNuke = false;

navbar.addEventListener('dblclick', nukeStrike);

function nukeStrike() {
  if (isNuke === false) {
    bootstrap.disabled = true;
    isNuke = true;
  } else if (isNuke === true) {
    bootstrap.disabled = false;
    isNuke = false;
  }
}

// --------------------------------------------------------

// Fonction 6 ---------------------------------------------

let cards = document.getElementsByClassName("col-md-4");

for (let card = 0; card < cards.length; card++) {
  let btnEditCard = cards[card].getElementsByTagName("button")[0];
  let textCard = cards[card].querySelector(".card-text");
  let imgCard = cards[card].querySelector(".card-img-top")

  btnEditCard.addEventListener('mouseover', reduceCard);

  function reduceCard() {
    textCard.classList.toggle("collapse");
      if(imgCard.style.width == false) {
      imgCard.style.width = '20%';
    } else if(imgCard.style.width == '20%') {
      imgCard.style.width = '';
    }
  }
}


// --------------------------------------------------------

// Fonction 7 ---------------------------------------------

let rightArrow = document.querySelector("a.btn-secondary");

rightArrow.addEventListener('click', rotateRight);

function rotateRight() {
  let lastCard = cards[Number(cards.length) - 1];
  let firstCard = cards[0];
  let parentDiv = lastCard.parentNode;

  parentDiv.insertBefore(lastCard, firstCard); 
}

// --------------------------------------------------------

// Fonction 8 ---------------------------------------------

let leftArrow = document.querySelector("a.btn-primary");
leftArrow.disabled = true;

leftArrow.addEventListener('click', rotateLeft);

function rotateLeft(link) {
  link.preventDefault();
  let lastCard = cards[Number(cards.length) - 1];
  let firstCard = cards[0];
  let parentDiv = lastCard.parentNode;

  lastCard.after(firstCard); 
}

// --------------------------------------------------------

// Fonction 9 ---------------------------------------------

let headerBtn = document.querySelector('strong');
let onOrOff = false;

headerBtn.addEventListener('mousedown', function() {
  onOrOff = true;
});

document.addEventListener('click', function(event) {
  if (event.target !== headerBtn) {
    onOrOff = false;
  }
});

document.addEventListener('keydown', function(event) {
  if (onOrOff === true) {
    switch(event.key) {
      case "a": case "A":
        console.log("Touche a (A) enfoncée");
        document.body.className = 'col-4';
        break;
      case "y": case "Y":
        console.log("Touche y (Y) enfoncée");
        document.body.className = 'col-4 offset-4';
        break;
      case "p": case "P":
        console.log("Touche p (P) enfoncée");
        document.body.className = 'col-4 offset-8';
        break;
      case "b": case "B":
        console.log("Touche b (B) enfoncée");
        document.body.className = '';
        break;
    }
  }
});
// --------------------------------------------------------
