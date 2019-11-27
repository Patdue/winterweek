/* eslint linebreak-style: ["error", "windows"] */


// Simport Typewriter from 'typewriter-effect/dist/core';
// eslint-disable-next-line no-unused-vars,func-names
// your page initialization code here
// the DOM will be available here

// Set the date we're counting down to
const countDownDate = new Date('Oct 03, 2019 20:00:00').getTime();

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

// const activities = ['skiing', 'snowboarding', 'après ski', 'beer pong', 'ski lessons',
// 'ski tours', 'fondue', 'Night-Skiing', 'Sledding'];
//
// // eslint-disable-next-line no-new
// new Typewriter('#activities', {
//   strings: activities,
//   autoStart: true,
//   loop: true,
//   cursor: '',
// });

let showVideo = true;

const slotsContainer = document.getElementsByClassName('slots-container')[0];
const videoContainer = document.getElementsByClassName('video-container')[0];
const videoNormalDisplay = slotsContainer.style.display;
const slotsNormalDisplay = slotsContainer.style.display;
const video = videoContainer.children[0];
const slots = document.getElementById('slots-left');

function switchSlotsVideo() {
  let fetchSpotsTimeout;
  function fetchSpots() {
    const request = new XMLHttpRequest();
    request.open('GET', 'https://v2-api.sheety.co/a6f47424b2967761bdac347953ab953d/winterWeek/stats', true);
    // eslint-disable-next-line func-names
    request.onload = function () {
      // Begin accessing JSON data here
      const data = JSON.parse(this.response);
      // eslint-disable-next-line no-alert
      if (request.status >= 200 && request.status < 400) {
        slots.innerText = data.stats[0].spotsLeft;
      }
    };
    request.send();
    fetchSpotsTimeout = setTimeout(fetchSpots, 5000);
  }
  fetchSpots();

  clearTimeout(fetchSpotsTimeout);
  let timeout;
  if (showVideo === true) {
    slotsContainer.style.display = 'none';
    videoContainer.style.display = videoNormalDisplay;
    video.currentTime = 0;
    video.play();
    timeout = 60000;
  } else {
    videoContainer.style.display = 'none';
    slotsContainer.style.display = slotsNormalDisplay;
    video.pause();
    fetchSpots();
    timeout = 600000;
  }
  showVideo = !showVideo;
  setTimeout(switchSlotsVideo, timeout);
}

window.onload = switchSlotsVideo;
