var price = document.getElementById("price");
var pack1 = document.querySelector(".pack1");
var pack2 = document.querySelector(".pack2");
var pack3 = document.querySelector(".pack3");

pack1.addEventListener("click", () => {
  price.innerHTML = "$1346";
  console.log("1 pack");
});

pack2.addEventListener("click", () => {
  price.innerHTML = "$4038";
  console.log("3 packs");
});

pack3.addEventListener("click", () => {
  price.innerHTML = "$8076";
  console.log("6 packs");
});

// ============================================

var block1 = document.querySelector(".block1");
var block2 = document.querySelector(".block2");
var block3 = document.querySelector(".block3");
var block4 = document.querySelector(".block4");

var line1 = document.querySelector(".line1");
var line2 = document.querySelector(".line2");

var priceOrange = document.querySelector(".priceOrange");
var inputDonate = document.querySelector(".inputDonate");

var buttonDonate = document.querySelector(".buttonDonate");
var buttonHelp = document.querySelector(".buttonHelp");

block1.addEventListener("click", () => {
  line2.style.backgroundColor = 'grey';
  line1.style.backgroundColor = 'green';

  priceOrange.innerHTML = "100 грн.";
  inputDonate.value = 100;

  console.log("₴100 cliked");
});

block2.addEventListener("click", () => {
  line2.style.backgroundColor = 'grey';
  line1.style.backgroundColor = 'green';

  priceOrange.innerHTML = "200 грн.";
  inputDonate.value = 200;

  console.log("₴200 cliked");
});

block3.addEventListener("click", () => {
  line1.style.backgroundColor = 'grey';
  line2.style.backgroundColor = 'green';

  priceOrange.innerHTML = "500 грн.";
  inputDonate.value = 500;

  console.log("₴500 cliked");
});

block4.addEventListener("click", () => {
  line1.style.backgroundColor = 'grey';
  line2.style.backgroundColor = 'green';

  priceOrange.innerHTML = "1000 грн.";
  inputDonate.value = 1000;

  console.log("₴1000 cliked");
});

buttonDonate.addEventListener("click", () => {
  priceOrange.innerHTML = inputDonate.value + " грн.";
});

buttonHelp.addEventListener("click", () => {
  priceOrange.innerHTML = inputDonate.value + " грн.";
});

// ============================================

var button = document.querySelector('.read-more');

button.addEventListener('click', function(event) {
  var span = event.target.previousElementSibling.querySelector('span');
  span.classList.add('fade-in');
});