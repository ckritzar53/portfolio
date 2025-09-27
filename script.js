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

// Business Hours Logic
function updateBusinessStatus() {
  const statusEl = document.getElementById('status');
  const now = new Date();
  const day = now.getDay(); // 0=Sunday
  const hour = now.getHours();
  const minutes = now.getMinutes();

  // Define hours (24h format)
  const schedule = {
    0: null, // Sunday Closed
    1: [9, 18],
    2: [9, 18],
    3: [9, 18],
    4: [9, 18],
    5: [9, 20],
    6: [10, 16]
  };

  const today = schedule[day];

  if (!today) {
    statusEl.textContent = "Closed Today";
    return;
  }

  const [open, close] = today;
  if (hour < open) {
    const diff = open * 60 - (hour * 60 + minutes);
    statusEl.textContent = `Opening in ${Math.ceil(diff / 60)} hours`;
  } else if (hour >= close) {
    statusEl.textContent = "Closed";
  } else if (hour === close - 1 && minutes >= 45) {
    statusEl.textContent = "Closing Soon";
  } else {
    statusEl.textContent = `Open until ${close}:00`;
  }

  // Highlight current day
  const days = ["sun","mon","tue","wed","thu","fri","sat"];
  document.getElementById(days[day]).parentElement.classList.add("current-day");
}

updateBusinessStatus();
