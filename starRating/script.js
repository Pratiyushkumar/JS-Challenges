const app = document.querySelector('#app');
const emojisContainer = document.querySelector('#emojis');

function createStar(n) {
  const result = [];

  for (let i = 0; i < n; i++) {
    const button = document.createElement('button');
    button.classList.add('star-empty', 'star');
    button.setAttribute(`data-index`, i);
    result.push(button);
  }

  return result;
}

function paintTheStar(star, allStars) {
  const indexOfCurrentStar = star.dataset.index;
  for (let i = indexOfCurrentStar; i >= 0; i--) {
    allStars[i].classList.remove('star-empty');
    allStars[i].classList.add('colorStar');
  }
  console.log(allStars);
}

function unPaintTheStar(star, allStars) {
  const indexOfCurrentStar = star.dataset.index;
  for (let i = indexOfCurrentStar; i >= 0; i--) {
    allStars[i].classList.remove('colorStar');
    allStars[i].classList.add('star-empty');
  }
}

function giveTheRating(star, allStars) {
  // unPaintTheStar(star, allStars);

  console.log('clicked');
  paintTheStar(star, allStars);
}

function hoverListener(star, allStars) {
  paintTheStar(star, allStars);
}

function leaveListener(star, allStars) {
  unPaintTheStar(star, allStars);
}

function main() {
  const stars = createStar(5);

  for (let i = 0; i < stars.length; i++) {
    app.appendChild(stars[i]);
  }

  const getAllStars = document.querySelectorAll('.star');

  getAllStars.forEach((star) => {
    star.addEventListener('mouseover', () => {
      hoverListener(star, getAllStars);
    });
    star.addEventListener('mouseleave', () => {
      leaveListener(star, getAllStars);
    });

    // star.addEventListener('click', () => {
    //   giveTheRating(star, getAllStars);
    // });
    star.removeEventListener('mouseleave', leaveListener);
    star.removeEventListener('mouseover', hoverListener);
  });
}

main();
