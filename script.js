// ===== Smooth Scroll for Navigation =====
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 60,
        behavior: "smooth"
      });
    }
  });
});

// ===== Search Bar Logic =====
const searchInput = document.querySelector(".search-bar input");
const searchButton = document.querySelector(".search-bar button");

searchButton.addEventListener("click", () => {
  const query = searchInput.value.trim();
  if (query === "") {
    alert("Please enter a topic or question!");
    return;
  }

  // Show a fake result popup for demo
  alert(`🔍 Searching for "${query}"...\n(This is a demo. Backend integration can be added later.)`);
  searchInput.value = "";
});

// ===== Subject Card Hover Animation =====
const cards = document.querySelectorAll(".subject-card");
cards.forEach(card => {
  card.addEventListener("mouseenter", () => {
    card.style.boxShadow = "0 12px 25px rgba(108,99,255,0.3)";
  });
  card.addEventListener("mouseleave", () => {
    card.style.boxShadow = "0 6px 18px rgba(0,0,0,0.1)";
  });
});

// ===== Welcome Popup =====
window.addEventListener("load", () => {
  setTimeout(() => {
    alert("👋 Welcome to Study Zone!\nExplore NCERT + Board questions with detailed solutions.");
  }, 800);
});
