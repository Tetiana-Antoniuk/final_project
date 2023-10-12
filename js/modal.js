document.addEventListener("DOMContentLoaded", () => {
  const refs = {
    openModalBtn: document.querySelectorAll("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }

  refs.openModalBtn.forEach(btn => {
    btn.addEventListener("click", toggleModal);
  });

  refs.closeModalBtn.addEventListener("click", toggleModal);
});
