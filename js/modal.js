(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
    document.body.classList.toggle("no-scroll");
  }
})();


// script.js

// var modal = document.getElementById("myModal");
// var btn = document.getElementById("openModalBtn");
// var span = document.getElementsByClassName("close")[0];
// var backdrop = document.getElementById("backdrop");

// btn.onclick = function() {
//     modal.style.display = "block";
//     backdrop.style.display = "block";
// }

// span.onclick = function() {
//     modal.style.display = "none";
//     backdrop.style.display = "none";
// }

// backdrop.onclick = function() {
//     modal.style.display = "none";
//     backdrop.style.display = "none";
// }

