/* eslint linebreak-style: ["error", "windows"] */


import Typewriter from 'typewriter-effect/dist/core';
// eslint-disable-next-line no-unused-vars,func-names
// your page initialization code here
// the DOM will be available here

// Set the date we're counting down to
const countDownDate = new Date('Nov 20, 2019 19:00:00').getTime();

// Update the count down every 1 second
const x = setInterval(() => {
  // Get today's date and time
  const now = new Date().getTime();

  // Find the distance between now and the count down date
  const distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById('countdown-days').innerText = `${days}`;
  document.getElementById('countdown-hours').innerText = `${hours}`;
  document.getElementById('countdown-minutes').innerText = `${minutes}`;
  document.getElementById('countdown-seconds').innerText = `${seconds}`;

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById('registration-countdown').classList.toggle('hidden');
    document.getElementById('registration-form').classList.toggle('hidden');
  }
}, 1000);


let slideIndex = 0;

function carousel() {
  let i;
  const slides = document.getElementsByClassName('slide');
  for (i = 0; i < slides.length; i += 1) {
    slides[i].style.display = 'none';
  }
  slideIndex += 1;
  if (slideIndex > slides.length) { slideIndex = 1; }
  slides[slideIndex - 1].style.display = 'block';
  // eslint-disable-next-line no-restricted-globals
  setTimeout(carousel, 5000); // Change image every 2 seconds
}

window.onload = carousel;

const activities = ['skiing', 'snowboarding', 'après ski', 'beer pong', 'ski lessons', 'ski tours', 'fondue'];

// eslint-disable-next-line no-new
new Typewriter('#activities', {
  strings: activities,
  autoStart: true,
  loop: true,
  cursor: '',
});
