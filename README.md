# Frontend Mentor - Planets fact site solution

This is a solution to the [Planets fact site challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/planets-fact-site-gazqN8w_f). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- View each planet page and toggle between "Overview", "Internal Structure", and "Surface Geology"

### Links

- Solution URL: [Solution](https://github.com/jkellerman/planets-fact-site)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- HTML5 markup
- SCSS
- Flexbox
- CSS Grid
- Mobile-first workflow
- Vanilla JavaScript

### What I learned

I learned a lot from this challenge and whilst trying to get to a close to the design as possible, I added some animations to make it stand out a bit more.

There were a few ways to tackle this project. Creating several html files for all the planets was an option, however I chose to use data provided in the json file to dynamically add content to the webpage. Normally this would be done using the fetch API, which I have used in previous projects, however when using parcel bundler you can simply import the data into your JS file.

```js
import data from "../data.json";
```

Note - I learned that when using parcel bundler, you will also need to import any images you have into your JS file, as adding static image files dynamically does not work. The below snippet will allow parcel to create a unique hashcode for each image to avoid browser caching issues. You will notice that when importing images into JS file, the image links will be added to the dist folder with their new unique hashcode.

```js
import assets from "../assets/*.svg";
```

In this project, I delve a bit deeper into using SCSS, using mixins, loops & @extend. The snippet below shows a loop where each nav link is given a different color when hovered. Instead of writing out lines of code for all 8 planets, here only a few lines have been written with the same results. I also used a similar formula for the mobile navigation animation, creating a delayed transition for each nav link.

```scss
@for $i from 1 through length(a.$colors) {
  li:nth-child(#{length(a.$colors)}n + #{$i})::before {
    background-color: nth(a.$colors, $i);
  }
}
```

```scss
@for $i from 1 through length(a.$colors) {
  @for $i from 1 through 8 {
    li:nth-of-type(#{$i}) {
      animation: nav-enter 250ms linear (0.5s + ($i - 1) * 0.1s) 1 backwards;
    }
  }
}
```

In order to add images dynamically, I needed to get the correct string to enter into the src link. A quick and easy way to this was to use split, pop and replace methods together.

```js
const jsonImagePath = planet.images.planet
  .split("/")
  .pop()
  .replace(/\.svg/g, "");
```

Each planet has a source link to wikipedia. Clicking on the link and going back to the webpage is annoying, especially as this webpage as animations on each load. To get around this I used target blank so the link would open up in a new tab. I also learned about noreferrer and noopener which is inserted into the html to prevent a type of phishing known as tabnapping.

```html
<a data-wiki href="#" target="_blank" rel="noreferrer noopener">Wikipedia</a>
```

### Useful resources

- [SASS Documentation](https://sass-lang.com/documentation) - This helped me with learning new syntax for sass.
- [Stack Overflow](https://stackoverflow.com/questions/41282244/prevent-parent-expanding-when-transformscale-used-on-child) - This tip really helped me when trying to scale images without it affecting the space around it. I was having trouble with the parent element expanding when I put a transform scale on the planet images. The trick was to have a height set in px to the parent element. Also needed display flex with justify center and align items center to keep it centered.

## Author

- Website - [JoshKellerman] - Website coming soon
