import Sound from "./sound.js";

export default function Timer({
  displayMinutes,
  displaySeconds,
  resetControls,
}) {
  let minutes = Number(displayMinutes.textContent);
  let shotdown;

  function updateDisplay(newMinutes, seconds) {
    newMinutes = newMinutes === undefined ? minutes : newMinutes;
    seconds = seconds === undefined ? 0 : seconds;
    displayMinutes.textContent = String(newMinutes).padStart(2, "0");
    displaySeconds.textContent = String(seconds).padStart(2, "0");
  }

  function reset() {
    updateDisplay(minutes, 0);
    clearTimeout(shotdown);
  }

  function countDown() {
    shotdown = setTimeout(function () {
      let seconds = Number(displaySeconds.textContent);
      let minutes = Number(displayMinutes.textContent);

      updateDisplay(minutes, 0);

      if (minutes <= 0 && seconds <= 0) {
        resetControls();
        updateDisplay();
        Sound().timeOut();
        return;
      }

      if (seconds <= 0) {
        seconds = 60;
        --minutes;
      }
      updateDisplay(minutes, String(seconds - 1));

      countDown();
    }, 1000);
  }

  function hold() {
    clearTimeout(shotdown);
  }

  function updateMinutes(newMinutes) {
    minutes = newMinutes;
  }

  return {
    minutes,
    updateDisplay,
    reset,
    countDown,
    hold,
    updateMinutes,
  };
}
