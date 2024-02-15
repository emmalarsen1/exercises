document.body.addEventListener("mousemove", (e) => {
  const x = (e.clientX / window.innerWidth) * 100;
  const y = (e.clientY / window.innerHeight) * 100;
  document.querySelector("h1").textContent = `${x}%, ${y}%`;

  document.body.style.setProperty("--x", x);
  document.body.style.setProperty("--y", y);
});
