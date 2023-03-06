const day = document.querySelector(".day");
const hour = document.querySelector(".hr");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");

var inputTime = +new Date("2023-4-1 14:00:00");
countDown();
//
setInterval(countDown, 1000);
function countDown() {
  const nowTime = +new Date();

  const times = (inputTime - nowTime) / 1000;
  var d = parseInt(times / 60 / 60 / 24);
  d = d < 10 ? "0" + d : d;
  day.innerHTML = d;
  var h = parseInt((times / 60 / 60) % 24);
  h = h < 10 ? "0" + h : h;
  hour.innerHTML = h;
  var m = parseInt((times / 60) % 60);
  m = m < 10 ? "0" + m : m;
  minute.innerHTML = m;
  var s = parseInt(times % 60);
  s = s < 10 ? "0" + s : s;
  second.innerHTML = s;
}
