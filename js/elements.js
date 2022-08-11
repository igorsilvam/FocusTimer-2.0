const buttonPlay = document.querySelector(".play");
const buttonPause = document.querySelector(".pause");
const buttonStop = document.querySelector(".stop");
const buttonPlus = document.querySelector(".plus");
const buttonMinus = document.querySelector(".minus");
const displayMinutes = document.querySelector(".minutes");
const displaySeconds = document.querySelector(".seconds");
const buttonForest = document.querySelector(".forest");
const buttonRain = document.querySelector(".rain");
const buttonCoffee = document.querySelector(".coffee");
const buttonFireplace = document.querySelector(".fireplace");
const containerForest = document.querySelector(".containerForest");
const containerRain = document.querySelector(".containerRain");
const containerCoffee = document.querySelector(".containerCoffee");
const containerFireplace = document.querySelector(".containerFireplace");
const volumeForest = document.getElementById("volumeForest");
const volumeRain = document.getElementById("volumeRain");
const volumeCoffee = document.getElementById("volumeCoffee");
const volumeFireplace = document.getElementById("volumeFireplace");
const toggle = document.getElementById("toggle");
const theme = window.localStorage.getItem("theme");

export {
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonPlus,
  buttonMinus,
  displayMinutes,
  displaySeconds,
  buttonForest,
  buttonRain,
  buttonCoffee,
  buttonFireplace,
  containerForest,
  containerRain,
  containerCoffee,
  containerFireplace,
  volumeForest,
  volumeRain,
  volumeCoffee,
  volumeFireplace,
  toggle,
  theme,
};
