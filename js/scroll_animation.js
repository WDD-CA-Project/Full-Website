
// Reveal fadeInUp elements when scrolling
const faders = document.querySelectorAll('.fadeInUp');
const appearOptions = {
  threshold: 0.3,
  rootMargin: "0px 0px -100px 0px"
};

const appearOnScroll = new IntersectionObserver(function (entries, appearOnScroll) {
  entries.forEach(entry => {
	if (!entry.isIntersecting) return;
	entry.target.style.animationPlayState = 'running';
	appearOnScroll.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  fader.style.animationPlayState = 'paused';
  appearOnScroll.observe(fader);
});