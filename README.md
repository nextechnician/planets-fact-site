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

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- View each planet page and toggle between "Overview", "Internal Structure", and "Surface Geology"

### Screenshot

![](./screenshot.jpg)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [TypeScript]

### What I learned

This project helped me understand how to build a purely state-driven UI in React without routing, effects, or DOM mutation. The entire interface is driven by React state and reflected through data attributes, with CSS handling all visual logic.

I learned how to:

- Build a fully state-driven UI without React Router or `useEffect`
- Use `data-*` attributes and CSS custom properties to link application state to styling
- Create a fixed visual stage with scalable content to prevent layout shifts
- Centralise responsive behaviour and visual variance using design tokens
- Separate structure, data, and styling for maintainable React layouts

This approach allowed me to scale and theme complex visuals declaratively, without introducing JavaScript-driven styling logic.

```css
--clr-planet-mercury: var(--sky-400);
--clr-planet-venus: var(--amber-400);
--clr-planet-earth: var(--purple-600);
--clr-planet-mars: var(--orange-600);
--clr-planet-jupiter: var(--red-500);
--clr-planet-saturn: var(--bronze-700);
--clr-planet-uranus: var(--teal-400);
--clr-planet-neptune: var(--blue-600);

--clr-planet-current: var(--clr-planet-earth);
--clr-border-interactive: var(--clr-planet-current);
--clr-interactive-active: var(--clr-planet-current);

[data-planet='Mercury'] {
   --clr-planet-current: var(--clr-planet-mercury);
}
[data-planet='Venus'] {
   --clr-planet-current: var(--clr-planet-venus);
}
[data-planet='Earth'] {
   --clr-planet-current: var(--clr-planet-earth);
}
[data-planet='Mars'] {
   --clr-planet-current: var(--clr-planet-mars);
}

/* Base visual rules */
--planet-base-size: 11.25rem;
--planet-stage-size: 14rem;
--geo-x: 50.5%;
--geo-y: 79%;

/* Planet-specific scaling */
[data-planet='Mercury'] {
   --planet-scale: 0.8;
   --geo-x: 50.2%;
   --geo-y: 78%;
}

[data-planet='Venus'] {
   --planet-scale: 1.1;
   --geo-x: 50.2%;
   --geo-y: 78%;
}
```

### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

**Note: Delete this note and the content within this section and replace with your own plans for continued development.**

### Useful resources

- [Example resource 1](https://www.example.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.

**Note: Delete this note and replace the list above with resources that helped you during the challenge. These could come in handy for anyone viewing your solution or for yourself when you look back on this project in the future.**

## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)

**Note: Delete this note and add/remove/edit lines above based on what links you'd like to share.**

## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.

**Note: Delete this note and edit this section's content as necessary. If you completed this challenge by yourself, feel free to delete this section entirely.**

```

```
