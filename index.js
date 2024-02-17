function openModal(cardNumber) {
  var modal = document.getElementById("myModal");
  var cardNumberElement = document.getElementById("card-heading");
  cardNumberElement.textContent = cardNumber;

  const modalGroup = document.querySelector(".modal__group");
  //   show overlay
  var overlay = document.getElementById("overlay");
  setTimeout(function () {
    modal.style.opacity = "1";
    modalGroup.style.transform = "translateY(-80%)";
  }, 150);
  modal.style.display = "flex";

  overlay.style.display = "block";
}

function closeModal() {
  var modal = document.getElementById("myModal");
  const modalGroup = document.querySelector(".modal__group");
  setTimeout(function () {
    modal.style.display = "none";

    overlay.style.display = "none";
  }, 150); // After 0.3s (duration of transition), hide modal
  modal.style.opacity = "0";
}
