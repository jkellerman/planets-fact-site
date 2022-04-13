import "../styles/main.scss";
import data from "../data.json";
import assets from "../assets/*.svg";
import assetsPng from "../assets/*.png";

const hamburger = document.querySelector("[data-hamburger]");
const hamburgerFill = document.querySelector("[data-hamburger-fill]");
const body = document.querySelector("body");
const mobileNav = document.querySelector("[data-mobile-nav]");
const desktopLinks = Array.from(document.querySelectorAll(".desktop__links"));
const overview = document.querySelector("[data-overview]");
const structure = document.querySelector("[data-structure]");
const surface = document.querySelector("[data-surface]");
const image = document.querySelector("[data-planet]");
const content = document.querySelector("[data-content]");
const wiki = document.querySelector("[data-wiki]");
const planetGeology = document.querySelector("[data-planet-geology]");

const getPlanet = (planet) => {
  // Split string from assets to use for adding images dynamically
  const jsonImagePath = planet.images.planet
    .split("/")
    .pop()
    .replace(/\.svg/g, "");
  // dynamically render data to browser
  const name = (document.querySelector("[data-name]").innerText = planet.name);
  image.src = assets[jsonImagePath];
  content.innerText = planet.overview.content;
  wiki.href = planet.overview.source;
  document.querySelector("[data-rotation]").innerText = planet.rotation;
  document.querySelector("[data-revolution]").innerText = planet.revolution;
  document.querySelector("[data-radius]").innerText = planet.radius;
  document.querySelector("[data-temp]").innerText = planet.temperature;

  // Highlight overview tab on pageload
  overview.style.backgroundColor = `var(--${name.toLowerCase()})`;
  overview.style.border = "none";
};

// render earth to browser on load

getPlanet(data[2]);

// click event for mobile navigation

hamburger.addEventListener("click", () => {
  body.classList.toggle("no__scroll");
  mobileNav.classList.toggle("hide");
  hamburgerFill.classList.toggle("dim");
});

// Update planet information when each nav link is clicked

desktopLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    const index = desktopLinks.indexOf(link);
    getPlanet(data[index]);
    removeTabStyles(structure, surface);
    planetGeology.style.display = "none";
  });
});

// click event for internal structure tab
overview.addEventListener("click", () => {
  // get the current innertext of h1 tag to use for color change
  const name = document.querySelector("[data-name]").innerText.toLowerCase();
  addTabStyles(overview, name);
  removeTabStyles(structure, surface);
  // Loop through array to find name that matches the current planet
  const capitalised = capitalizeFirstLetter(name);
  const planet = data.find((element) => element.name === capitalised);
  // add internal structure image
  const jsonImagePath = planet.images.planet
    .split("/")
    .pop()
    .replace(/\.svg/g, "");
  image.src = assets[jsonImagePath];
  // add structure content
  content.innerText = planet.overview.content;
  wiki.href = planet.overview.source;
  planetGeology.style.display = "none";
});
structure.addEventListener("click", () => {
  // get the current innertext of h1 tag to use for color change
  const name = document.querySelector("[data-name]").innerText.toLowerCase();
  addTabStyles(structure, name);
  removeTabStyles(overview, surface);
  // Loop through array to find name that matches the current planet
  const capitalised = capitalizeFirstLetter(name);
  const planet = data.find((element) => element.name === capitalised);
  // add internal structure image
  const jsonImagePath = planet.images.internal
    .split("/")
    .pop()
    .replace(/\.svg/g, "");
  image.src = assets[jsonImagePath];
  // add structure content
  content.innerText = planet.structure.content;
  wiki.href = planet.structure.source;
  planetGeology.style.display = "none";
});

surface.addEventListener("click", () => {
  // get the current innertext of h1 tag to use for color change
  const name = document.querySelector("[data-name]").innerText.toLowerCase();
  addTabStyles(surface, name);
  removeTabStyles(overview, structure);
  const capitalised = capitalizeFirstLetter(name);
  const planet = data.find((element) => element.name === capitalised);
  // add internal structure image
  const jsonImagePath = planet.images.geology
    .split("/")
    .pop()
    .replace(/\.png/g, "");
  const jsonImagePathOverview = planet.images.planet
    .split("/")
    .pop()
    .replace(/\.svg/g, "");
  image.src = assets[jsonImagePathOverview];
  planetGeology.style.display = "block";
  planetGeology.src = assetsPng[jsonImagePath];
  // add structure content
  content.innerText = planet.geology.content;
  wiki.href = planet.geology.source;
  console.log(jsonImagePathOverview);
});

function addTabStyles(tab, color) {
  tab.style.backgroundColor = `var(--${color.toLowerCase()})`;
  tab.style.border = "none";
  tab.style.transition = "0.25s ease-in-out";
}

function removeTabStyles(tab, tab2) {
  tab.style.backgroundColor = null;
  tab.style.border = null;
  tab2.style.backgroundColor = null;
  tab2.style.border = null;
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
