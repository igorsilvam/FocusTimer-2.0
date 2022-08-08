import {
  volumeForest,
  volumeRain,
  volumeCoffee,
  volumeFireplace,
} from "./elements.js";

export default function Sound() {
  const buttonPressAudio = new Audio(
    "https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true"
  );

  const KitchenTimer = new Audio(
    "https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true"
  );

  const bgForest = new Audio(
    "https://github.com/IgorSilvaMedeiros/FocusTimer-2.0/blob/master/sound/forest.wav?raw=true"
  );

  bgForest.volume = volumeForest.value;

  bgForest.loop = true;

  const bgRain = new Audio(
    "https://github.com/IgorSilvaMedeiros/FocusTimer-2.0/blob/master/sound/rain.wav?raw=true"
  );

  bgRain.volume = volumeRain.value;

  bgRain.loop = true;

  const bgCoffee = new Audio(
    "https://github.com/IgorSilvaMedeiros/FocusTimer-2.0/blob/master/sound/coffe.wav?raw=true"
  );

  bgCoffee.volume = volumeCoffee.value;

  bgCoffee.loop = true;

  const bgFireplace = new Audio(
    "https://github.com/IgorSilvaMedeiros/FocusTimer-2.0/blob/master/sound/fireplace.wav?raw=true"
  );

  bgFireplace.volume = volumeFireplace.value;

  bgFireplace.loop = true;

  function pressSound() {
    buttonPressAudio.play();
  }

  function timeOut() {
    KitchenTimer.play();
  }

  return {
    bgForest,
    bgRain,
    bgCoffee,
    bgFireplace,
    pressSound,
    timeOut,
  };
}
