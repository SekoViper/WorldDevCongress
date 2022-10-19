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
})


// speakers
speakers = [
  {
    id: 0,
    name: "Angie Jones",
    imgUrl: "img/angie-jones.jpg",
    title: "Consectetur sint, maxime adipisci fuga nobis quo!",
    bio: "Lorem, ipsum dolor sit amet consectetur adipisicing elit dolort et uhuio",
  },
  {
    id: 1,
    name: "Bjarne Seko",
    imgUrl: "img/Bjarne.jpg",
    title: "Consectetur sint, maxime adipisci fuga nobis quo!",
    bio: "Lorem, ipsum dolor sit amet consectetur adipisicing elit dolort et uhuio",
  },
  {
    id: 2,
    name: "Cassie Kozyrkov",
    imgUrl: "img/Cassie-Kozyrkov.jpg",
    title: "Consectetur sint, maxime adipisci fuga nobis quo!",
    bio: "Lorem, ipsum dolor sit amet consectetur adipisicing elit dolort et uhuio",
  },
  {
    id: 3,
    name: "Hakon Wium Lie",
    imgUrl: "img/Hakon-Wium-Lie.jpg",
    title: "Consectetur sint, maxime adipisci fuga nobis quo!",
    bio: "Lorem, ipsum dolor sit amet consectetur adipisicing elit dolort et uhuio",
  },
]

const container = document.getElementById('speakers');
speakers.forEach(speaker => {
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
