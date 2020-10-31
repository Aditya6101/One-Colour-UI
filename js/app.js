const leftFaders = document.querySelectorAll(".fade-in-left");
const rightFader = document.querySelectorAll(".fade-in-right");
const sliders = document.querySelectorAll(".card");
const dropper = document.querySelector(".show-img");
// ! Options of the Intersection Observer

const observerOptions = {
  rootMargin: "-200px 0px 0px 0px",
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
    entries.forEach((entry, index) => {
      if (!entry.isIntersecting) {
        return;
      } else {
        entry.target.classList.add("right-faders");
        entry.target.style.transition = `opacity 250ms ease-in ${
          index / 2 + 0.5
        }s, transform 500ms ease-in ${index / 2 + 0.5}s`;
        rightFadersObserver.unobserve(entry.target);
      }
    });
  },
  observerOptions
);

rightFader.forEach((fader) => rightFadersObserver.observe(fader));

// ! Intersection Observer for cards which will slide up

const sliderObserver = new IntersectionObserver((entries, sliderObserver) => {
  entries.forEach((entry, index) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("slide-up");
      entry.target.style.transition = `opacity 250ms ease-in ${
        index / 6 + 0.5
      }s, transform 500ms ease-in ${index / 6 + 0.5}s`;
      sliderObserver.unobserve(entry.target);
    }
  });
});

sliders.forEach((slider) => {
  sliderObserver.observe(slider);
});

// ! Intersection Observer for camera imgs which will fade in them

const imgObserver = new IntersectionObserver((entries, imgObserver) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("fade-img");
      imgObserver.unobserve(entry.target);
    }
  });
}, observerOptions);

imgObserver.observe(dropper);
