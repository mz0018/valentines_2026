// ===============================
// ELEMENTS
// ===============================
const noBtn = document.getElementById("noBtn");
const box = document.getElementById("box");

const safeDistance = 180;
const padding = 10;
let isMoving = false;

// ===============================
// NO BUTTON RUNAWAY (index.html only)
// ===============================
if (noBtn && box) {
  box.addEventListener("mousemove", (e) => {
    if (isMoving) return;

    const btnRect = noBtn.getBoundingClientRect();

    const btnCenterX = btnRect.left + btnRect.width / 2;
    const btnCenterY = btnRect.top + btnRect.height / 2;

    const cursorX = e.clientX;
    const cursorY = e.clientY;

    const distance = Math.sqrt(
      (cursorX - btnCenterX) ** 2 + (cursorY - btnCenterY) ** 2,
    );

    if (distance < safeDistance) {
      isMoving = true;

      const maxX = box.clientWidth - noBtn.offsetWidth - padding;
      const maxY = box.clientHeight - noBtn.offsetHeight - padding;

      const randomX = Math.random() * maxX + padding;
      const randomY = Math.random() * maxY + padding;

      noBtn.style.left = randomX + "px";
      noBtn.style.top = randomY + "px";

      setTimeout(() => {
        isMoving = false;
      }, 150);
    }
  });
}

// ===============================
// YES PAGE EFFECTS (yes.html only)
// ===============================
window.addEventListener("load", () => {
  const music = document.getElementById("bgMusic");

  // If bgMusic exists, we are on yes.html
  if (music) {
    music.volume = 0.7;
    music.play().catch(() => {});

    startHearts();
  }
});

// ===============================
// HEART CONFETTI
// ===============================
function startHearts() {
  setInterval(() => {
    createHeart();
  }, 70); // smaller number = MORE hearts
}

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "💖";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 20 + 15 + "px";
  heart.style.animationDuration = Math.random() * 3 + 3 + "s";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 6000);
}
