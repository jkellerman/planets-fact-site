import "../styles/main.scss";
import data from "../data.json";
import assets from "../assets/*.svg";
import assetsPng from "../assets/*.png";

const hamburger = document.querySelector("[data-hamburger]");
const hamburgerFill = document.querySelector("[data-hamburger-fill]");
const body = document.querySelector("body");
const mobileNav = document.querySelector("[data-mobile-nav]");
const navLinks = document.querySelectorAll("li");
console.log(navLinks);

const getPlanet = (planet) => {
  // Split string from assets to use for adding images dynamically
  const jsonImagePath = planet.images.planet
    .split("/")
    .pop()
    .replace(/\.svg/g, "");
  document.querySelector("[data-planet]").src = assets[jsonImagePath];
  document.querySelector("[data-name]").innerText = planet.name;
  document.querySelector("[data-content]").innerText = planet.overview.content;
  document.querySelector("[data-wiki]").href = planet.overview.source;
  document.querySelector("[data-rotation]").innerText = planet.rotation;
  document.querySelector("[data-revolution]").innerText = planet.revolution;
  document.querySelector("[data-radius]").innerText = planet.radius;
  document.querySelector("[data-temp]").innerText = planet.temperature;
};

getPlanet(data[3]);

hamburger.addEventListener("click", () => {
  body.classList.toggle("no__scroll");
  mobileNav.classList.toggle("hide");
  hamburgerFill.classList.toggle("dim");
});
