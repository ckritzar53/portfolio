// Toggle Search Bar
const searchToggle = document.querySelector('.search-toggle');
const searchBar = document.querySelector('.search-bar');
const backBtn = document.querySelector('.back-btn');

searchToggle.addEventListener('click', () => {
  searchBar.classList.remove('hidden');
});

backBtn.addEventListener('click', () => {
  searchBar.classList.add('hidden');
});

// Close search when clicking outside
document.addEventListener('click', (e) => {
  if (!searchBar.contains(e.target) && !searchToggle.contains(e.target)) {
    searchBar.classList.add('hidden');
  }
});

// Footer info toggle
const infoBtn = document.querySelector('.info-btn');
const infoPopup = document.querySelector('.info-popup');

infoBtn.addEventListener('click', () => {
  infoPopup.classList.toggle('hidden');
});
