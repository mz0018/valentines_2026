
onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };

  window.addEventListener("load", () => {
    const music = document.getElementById("sb19");
    if (music) {
      music.volume = 1;
      music.play().catch(() => {});
    }
  });