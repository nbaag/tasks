const yama = document.getElementById("box");
const circle = document.getElementById("circle");

let yamaTop = 700;
let yamaHeight = 100;
let speed = 1;
let yamaDown;
let yamaUp;

const yamaFly = setInterval(() => {
  yamaTop -= 5;
  yamaHeight += 5;
  yama.style.top = yamaTop + "px";
  yama.style.height = yamaHeight + "px";

  if (yamaTop <= 0) {
    clearInterval(yamaFly);
    floatingYama();
  }
}, 1);

floatingYama = () => {
  setInterval(() => {
    yamaTop += speed;

    if (yamaTop < -2 || yamaTop > 15) {
      speed = speed * -1;
    }

    yama.style.top = yamaTop + "px";
  }, 1000 / 30);
};
