// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"JHJW":[function(require,module,exports) {
module.exports = "background-stars.7fedf03a.svg";
},{}],"LDUH":[function(require,module,exports) {

},{"./../assets/background-stars.svg":[["background-stars.7fedf03a.svg","JHJW"],"JHJW"]}],"boCh":[function(require,module,exports) {
module.exports = [{
  "name": "Mercury",
  "overview": {
    "content": "Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.",
    "source": "https://en.wikipedia.org/wiki/Mercury_(planet)"
  },
  "structure": {
    "content": "Mercury appears to have a solid silicate crust and mantle overlying a solid, iron sulfide outer core layer, a deeper liquid core layer, and a solid inner core. The planet's density is the second highest in the Solar System at 5.427 g/cm3 , only slightly less than Earth's density.",
    "source": "https://en.wikipedia.org/wiki/Mercury_(planet)#Internal_structure"
  },
  "geology": {
    "content": "Mercury's surface is similar in appearance to that of the Moon, showing extensive mare-like plains and heavy cratering, indicating that it has been geologically inactive for billions of years. It is more heterogeneous than either Mars's or the Moon’s.",
    "source": "https://en.wikipedia.org/wiki/Mercury_(planet)#Surface_geology"
  },
  "rotation": "58.6 Days",
  "revolution": "87.97 Days",
  "radius": "2,439.7 KM",
  "temperature": "430°c",
  "images": {
    "planet": "./assets/planet-mercury.svg",
    "internal": "./assets/planet-mercury-internal.svg",
    "geology": "./assets/geology-mercury.png"
  }
}, {
  "name": "Venus",
  "overview": {
    "content": "Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the brightest natural object in Earth's night sky after the Moon, Venus can cast shadows and can be, on rare occasions, visible to the naked eye in broad daylight.",
    "source": "https://en.wikipedia.org/wiki/Venus"
  },
  "structure": {
    "content": "The similarity in size and density between Venus and Earth suggests they share a similar internal structure: a core, mantle, and crust. Like that of Earth, Venusian core is most likely at least partially liquid because the two planets have been cooling at about the same rate.",
    "source": "https://en.wikipedia.org/wiki/Venus#Internal_structure"
  },
  "geology": {
    "content": "Much of the Venusian surface appears to have been shaped by volcanic activity. Venus has several times as many volcanoes as Earth, and it has 167 large volcanoes that are over 100 km (60 mi) across. The only volcanic complex of this size on Earth is the Big Island of Hawaii.",
    "source": "https://en.wikipedia.org/wiki/Venus#Surface_geology"
  },
  "rotation": "243 Days",
  "revolution": "224.7 Days",
  "radius": "6,051.8 KM",
  "temperature": "471°c",
  "images": {
    "planet": "./assets/planet-venus.svg",
    "internal": "./assets/planet-venus-internal.svg",
    "geology": "./assets/geology-venus.png"
  }
}, {
  "name": "Earth",
  "overview": {
    "content": "Third planet from the Sun and the only known planet to harbor life. About 29.2% of Earth's surface is land with remaining 70.8% is covered with water. Earth's distance from the Sun, physical properties and geological history have allowed life to evolve and thrive.",
    "source": "https://en.wikipedia.org/wiki/Earth"
  },
  "structure": {
    "content": "Earth's interior, like that of the other terrestrial planets, is divided into layers by their chemical or physical (rheological) properties. The outer layer is a chemically distinct silicate solid crust, which is underlain by a highly viscous solid mantle.",
    "source": "https://en.wikipedia.org/wiki/Earth#Internal_structure"
  },
  "geology": {
    "content": "The total surface area of Earth is about 510 million km2. The continental crust consists of lower density material such as the igneous rocks granite and andesite. Less common is basalt, a denser volcanic rock that is the primary constituent of the ocean floors.",
    "source": "https://en.wikipedia.org/wiki/Earth#Surface"
  },
  "rotation": "0.99 Days",
  "revolution": "365.26 Days",
  "radius": "6,371 KM",
  "temperature": "16°c",
  "images": {
    "planet": "./assets/planet-earth.svg",
    "internal": "./assets/planet-earth-internal.svg",
    "geology": "./assets/geology-earth.png"
  }
}, {
  "name": "Mars",
  "overview": {
    "content": "Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the \"Red Planet\".",
    "source": "https://en.wikipedia.org/wiki/Mars"
  },
  "structure": {
    "content": "Like Earth, Mars has differentiated into a dense metallic core overlaid by less dense materials. Scientists initially determined that the core is at least partially liquid. Current models of its interior imply a core consisting primarily of iron and nickel with about 16–17% sulfur.",
    "source": "https://en.wikipedia.org/wiki/Mars#Internal_structure"
  },
  "geology": {
    "content": "Mars is a terrestrial planet whose surface consists of minerals containing silicon and oxygen, metals, and other elements that typically make up rock. The surface is primarily composed of tholeiitic basalt, although parts are more silica-rich than typical basalt.",
    "source": "https://en.wikipedia.org/wiki/Mars#Surface_geology"
  },
  "rotation": "1.03 Days",
  "revolution": "1.88 Years",
  "radius": "3,389.5 KM",
  "temperature": "-28°c",
  "images": {
    "planet": "./assets/planet-mars.svg",
    "internal": "./assets/planet-mars-internal.svg",
    "geology": "./assets/geology-mars.png"
  }
}, {
  "name": "Jupiter",
  "overview": {
    "content": "Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass two and a half times that of all the other planets in the Solar System combined, but less than one-thousandth the mass of the Sun.",
    "source": "https://en.wikipedia.org/wiki/Jupiter"
  },
  "structure": {
    "content": "When the Juno arrived in 2016, it found that Jupiter has a very diffuse core that mixes into its mantle. A possible cause is an impact from a planet of about ten Earth masses a few million years after Jupiter's formation, which would have disrupted an originally solid Jovian core.",
    "source": "https://en.wikipedia.org/wiki/Jupiter#Internal_structure"
  },
  "geology": {
    "content": "The best known feature of Jupiter is the Great Red Spot, a persistent anticyclonic storm located 22° south of the equator. It is known to have existed since at least 1831, and possibly since 1665.",
    "source": "https://en.wikipedia.org/wiki/Jupiter#Great_Red_Spot_and_other_vortices"
  },
  "rotation": "9.93 Hours",
  "revolution": "11.86 Years",
  "radius": "69,911 KM",
  "temperature": "-108°c",
  "images": {
    "planet": "./assets/planet-jupiter.svg",
    "internal": "./assets/planet-jupiter-internal.svg",
    "geology": "./assets/geology-jupiter.png"
  }
}, {
  "name": "Saturn",
  "overview": {
    "content": "Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine and a half times that of Earth. It only has one-eighth the average density of Earth.",
    "source": "https://en.wikipedia.org/wiki/Saturn"
  },
  "structure": {
    "content": "Despite consisting mostly of hydrogen and helium, most of Saturn's mass is not in the gas phase, because hydrogen becomes a non-ideal liquid when the density is above 0.01 g/cm3, which is reached at a radius containing 99.9% of Saturn's mass.",
    "source": "https://en.wikipedia.org/wiki/Saturn#Internal_structure"
  },
  "geology": {
    "content": "The outer atmosphere of Saturn contains 96.3% molecular hydrogen and 3.25% helium by volume. The planet's most famous feature is its prominent ring system, which is composed mostly of ice particles with a smaller amount of rocky debris and dust.",
    "source": "https://en.wikipedia.org/wiki/Saturn#Atmosphere"
  },
  "rotation": "10.8 Hours",
  "revolution": "29.46 Years",
  "radius": "58,232 KM",
  "temperature": "-138°c",
  "images": {
    "planet": "./assets/planet-saturn.svg",
    "internal": "./assets/planet-saturn-internal.svg",
    "geology": "./assets/geology-saturn.png"
  }
}, {
  "name": "Uranus",
  "overview": {
    "content": "Uranus is the seventh planet from the Sun. Its name is a reference to the Greek god of the sky, Uranus according to Greek mythology, was the great-grandfather of Ares. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System.",
    "source": "https://en.wikipedia.org/wiki/Uranus"
  },
  "structure": {
    "content": "The standard model of Uranus's structure is that it consists of three layers: a rocky (silicate/iron–nickel) core in the centre, an icy mantle in the middle and an outer gaseous hydrogen/helium envelope. The core is relatively small, with a mass of only 0.55 Earth masses.",
    "source": "https://en.wikipedia.org/wiki/Uranus#Internal_structure"
  },
  "geology": {
    "content": "The composition of Uranus's atmosphere is different from its bulk, consisting mainly of molecular hydrogen and helium. The helium molar fraction, i.e. the number of helium atoms per molecule of gas, is 0.15±0.03 in the upper troposphere.",
    "source": "https://en.wikipedia.org/wiki/Uranus#Atmosphere"
  },
  "rotation": "17.2 Hours",
  "revolution": "84 Years",
  "radius": "25,362 KM",
  "temperature": "-195°c",
  "images": {
    "planet": "./assets/planet-uranus.svg",
    "internal": "./assets/planet-uranus-internal.svg",
    "geology": "./assets/geology-uranus.png"
  }
}, {
  "name": "Neptune",
  "overview": {
    "content": "Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth, more massive than its near-twin Uranus.",
    "source": "https://en.wikipedia.org/wiki/Neptune"
  },
  "structure": {
    "content": "Neptune's internal structure resembles that of Uranus. Its atmosphere forms about 5% to 10% of its mass and extends perhaps 10% to 20% of the way towards the core. Increasing concentrations of methane, ammonia and water are found in the lower regions.",
    "source": "https://en.wikipedia.org/wiki/Neptune#Internal_structure"
  },
  "geology": {
    "content": "Neptune's atmosphere is 80% hydrogen and 19% helium. A trace amount of methane is also present. Prominent absorption bands of methane exist at wavelengths above 600 nm, in the red and infrared portion of the spectrum.",
    "source": "https://en.wikipedia.org/wiki/Neptune#Atmosphere"
  },
  "rotation": "16.08 Hours",
  "revolution": "164.79 Years",
  "radius": "24,622 KM",
  "temperature": "-201°c",
  "images": {
    "planet": "./assets/planet-neptune.svg",
    "internal": "./assets/planet-neptune-internal.svg",
    "geology": "./assets/geology-neptune.png"
  }
}];
},{}],"QmQ7":[function(require,module,exports) {
module.exports = "icon-chevron.8ac7bc4d.svg";
},{}],"J99Y":[function(require,module,exports) {
module.exports = "icon-hamburger.dd0e1133.svg";
},{}],"g9yU":[function(require,module,exports) {
module.exports = "icon-source.a788556c.svg";
},{}],"yp4n":[function(require,module,exports) {
module.exports = "planet-earth-internal.dc8e316b.svg";
},{}],"fCDE":[function(require,module,exports) {
module.exports = "planet-earth.b31c5e60.svg";
},{}],"fGxA":[function(require,module,exports) {
module.exports = "planet-jupiter-internal.b3177e27.svg";
},{}],"uB1I":[function(require,module,exports) {
module.exports = "planet-jupiter.aab7b818.svg";
},{}],"rKUN":[function(require,module,exports) {
module.exports = "planet-mars-internal.9d4760d9.svg";
},{}],"wQFJ":[function(require,module,exports) {
module.exports = "planet-mars.3017cafc.svg";
},{}],"EZNe":[function(require,module,exports) {
module.exports = "planet-mercury-internal.e8e9846a.svg";
},{}],"JukR":[function(require,module,exports) {
module.exports = "planet-mercury.19aa9fff.svg";
},{}],"MlSd":[function(require,module,exports) {
module.exports = "planet-neptune-internal.00635854.svg";
},{}],"jdsL":[function(require,module,exports) {
module.exports = "planet-neptune.00de719e.svg";
},{}],"cqzp":[function(require,module,exports) {
module.exports = "planet-saturn-internal.28a20881.svg";
},{}],"BZYu":[function(require,module,exports) {
module.exports = "planet-saturn.35276c4f.svg";
},{}],"PWHt":[function(require,module,exports) {
module.exports = "planet-uranus-internal.4857c087.svg";
},{}],"ZpYn":[function(require,module,exports) {
module.exports = "planet-uranus.3c313398.svg";
},{}],"Kv7d":[function(require,module,exports) {
module.exports = "planet-venus-internal.dea7fc69.svg";
},{}],"R8KA":[function(require,module,exports) {
module.exports = "planet-venus.a3a9cc0f.svg";
},{}],"voxH":[function(require,module,exports) {
module.exports = {
  "background-stars": require("./background-stars.svg"),
  "icon-chevron": require("./icon-chevron.svg"),
  "icon-hamburger": require("./icon-hamburger.svg"),
  "icon-source": require("./icon-source.svg"),
  "planet-earth-internal": require("./planet-earth-internal.svg"),
  "planet-earth": require("./planet-earth.svg"),
  "planet-jupiter-internal": require("./planet-jupiter-internal.svg"),
  "planet-jupiter": require("./planet-jupiter.svg"),
  "planet-mars-internal": require("./planet-mars-internal.svg"),
  "planet-mars": require("./planet-mars.svg"),
  "planet-mercury-internal": require("./planet-mercury-internal.svg"),
  "planet-mercury": require("./planet-mercury.svg"),
  "planet-neptune-internal": require("./planet-neptune-internal.svg"),
  "planet-neptune": require("./planet-neptune.svg"),
  "planet-saturn-internal": require("./planet-saturn-internal.svg"),
  "planet-saturn": require("./planet-saturn.svg"),
  "planet-uranus-internal": require("./planet-uranus-internal.svg"),
  "planet-uranus": require("./planet-uranus.svg"),
  "planet-venus-internal": require("./planet-venus-internal.svg"),
  "planet-venus": require("./planet-venus.svg")
};
},{"./background-stars.svg":"JHJW","./icon-chevron.svg":"QmQ7","./icon-hamburger.svg":"J99Y","./icon-source.svg":"g9yU","./planet-earth-internal.svg":"yp4n","./planet-earth.svg":"fCDE","./planet-jupiter-internal.svg":"fGxA","./planet-jupiter.svg":"uB1I","./planet-mars-internal.svg":"rKUN","./planet-mars.svg":"wQFJ","./planet-mercury-internal.svg":"EZNe","./planet-mercury.svg":"JukR","./planet-neptune-internal.svg":"MlSd","./planet-neptune.svg":"jdsL","./planet-saturn-internal.svg":"cqzp","./planet-saturn.svg":"BZYu","./planet-uranus-internal.svg":"PWHt","./planet-uranus.svg":"ZpYn","./planet-venus-internal.svg":"Kv7d","./planet-venus.svg":"R8KA"}],"pCOu":[function(require,module,exports) {
module.exports = "favicon-32x32.b532600b.png";
},{}],"EYFl":[function(require,module,exports) {
module.exports = "geology-earth.17bfc1c6.png";
},{}],"GUHL":[function(require,module,exports) {
module.exports = "geology-jupiter.87956164.png";
},{}],"Nuhc":[function(require,module,exports) {
module.exports = "geology-mars.5da5dbc8.png";
},{}],"XngA":[function(require,module,exports) {
module.exports = "geology-mercury.a7791c49.png";
},{}],"wrCy":[function(require,module,exports) {
module.exports = "geology-neptune.cb7072bf.png";
},{}],"SWHo":[function(require,module,exports) {
module.exports = "geology-saturn.4bcd2be5.png";
},{}],"YMOz":[function(require,module,exports) {
module.exports = "geology-uranus.cd484942.png";
},{}],"P0lo":[function(require,module,exports) {
module.exports = "geology-venus.cf7a1b9b.png";
},{}],"HBCd":[function(require,module,exports) {
module.exports = {
  "favicon-32x32": require("./favicon-32x32.png"),
  "geology-earth": require("./geology-earth.png"),
  "geology-jupiter": require("./geology-jupiter.png"),
  "geology-mars": require("./geology-mars.png"),
  "geology-mercury": require("./geology-mercury.png"),
  "geology-neptune": require("./geology-neptune.png"),
  "geology-saturn": require("./geology-saturn.png"),
  "geology-uranus": require("./geology-uranus.png"),
  "geology-venus": require("./geology-venus.png")
};
},{"./favicon-32x32.png":"pCOu","./geology-earth.png":"EYFl","./geology-jupiter.png":"GUHL","./geology-mars.png":"Nuhc","./geology-mercury.png":"XngA","./geology-neptune.png":"wrCy","./geology-saturn.png":"SWHo","./geology-uranus.png":"YMOz","./geology-venus.png":"P0lo"}],"QvaY":[function(require,module,exports) {
"use strict";

require("../styles/main.scss");

var _data = _interopRequireDefault(require("../data.json"));

var _ = _interopRequireDefault(require("../assets/*.svg"));

var _2 = _interopRequireDefault(require("../assets/*.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var hamburger = document.querySelector("[data-hamburger]");
var hamburgerFill = document.querySelector("[data-hamburger-fill]");
var body = document.querySelector("body");
var mobileNav = document.querySelector("[data-mobile-nav]");
var desktopLinks = Array.from(document.querySelectorAll(".desktop__links"));
var planetLinks = Array.from(document.querySelectorAll(".planet__link"));
var overview = document.querySelector("[data-overview]");
var structure = document.querySelector("[data-structure]");
var surface = document.querySelector("[data-surface]");
var image = document.querySelector("[data-planet]");
var content = document.querySelector("[data-content]");
var wiki = document.querySelector("[data-wiki]");
var planetGeology = document.querySelector("[data-planet-geology]");

var getPlanet = function getPlanet(planet) {
  // Split string from assets to use for adding images dynamically
  var jsonImagePath = planet.images.planet.split("/").pop().replace(/\.svg/g, ""); // dynamically render data to browser

  var name = document.querySelector("[data-name]").innerText = planet.name;
  image.src = _.default[jsonImagePath];
  content.innerText = planet.overview.content;
  wiki.href = planet.overview.source;
  document.querySelector("[data-rotation]").innerText = planet.rotation;
  document.querySelector("[data-revolution]").innerText = planet.revolution;
  document.querySelector("[data-radius]").innerText = planet.radius;
  document.querySelector("[data-temp]").innerText = planet.temperature; // Highlight overview tab on pageload

  overview.className = "";
  overview.classList.add("tab");
  overview.classList.add("fill__".concat(name.toLowerCase()));
}; // render earth to browser on load


getPlanet(_data.default[2]); // click event for mobile navigation

hamburger.addEventListener("click", function () {
  body.classList.toggle("no__scroll");
  mobileNav.classList.toggle("hide");
  hamburgerFill.classList.remove("fill");
  hamburgerFill.classList.toggle("dim");
}); // Update planet information when each nav link is clicked

desktopLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    var index = desktopLinks.indexOf(link);
    getPlanet(_data.default[index]);
    structure.className = "";
    surface.className = "";
    structure.classList.add("tab");
    surface.classList.add("tab");
    planetGeology.classList.remove("show");
    planetGeology.classList.add("hide");
  });
});
planetLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    var index = planetLinks.indexOf(link);
    getPlanet(_data.default[index]);
    structure.className = "";
    surface.className = "";
    structure.classList.add("tab");
    surface.classList.add("tab");
    planetGeology.classList.remove("show");
    planetGeology.classList.add("hide");
    mobileNav.classList.toggle("hide");
    body.classList.remove("no__scroll");
    hamburgerFill.classList.remove("dim");
    hamburgerFill.classList.toggle("fill");
  });
}); // click events for tabs

overview.addEventListener("click", function () {
  // get the current innertext of h1 tag to use for color change
  var name = document.querySelector("[data-name]").innerText.toLowerCase();
  addTabStyles(overview, name);
  removeTabStyles(structure, surface, name); // Loop through array to find name that matches the current planet

  var capitalised = capitalizeFirstLetter(name);

  var planet = _data.default.find(function (element) {
    return element.name === capitalised;
  }); // add overview image


  var jsonImagePath = planet.images.planet.split("/").pop().replace(/\.svg/g, "");
  image.src = _.default[jsonImagePath]; // add overview content

  content.innerText = planet.overview.content;
  wiki.href = planet.overview.source;
  planetGeology.classList.remove("show");
  planetGeology.classList.add("hide");
});
structure.addEventListener("click", function () {
  // get the current innertext of h1 tag to use for color change
  var name = document.querySelector("[data-name]").innerText.toLowerCase();
  addTabStyles(structure, name);
  removeTabStyles(overview, surface, name); // Loop through array to find name that matches the current planet

  var capitalised = capitalizeFirstLetter(name);

  var planet = _data.default.find(function (element) {
    return element.name === capitalised;
  }); // add internal structure image


  var jsonImagePath = planet.images.internal.split("/").pop().replace(/\.svg/g, "");
  image.src = _.default[jsonImagePath]; // add structure content

  content.innerText = planet.structure.content;
  wiki.href = planet.structure.source;
  planetGeology.classList.remove("show");
  planetGeology.classList.add("hide");
});
surface.addEventListener("click", function () {
  // get the current innertext of h1 tag to use for color change
  var name = document.querySelector("[data-name]").innerText.toLowerCase();
  addTabStyles(surface, name);
  removeTabStyles(overview, structure, name);
  var capitalised = capitalizeFirstLetter(name);

  var planet = _data.default.find(function (element) {
    return element.name === capitalised;
  }); // add surface image


  var jsonImagePath = planet.images.geology.split("/").pop().replace(/\.png/g, "");
  var jsonImagePathOverview = planet.images.planet.split("/").pop().replace(/\.svg/g, "");
  image.src = _.default[jsonImagePathOverview];
  planetGeology.classList.remove("show");
  planetGeology.classList.add("show");
  planetGeology.src = _2.default[jsonImagePath]; // add surface content

  content.innerText = planet.geology.content;
  wiki.href = planet.geology.source;
});

function addTabStyles(tab, color) {
  tab.className = "";
  tab.classList.add("tab");
  tab.classList.add("fill__".concat(color.toLowerCase()));
}

function removeTabStyles(tab, tab2, name) {
  tab.classList.remove("fill__".concat(name));
  tab2.classList.remove("fill__".concat(name));
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
},{"../styles/main.scss":"LDUH","../data.json":"boCh","../assets/*.svg":"voxH","../assets/*.png":"HBCd"}]},{},["QvaY"], null)