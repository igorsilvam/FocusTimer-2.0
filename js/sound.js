export default function Sound() {
  const buttonPressAudio = new Audio(
    "https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true"
  );

  const KitchenTimer = new Audio(
    "https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true"
  );

  const bgForest = new Audio("./sound/forest.wav");

  const bgRain = new Audio("./sound/rain.wav");

  const bgCoffe = new Audio("./sound/coffe.wav");

  const bgFireplace = new Audio("./sound/fireplace.wav");

  bgForest.loop = true;

  bgRain.loop = true;

  bgCoffe.loop = true;

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
    bgCoffe,
    bgFireplace,
    pressSound,
    timeOut,
  };
}
