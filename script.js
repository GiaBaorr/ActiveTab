let counter = document.querySelector(".counter");

let prevStamp;
function countDown() {
  if (counter.textContent > 0) {
    counter.textContent = counter.textContent - 1;
  } else {
    document.querySelector(".btn").removeAttribute("disabled");
    document.querySelector(".btn").classList.remove("btn-disabled");
  }
}
function checkStamp(stamp) {
  // console.log(stamp);
  if (stamp - prevStamp > 2000) {
    // console.log("just leave");
  }

  if (stamp - prevStamp > 1000 || prevStamp === undefined) {
    // console.log(prevStamp);
    prevStamp = stamp;
    countDown();
  }
  window.requestAnimationFrame(checkStamp);
}

window.requestAnimationFrame(checkStamp);
