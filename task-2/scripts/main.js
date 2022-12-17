const yama = document.getElementById("box");
const yamaStyle = getComputedStyle(yama);
const circle = document.getElementById("circle");
const circleStyle = getComputedStyle(circle);

let yamaTop = +yamaStyle.top.replace(/\D/g, "");
let yamaHeight = +yamaStyle.height.replace(/\D/g, "");
let speed = 1;

let yamaFly;

function styleFly(top, height, maxTop, fps) {
  yamaFly = setInterval(() => {
    yamaTop -= top;
    yamaHeight += height;
    yama.style.top = yamaTop + "px";
    yama.style.height = yamaHeight + "px";

    if (yamaTop <= maxTop) {
      clearInterval(yamaFly);
      floatingYama();
    }
  }, 1000 / fps);
}

function styleFloat(min, max) {
  setInterval(() => {
    yamaTop += speed;

    if (yamaTop < min || yamaTop > max) {
      speed = speed * -1;
    }

    yama.style.top = yamaTop + "px";
  }, 1000 / 30);
}

flyingYama = () => {
  if (window.screen.width > 420) {
    styleFly(5, 5, 0, 60);
  } else if (window.screen.width <= 420) {
    styleFly(3, 5, 800, 30);
  }
};

floatingYama = () => {
  if (window.screen.width > 420) {
    styleFloat(-2, 15);
  } else if (window.screen.width <= 420) {
    styleFloat(785, 800);
  }
};

flyingYama();
