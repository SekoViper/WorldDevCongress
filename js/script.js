const navMenu = document.querySelector('.menu');
const toggler = document.querySelector('.toggler');
const menuContainer = document.querySelector('.menu-bg');
const socialMenu = document.querySelector('.social-nav');
const mainMenuContainer = document.querySelector('.menu-only');

toggler.addEventListener('click', () => {
  toggler.classList.toggle('active');
  navMenu.classList.toggle('show-menu');
  menuContainer.classList.toggle('show-bg');
  socialMenu.classList.toggle('show-social-nav');
  mainMenuContainer.classList.toggle('menu-only-show');
});

// speakers
const speakers = [
  {
    id: 0,
    name: 'Angie Jones',
    imgUrl: 'img/angie-jones.jpg',
    title: 'Consectetur sint, maxime adipisci fuga nobis quo!',
    bio: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit dolort et uhuio',
  },
  {
    id: 1,
    name: 'Bjarne Seko',
    imgUrl: 'img/Bjarne.jpg',
    title: 'Consectetur sint, maxime adipisci fuga nobis quo!',
    bio: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit dolort et uhuio',
  },
  {
    id: 2,
    name: 'Cassie Kozyrkov',
    imgUrl: 'img/Cassie-Kozyrkov.jpg',
    title: 'Consectetur sint, maxime adipisci fuga nobis quo!',
    bio: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit dolort et uhuio',
  },
  {
    id: 3,
    name: 'Hakon Wium Lie',
    imgUrl: 'img/Hakon-Wium-Lie.jpg',
    title: 'Consectetur sint, maxime adipisci fuga nobis quo!',
    bio: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit dolort et uhuio',
  },
];

const container = document.getElementById('speakers');
let filteredSpeakers;
let index;
function generateSpeakers() {
  filteredSpeakers.forEach((speaker) => {
    const content = `
      <div class="speaker-container">
        <div class="speaker-img">
          <img src="${speaker.imgUrl}" alt="angie jones">
        </div>
        <div class="speaker-content">
          <p class="speaker-name">${speaker.name}</p>
          <p class="speaker-title">${speaker.title}</p>
          <p class="line"></p>
          <p class="speaker-desc">${speaker.bio}</p>
        </div>
      </div>
    `;
    container.innerHTML += content;
  });
}

// getting the more button to function on click
const moreBtn = document.getElementById('loadMore');
const moreBtnText = document.getElementById('more-btn-text');
const moreBtnImg = document.getElementById('more-btn-img');
const speakersContainer = document.getElementById('speakers');
function deleteChild() {
  let child = speakersContainer.lastElementChild;
  while (child) {
    speakersContainer.removeChild(child);
    child = speakersContainer.lastElementChild;
  }
}
moreBtn.addEventListener('click', () => {
  if (moreBtnText.innerText === 'More') {
    moreBtnText.innerText = 'Less';
    moreBtnImg.style.rotate = '180deg';
    deleteChild();
    index = 6;
    filteredSpeakers = speakers.slice(0, index);
    generateSpeakers();
  } else {
    moreBtnText.innerText = 'More';
    moreBtnImg.style.rotate = '0deg';
    deleteChild();
    index = 2;
    filteredSpeakers = speakers.slice(0, index);
    generateSpeakers();
  }
});

// get number of speakers to display on each screen size
if (window.innerWidth <= 768) {
  index = 2;
  filteredSpeakers = speakers.slice(0, index);
  generateSpeakers();
} else {
  index = 6;
  filteredSpeakers = speakers.slice(0, index);
  generateSpeakers();
}
