const recycleBtn = document.getElementById("recycle-btn");
recycleBtn.addEventListener("click", recycle);
const clearBtn = document.getElementById("clear-btn");
clearBtn.addEventListener("click", clear);
const recycleSelect = document.getElementById("recycle-select");
const recycleBin = document.getElementById("recycle-bin");
const infoParagraph = document.getElementById("info-paragraph");

function recycle() {
  if (recycleBin.innerText.length < 198) {
    recycleBin.innerText = recycleBin.innerText + recycleSelect.value;
  } else {
    recycleBtn.innerHTML = "bin full";
    recycleBtn.style.background = "red";
  }
}

function clear() {
  recycleBin.innerHTML = "";
  recycleBtn.innerHTML = "recycle";
  recycleBtn.style.background = "var(--raisin-black)";
}

// ✔️ Task: Wire up the <select> tag and recycle button so that an emoji of the selected item appears in the DOM each time the recycle button is pressed.

// ✔️ stretch goal 1️⃣ Add an item limit to indicate when the recycle bin is full

// ✔️ stretch goal 2️⃣: Add the option to empty the bin.

// stretch goal 3️⃣: Animate adding the items to the bin.
