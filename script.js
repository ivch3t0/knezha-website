function filterSelection(category) {
  const images = document.getElementsByClassName("filter-item");
  const buttons = document.getElementsByClassName("filter-btn");

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("active");
  }

  event.target.classList.add("active");

  for (let i = 0; i < images.length; i++) {
    const img = images[i];
    if (category === "all" || img.classList.contains(category)) {
      img.style.display = "block";
    } else {
      img.style.display = "none";
    }
  }
}

// Modal functionality
function openModal(img) {
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modal-img");
  const caption = document.getElementById("caption");

  modal.style.display = "block";
  modalImg.src = img.src;
  caption.innerHTML = img.alt;
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}
