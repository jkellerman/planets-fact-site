import "../styles/main.scss";
import data from "../data.json";

const hamburger = document.querySelector("[data-hamburger]");
const hamburgerFill = document.querySelector("[data-hamburger-fill]");
const body = document.querySelector("body");
const mobileNav = document.querySelector("[data-mobile-nav]");

const getPlanet = (planet) => {
  document.querySelector("[data-name]").innerText = planet.name;
  document.querySelector("[data-planet]").src = planet.images.planet;
  document.querySelector("[data-p]").innerText = planet.overview.content;
  document.querySelector("[data-wiki]").href = planet.overview.source;
  document.querySelector("[data-rotation]").innerText = planet.rotation;
  document.querySelector("[data-revolution]").innerText = planet.revolution;
  document.querySelector("[data-radius]").innerText = planet.radius;
  document.querySelector("[data-temp]").innerText = planet.temperature;
};

getPlanet(data[2]);

hamburger.addEventListener("click", () => {
  body.classList.toggle("no__scroll");
  mobileNav.classList.toggle("hide");
  hamburgerFill.classList.toggle("dim");
});
