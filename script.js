const noBtn = document.getElementById("noBtn");
const box = document.getElementById("box");

// No button movement (if it exists)
const safeDistance = 100;
const padding = 10;
let isMoving = false;

if (noBtn && box) {
    box.addEventListener("mousemove", (e) => {
        if (isMoving) return;

        const btnRect = noBtn.getBoundingClientRect();
        const btnCenterX = btnRect.left + btnRect.width / 2;
        const btnCenterY = btnRect.top + btnRect.height / 2;

        const distance = Math.hypot(
            e.clientX - btnCenterX,
            e.clientY - btnCenterY
        );

        if (distance < safeDistance) {
            isMoving = true;

            const maxX = box.clientWidth - noBtn.offsetWidth - padding;
            const maxY = box.clientHeight - noBtn.offsetHeight - padding;

            const randomX = Math.random() * maxX + padding;
            const randomY = Math.random() * maxY + padding;

            noBtn.style.left = `${randomX}px`;
            noBtn.style.top = `${randomY}px`;

            setTimeout(() => (isMoving = false), 300);
        }
    });
}

// Yes button click — play audio and redirect immediately
const yesBtn = document.getElementById("yesBtn");
const kilig = document.getElementById("kilig");

if (yesBtn && kilig) {
    yesBtn.addEventListener("click", () => {
        kilig.play(); // play audio immediately
        window.location.href = yesBtn.parentElement.href; // redirect immediately
    });
}
