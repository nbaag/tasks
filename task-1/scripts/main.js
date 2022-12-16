const table = document.getElementById("bimg");
const tableStyle = getComputedStyle(table);
const button_up = document.getElementById("btn_up");
const button_down = document.getElementById("btn_down");

let upInterval;
let downInterval;

button_up.onclick = function () {
  clearInterval(downInterval);

  let top = -tableStyle.top.replace(/\D/g, "");
  if (top === -60) {
    clearInterval(downInterval);
    upInterval = setInterval(() => {
      top -= 1;
      table.style.top = top + "px";

      if (top === -120) {
        clearInterval(upInterval);
      }
    }, 50);
  }
};

button_down.onclick = function () {
  let top = -tableStyle.top.replace(/\D/g, "");

  if (top === -120) {
    clearInterval(upInterval);
    downInterval = setInterval(() => {
      top += 1;

      table.style.top = top + "px";

      if (top === -60) {
        clearInterval(downInterval);
      }
    }, 50);
  }
};
