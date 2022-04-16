# Frontend Mentor - Planets fact site solution

This is a solution to the [Planets fact site challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/planets-fact-site-gazqN8w_f). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

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

### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

**Note: Delete this note and the content within this section and replace with your own plans for continued development.**

### Useful resources

- [Stack Overflow](https://stackoverflow.com/questions/15469974/cycling-through-a-list-of-colors-with-sass) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Example resource 2](https://stackoverflow.com/questions/41282244/prevent-parent-expanding-when-transformscale-used-on-child) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.

**Note: Delete this note and replace the list above with resources that helped you during the challenge. These could come in handy for anyone viewing your solution or for yourself when you look back on this project in the future.**

## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)

**Note: Delete this note and add/remove/edit lines above based on what links you'd like to share.**

## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.

**Note: Delete this note and edit this section's content as necessary. If you completed this challenge by yourself, feel free to delete this section entirely.**
