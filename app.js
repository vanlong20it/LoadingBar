document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".container");
  const progress = document.getElementById("progress");
  let width = 0;
  const progressTime = setInterval(() => {
    width += 20;
    progress.style.width = `${width}%`;
    if (width + 1 > 100) {
      clearInterval(progressTime);
      container.classList.add("hidden");
    }
  }, 1000);
});
