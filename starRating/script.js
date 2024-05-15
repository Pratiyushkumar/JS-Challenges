const totalStars = 5;

let filled = 0;
let unfilled = 0;
let ratings = 0;

const starContainer = document.querySelector('#app');

starContainer.appendChild(
  createElements(totalStars, (i) =>
    createElement('button', { class: 'star star-empty', 'data-index': i })
  )
);

const stars = document.querySelectorAll('.star');

starContainer.addEventListener('mouseover', hoverMouse);
starContainer.addEventListener('mouseleave', leaveMouse);
starContainer.addEventListener('click', mouseClick);

function createElement(element, attributes) {
  const el = document.createElement(element);

  for (let key in attributes) {
    el.setAttribute(key, attributes[key]);
  }
  return el;
}

function createElements(count, fn, start = 0) {
  const fragments = document.createDocumentFragment();

  for (let i = 0; i < count; i++) {
    fragments.appendChild(fn(i));
  }

  return fragments;
}

function fillStars(count) {
  console.log('filled value', filled);
  for (let i = filled; i <= count; i++) {
    console.log('values of i', i);
    stars[i].classList.remove('star-empty');
    stars[i].classList.add('colorStar');
  }

  for (let i = count; i <= unfilled; i++) {
    console.log('i of unfilled', i);
    stars[i].classList.remove('colorStar');
    stars[i].classList.add('star-empty');
  }

  filled = count;
  unfilled = count;
}

function mouseClick(e) {
  const target = e.target;
  if (target.classList.contains('star')) {
    ratings = +target.dataset.index;
    console.log('ratings', ratings);
    fillStars(ratings);
  }
}

function hoverMouse(e) {
  const target = e.target;
  if (target.classList.contains('star')) {
    const index = target.dataset.index;
    console.log('index from mouseHover', index);
    fillStars(+index);
  }
}

function leaveMouse() {
  fillStars(+ratings);
}
