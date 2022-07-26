export default function Controls({ buttonPlay, buttonPause, buttonStop }) {
  function play() {
    buttonPlay.classList.add("hiden");
    buttonPause.classList.remove("hiden");
    buttonStop.classList.remove("hiden");
  }

  function pause() {
    buttonPlay.classList.remove("hiden");
    buttonPause.classList.add("hiden");
  }

  function reset() {
    buttonPlay.classList.remove("hiden");
    buttonPause.classList.add("hiden");
    buttonStop.classList.add("hiden");
  }

  return {
    play,
    pause,
    reset,
  };
}
