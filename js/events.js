import {
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonPlus,
  buttonMinus,
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
} from "./elements.js";

export default function Events({ timer, sound, controls }) {
  buttonPlay.addEventListener("click", function () {
    sound.pressSound();
    controls.play();
    timer.countDown();
  });

  buttonPause.addEventListener("click", function () {
    sound.pressSound();
    controls.pause();
    timer.hold();
  });

  buttonStop.addEventListener("click", function () {
    sound.pressSound();
    controls.reset();
    timer.reset();
  });

  buttonPlus.addEventListener("click", function () {
    sound.pressSound();
    timer.minutes = timer.minutes + 5;
    timer.updateDisplay(timer.minutes, 0);
  });

  buttonMinus.addEventListener("click", function () {
    sound.pressSound();
    timer.minutes = timer.minutes - 5;
    timer.updateDisplay(timer.minutes, 0);
  });

  buttonForest.addEventListener("click", function () {
    if (containerForest.classList.contains("enable")) {
      containerForest.classList.remove("enable");
      sound.bgForest.pause();
      return;
    }

    containerForest.classList.add("enable");
    sound.bgForest.play();
  });

  buttonRain.addEventListener("click", function () {
    if (containerRain.classList.contains("enable")) {
      containerRain.classList.remove("enable");
      sound.bgRain.pause();
      return;
    }

    containerRain.classList.add("enable");
    sound.bgRain.play();
  });

  buttonCoffee.addEventListener("click", function () {
    if (containerCoffee.classList.contains("enable")) {
      containerCoffee.classList.remove("enable");
      sound.bgCoffee.pause();
      return;
    }

    containerCoffee.classList.add("enable");
    sound.bgCoffee.play();
  });

  buttonFireplace.addEventListener("click", function () {
    if (containerFireplace.classList.contains("enable")) {
      containerFireplace.classList.remove("enable");
      sound.bgFireplace.pause();
      return;
    }

    containerFireplace.classList.add("enable");
    sound.bgFireplace.play();
  });

  volumeForest.addEventListener("mousemove", setvolume);
  volumeRain.addEventListener("mousemove", setvolume);
  volumeCoffee.addEventListener("mousemove", setvolume);
  volumeFireplace.addEventListener("mousemove", setvolume);

  function setvolume() {
    sound.bgForest.volume = volumeForest.value;
    sound.bgRain.volume = volumeRain.value;
    sound.bgCoffee.volume = volumeCoffee.value;
    sound.bgFireplace.volume = volumeFireplace.value;
  }
}
