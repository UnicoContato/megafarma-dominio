const menuButton = document.querySelector(".menu-toggle");
const menu = document.querySelector(".nav-menu");
const imageModal = document.querySelector("#image-modal");
const privacyModal = document.querySelector("#privacy-modal");

function openModal(modal) {
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeModal(modal) {
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

menuButton?.addEventListener("click", () => {
  const isOpen = menu.classList.toggle("is-open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

menu?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("is-open");
    menuButton?.setAttribute("aria-expanded", "false");
  });
});

document.querySelectorAll(".gallery-item").forEach((item) => {
  item.addEventListener("click", () => {
    const image = imageModal.querySelector("img");
    const caption = imageModal.querySelector("p");

    image.src = item.dataset.image;
    image.alt = item.dataset.caption;
    caption.textContent = item.dataset.caption;
    openModal(imageModal);
  });
});

document.querySelector(".privacy-open")?.addEventListener("click", () => {
  openModal(privacyModal);
});

document.querySelectorAll("[data-close]").forEach((button) => {
  button.addEventListener("click", () => {
    closeModal(button.closest(".modal"));
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") {
    return;
  }

  document.querySelectorAll(".modal.is-open").forEach(closeModal);
});
