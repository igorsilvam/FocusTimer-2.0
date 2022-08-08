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
    if (buttonForest.classList.contains("enable")) {
      buttonForest.classList.remove("enable");
      sound.bgForest.pause();
      return;
    }

    buttonForest.classList.add("enable");
    sound.bgForest.play();
  });

  buttonRain.addEventListener("click", function () {
    if (buttonRain.classList.contains("enable")) {
      buttonRain.classList.remove("enable");
      sound.bgRain.pause();
      return;
    }

    buttonRain.classList.add("enable");
    sound.bgRain.play();
  });

  buttonCoffee.addEventListener("click", function () {
    if (buttonCoffee.classList.contains("enable")) {
      buttonCoffee.classList.remove("enable");
      sound.bgCoffee.pause();
      return;
    }

    buttonCoffee.classList.add("enable");
    sound.bgCoffee.play();
  });

  buttonFireplace.addEventListener("click", function () {
    if (buttonFireplace.classList.contains("enable")) {
      buttonFireplace.classList.remove("enable");
      sound.bgFireplace.pause();
      return;
    }

    buttonFireplace.classList.add("enable");
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
