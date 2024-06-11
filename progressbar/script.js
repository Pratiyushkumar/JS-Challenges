const progressBar = document.querySelector('#progress');

let isProgress = false;
let frameId;

const progressContainer = document.querySelector('#progress_controllers');
const startButton = document.querySelector('.startBtn');
const stopButton = document.querySelector('.stopBtn');

progressContainer.addEventListener('click', clickHandler);

function clickHandler(e) {
  const id = e.target.id;

  if (id === 'start' && !isProgress) {
    onStart();
  } else if (id === 'stop' && isProgress) {
    onStop();
  } else {
    onStop();
    setProgressWidth(0);
  }
}

function onStart() {
  isProgress = true;
  startProgress();
  startButton.disabled = true;
  stopButton.disabled = false;
}

function onStop() {
  isProgress = false;
  cancelAnimationFrame(frameId);
  startButton.disabled = false;
  stopButton.disabled = true;
}

function startProgress() {
  let progressPercentage = 0.1 + getProgressWidth();
  if (progressPercentage <= 100) {
    setProgressWidth(progressPercentage);
    frameId = requestAnimationFrame(startProgress);
  }
}

function getProgressWidth() {
  return +progressBar.style.width.split('%')[0];
}

function setProgressWidth(percentage) {
  progressBar.style.width = `${percentage}%`;
}
