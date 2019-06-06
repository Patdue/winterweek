/* eslint linebreak-style: ["error", "windows"] */
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
