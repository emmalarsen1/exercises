const list = document.querySelector("ul");
const arrCue = [];
setInterval(generateBars, 1000);

function generateBars() {
  console.log(arrCue);
  const randoNum = getRandomNum();
  arrCue.push(randoNum);
  const li = document.createElement("li");
  li.style.setProperty("--height", randoNum);
  list.appendChild(li);
  console.log(list.firstchild);
  if (arrCue.length > 20) {
    arrCue.shift();
    list.removeChild(list.firstChild);
  }
}

function getRandomNum() {
  return Math.round(Math.random() * 100);
}
