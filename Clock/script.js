const secondsHand = document.querySelector('.sec__hand');
const minutesHand = document.querySelector('.min__hand');
const hourHand = document.querySelector('.hour__hand');

function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hour = now.getHours();

  const secondHandDeg = (seconds / 60) * 360 + 90;
  secondsHand.style.transform = `rotate(${secondHandDeg}deg)`;

  const minuteHandDeg = (minutes / 60) * 360 + (seconds / 60) * 6 + 90;
  minutesHand.style.transform = `rotate(${minuteHandDeg}deg)`;

  const hourDegrees = (hour / 12) * 360 + (minutes / 60) * 30 + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setDate, 1000);
setDate();
