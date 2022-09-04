const item = document.querySelector(".puck1");
const item2 = document.querySelector(".puck2");

item.animate(
  [{ transform: "translateX()" }, { transform: "translateY(0.6rem)" }],
  {
    duration: 1700,
    easing: "ease-in-out",
    direction: "alternate",
    iterations: Infinity,
  }
);

item2.animate(
  [{ transform: "translateX(0.5rem)" }, { transform: "translateY()" }],
  {
    duration: 1700,
    easing: "ease-in-out",
    direction: "alternate",
    iterations: Infinity,
  }
);
