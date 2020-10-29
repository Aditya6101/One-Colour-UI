const leftFaders = document.querySelectorAll(".fade-in-left");
const rightFader = document.querySelectorAll(".fade-in-right");

// ! Options of the Intersection Observer
const observerOptions = {
  rootMargin: "-200px 0px 0px 0px",
};
const sliderOptions = {
  rootMargin: "100px 0px 0px 0px",
};

// ! Intersection Observer for items which will fade in from left side of the screen

const leftFadersObserver = new IntersectionObserver(
  (entries, leftFadersObserver) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      } else {
        entry.target.classList.add("left-faders");
        leftFadersObserver.unobserve(entry.target);
      }
    });
  },
  observerOptions
);
leftFaders.forEach((fader) => leftFadersObserver.observe(fader));

// ! Intersection Observer for items which will fade in from left side of the screen

const rightFadersObserver = new IntersectionObserver(
  (entries, rightFadersObserver) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      } else {
        entry.target.classList.add("right-faders");
        rightFadersObserver.unobserve(entry.target);
      }
    });
  },
  observerOptions
);

rightFader.forEach((fader) => rightFadersObserver.observe(fader));
