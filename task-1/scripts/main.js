const table = document.getElementById("bimg");
const tableStyle = getComputedStyle(table);
const button_up = document.getElementById("btn_up");
const button_down = document.getElementById("btn_down");

let upInterval;
let downInterval;

function desktopUp() {}

button_up.onclick = function () {
  let top = -tableStyle.top.replace(/\D/g, "");

  //desktop
  if (window.screen.width > 420 && top === -60) {
    clearInterval(downInterval);

    upInterval = setInterval(() => {
      top -= 1;
      table.style.top = top + "px";

      if (top <= -120) {
        clearInterval(upInterval);
      }
    }, 50);
  }

  //mobile
  if (window.screen.width <= 420 && top === -420) {
    top = +tableStyle.top.replace(/\D/g, "");

    clearInterval(downInterval);

    upInterval = setInterval(() => {
      top -= 1;
      table.style.top = top + "px";

      if (top === 390) {
        clearInterval(upInterval);
      }
    }, 50);
  }
};

button_down.onclick = function () {
  let top = -tableStyle.top.replace(/\D/g, "");

  //desktop
  if (window.screen.width > 420 && top === -120) {
    clearInterval(upInterval);

    downInterval = setInterval(() => {
      top += 1;
      table.style.top = top + "px";

      if (top >= -60) {
        clearInterval(downInterval);
      }
    }, 50);
  }

  //mobile
  if (window.screen.width <= 420 && top === -390) {
    top = +tableStyle.top.replace(/\D/g, "");

    clearInterval(upInterval);

    downInterval = setInterval(() => {
      top += 1;
      table.style.top = top + "px";

      if (top === 420) {
        clearInterval(downInterval);
      }
    }, 50);
  }
};
