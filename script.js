// modal
const openModal = [...document.getElementsByClassName("open-modal")];
const body = document.body;
const modal = document.getElementById("modal");
const modalBg = document.getElementById("modal-bg");
const closeModal = document.getElementById("close-modal");

const closeModalEvent = () => {
      body.classList.remove("hide");
      modal.classList.remove("active");
      modalBg.classList.remove("active");
      videoModal.classList.remove("active");
      videoModal.innerHTML = '';
}
openModal.map(item => item.addEventListener("click", e => {
      body.classList.add("hide");
      modal.classList.add("active");
      modalBg.classList.add("active");
}))
modalBg.addEventListener("click", e => {
      e.preventDefault();
      closeModalEvent();
})
closeModal.addEventListener("click", e => {
      closeModalEvent();
})

// modal video
const videoBtn = [...document.getElementsByClassName("review__item")];
const videoModal = document.getElementById("modal-video");

videoBtn.map(btn => btn.addEventListener("click", e => {
      const video = document.createElement("video");
      video.src = btn.getAttribute("video");
      video.setAttribute("controls", '');
      videoModal.innerHTML = '';
      videoModal.appendChild(video);
      body.classList.add("hide");
      videoModal.classList.add("active");
      modalBg.classList.add("active");
}))


// telephone validation
let inp = document.querySelector('#tel');

inp.addEventListener('focus', _ => {
      if (!/^\+\d*$/.test(inp.value))
            inp.value = '+';
});

inp.onclick = function () {
      inp.value = "+7";
}

var old = 0;
inp.addEventListener('keypress', e => {
      if (!/\d/.test(e.key))
            e.preventDefault();

      var curLen = inp.value.length;

      if (curLen < old) {
            old--;
            return;
      }

      if (curLen == 2)
            inp.value = inp.value + "(";

      if (curLen == 6)
            inp.value = inp.value + ")-";

      if (curLen == 11)
            inp.value = inp.value + "-";

      if (curLen == 14)
            inp.value = inp.value + "-";

      if (curLen > 16)
            inp.value = inp.value.substring(0, inp.value.length - 1);

      old++;
});