// Fonction 1

let foot = document.querySelector('footer.text-muted');
let clics = 1;

foot.addEventListener('click', consoleInput);

function consoleInput() {
  console.log('clique numero ' + clics++);
}
// ----------

// Fonction 2

let burger = document.getElementById('navbarHeader');
let isOpen = false;

burger.addEventListener('click', uncollapse);

function uncollapse() {
  if (isOpen === false) {
    burger.classList.remove('collapse');
    isOpen = true;
  }
  else if (isOpen === true) {
    burger.classList.add('collapse');
    isOpen = false;
  }
}

// ----------


// Fonction 3
// ----------
// Fonction 4
// ----------
// Fonction 5
// ----------
// Fonction 6
// ----------
// Fonction 7
// ----------
// Fonction 8
// ----------
// Fonction 9
// ----------
