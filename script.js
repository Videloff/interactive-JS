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
// --------------------------------------------------------
// Fonction 8 ---------------------------------------------
// --------------------------------------------------------
// Fonction 9 ---------------------------------------------
// --------------------------------------------------------
