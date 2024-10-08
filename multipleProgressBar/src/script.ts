const addBtn = document.querySelector('.addBtn');
const progressBarContainer = document.querySelector('#progressBarContainer');

let isProgressRunning = false;
let queue: HTMLDivElement[] = [];

addBtn.addEventListener('click', () => {
  const progress = createProgressBar();

  progressBarContainer.append(progress);

  queue.push(progress);

  runProgressBar();
});

function createProgressBar(): HTMLDivElement {
  const parentDiv = document.createElement('div');
  parentDiv.classList.add('progressBar');

  const childDiv = document.createElement('div');
  childDiv.classList.add('innerProgressBar');

  parentDiv.append(childDiv);

  return parentDiv as HTMLDivElement;
}

function runProgressBar() {
  let initialValue = 0;

  if (queue.length === 0 || isProgressRunning) {
    return;
  }

  isProgressRunning = true;

  const currentRunningProgress = queue.shift();

  const innerProgressar = currentRunningProgress.querySelector(
    '.innerProgressBar'
  ) as HTMLDivElement;

  const timer = setInterval(() => {
    innerProgressar.style.width = `${(initialValue += 2)}%`;
    innerProgressar.style.backgroundColor = 'green';

    if (initialValue === 100) {
      clearInterval(timer);

      isProgressRunning = false;

      runProgressBar();
    }
  }, 100);
}
