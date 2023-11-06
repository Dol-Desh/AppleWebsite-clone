function setupModal(modalId, openModalId, closeModalId) {
  const modal = document.getElementById(modalId);
  const openModal = document.getElementById(openModalId);
  const closeModal = document.getElementById(closeModalId);

  if (modal && openModal && closeModal) {
    openModal.addEventListener("click", () => {
      modal.showModal();
    });

    closeModal.addEventListener("click", () => {
      modal.close();
    });
  }
}

setupModal("menu-modal", "hamburger-menu", "menu-modal-close");
setupModal("search-modal", "search-menu", "search-modal-close");
